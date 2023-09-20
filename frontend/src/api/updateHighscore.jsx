const BASE_URL = "http://localhost:8080";
const updateHighscore = (highscore) => {
    const id = localStorage.getItem("userId");
    return fetch(BASE_URL + `/users/highscore/${id}`,
    {
        method: "PATCH",
        headers: {
            "Authorization": localStorage.getItem("Authorization"),
          },
       body: JSON.stringify({ 
        "highscore": highscore 
    }),        
    })
    .then((response) => response.json())
}
export default updateHighscore;