import { useState } from "react";
import GameApp from "../game/GameApp";
import CharacterSelect from "../components/CharacterSelect/CharacterSelect";
const GamePageNoLogin = () => {
    const [playerCharacter, setPlayerCharacter] = useState(null);
    return (
    <div className="page-root">
        {playerCharacter === null?<CharacterSelect setPlayerCharacter={setPlayerCharacter} />:<GameApp playerCharacter={playerCharacter} isLoggedIn={false}/>}
    </div>
        )
}
export default GamePageNoLogin;