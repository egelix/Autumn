import { useContext } from "react";
import UserContext from "./UserContext";
const BASE_URL = "http://localhost:8080";

const fetchUser = () => {
    const id = localStorage.getItem("userId");
    return fetch(BASE_URL + "/users/" + id,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt"),
          }
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    })
}
export default fetchUser;