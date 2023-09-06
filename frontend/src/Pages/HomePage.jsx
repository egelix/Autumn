import { useState } from "react";
//import { Buffer } from "buffer";
import Layout from "../components/Layout/Layout";

const BASE_URL = "http://localhost:8080"

const HomePage = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    //const [user, setUser] = useState({name: "", password: ""})

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        fetch(BASE_URL + "/auth/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({"name": name, "password": password})})
        .then(response => response.json())
        .then(data => localStorage.setItem("jwt", data.accessToken));
    };

    const handleFetchBasicAuth = () => {
        fetch(BASE_URL + "/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + Buffer.from("martin:12345").toString("base64")
            }
        })
        .then(response => response.json())
        .then(data => console.log(data));    
    };

    const handleFetch = () => {
        fetch(BASE_URL + "/users");
    };

    const handleFetchToken = () => {
        const jwt = localStorage.getItem("jwt");
        console.log(jwt);
        fetch(BASE_URL + "/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + jwt
            }
        })
        .then(response => response.json())
        .then(data => console.log(data));  
    };

    return (
        <>
            <h1>Cool Game</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure a quae soluta architecto eius voluptatibus, deleniti nulla tempore eaque aliquid deserunt dignissimos, optio ducimus distinctio, quis earum doloremque ex.</p>
            <form onSubmit={handleLogin}>
                <input type="text" name="name" onChange={handleNameChange} />
                <input type="text" name="password" onChange={handlePasswordChange}/>
                <button>Login</button>
            </form>
            <button onClick={handleFetchBasicAuth}>basicAuth</button>
            <button onClick={handleFetch}>fetchWithoutAuth</button>
            <button onClick={handleFetchToken}>fetchWithToken</button>     
        </>
    )
}
export default HomePage;