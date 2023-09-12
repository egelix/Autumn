import { useContext } from "react";
import UserContext from "./UserContext";
const BASE_URL = "http://localhost:8080";

const fetchUser = (id) => {
    fetch(BASE_URL + "/users/" + id,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt"),
          }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return data;
    })
}
export default fetchUser;