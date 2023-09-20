const BASE_URL = "http://localhost:8080";
const createRun = (score, characterName) => {
    const id = localStorage.getItem("userId");
    return fetch(BASE_URL + "game-runs",
    {
        method: "POST",
        headers: {
            "Authorization": localStorage.getItem("Authorization"),
          },
       body: JSON.stringify({ 
        userId: id, 
        score: score,
        character: characterName, 
    }),        
    })
    .then((response) => response.json())
}
export default createRun;