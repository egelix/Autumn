export default function CharacterCard({character, setPlayerCharacter}) {
    return(
        <div>
            <h2>{character.name}</h2>
            <button onClick={() => {setPlayerCharacter(character)}}>Select</button>
        </div>
    )
}