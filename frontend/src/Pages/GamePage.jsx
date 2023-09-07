import { useState } from "react";
import GameApp from "../game/GameApp";
const GamePage = () => {
    const [playerCharacter, setPlayerCharacter] = useState(null);
    return (<>
        <h1>The GAME</h1>
        {playerCharacter === null?<button onClick={() => setPlayerCharacter({name: "asd",})}>start</button>:<GameApp playerCharacter={playerCharacter}/>}
        
    </>)
}
export default GamePage;