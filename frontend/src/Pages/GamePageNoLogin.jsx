import { useState } from "react";
import GameApp from "../game/GameApp";
import CharacterSelect from "../components/CharacterSelect/CharacterSelect";
const GamePageNoLogin = () => {
    const [playerCharacter, setPlayerCharacter] = useState(null);
    const [gameOverDisplay, setGameOverDisplay] = useState(null);
    const restartGame = () => {
        setGameOverDisplay(null);
        setPlayerCharacter(null);
    }
    return (
    <div className="page-root">
        {playerCharacter === null?<CharacterSelect setPlayerCharacter={setPlayerCharacter} />:
        gameOverDisplay === null?<GameApp playerCharacter={playerCharacter} isLoggedIn={false} setGameOverDisplay={setGameOverDisplay}/>: null} 
        {gameOverDisplay === null? null: <div>
            <p>{gameOverDisplay}</p>
            <button onClick={restartGame}>RESTART</button>
            </div>}  
    </div>
        )
}
export default GamePageNoLogin;