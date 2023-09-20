import { useState } from "react";
import GameApp from "../game/GameApp";
import CharacterSelect from "../components/CharacterSelect/CharacterSelect";
const GamePage = () => {
    const [playerCharacter, setPlayerCharacter] = useState(null);
    const [gameOverDisplay, setGameOverDisplay] = useState(null);
    const restartGame = () => {
        setGameOverDisplay(null);
        setPlayerCharacter(null);
    }
    return (<div className="page-root">
        {playerCharacter === null?<CharacterSelect setPlayerCharacter={setPlayerCharacter} />:<GameApp playerCharacter={playerCharacter} isLoggedIn={true}/>} 
        {gameOverDisplay === null? null: <div>
            <p>{gameOverDisplay}</p>
            <button onClick={restartGame}>RESTART</button>
            </div>}       
    </div>)
}
export default GamePage;