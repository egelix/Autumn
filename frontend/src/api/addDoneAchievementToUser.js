const BASE_URL = "http://localhost:8080";
const addDoneAchievementToUser = (achievements) => {
    const id = parseInt(localStorage.getItem("userId"));
    return fetch(BASE_URL + "/achievements",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("Authorization"),
          },
       body: JSON.stringify({ 
        id: id, 
        doneAchievements: achievements 
    }),        
    })
    .then((response) => response.json())
}
export default addDoneAchievementToUser;