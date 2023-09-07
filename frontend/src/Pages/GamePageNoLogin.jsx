import { useState } from "react";
import GameApp from "../game/GameApp";
import CharacterSelect from "../components/CharacterSelect/CharacterSelect";
const GamePageNoLogin = () => {
    const [playerCharacter, setPlayerCharacter] = useState(null);
    return (<>
        <h1>The GAME</h1>
        {playerCharacter === null?<CharacterSelect setPlayerCharacter={setPlayerCharacter} />:<GameApp playerCharacter={playerCharacter}/>}
        
    </>)
}
export default GamePageNoLogin;