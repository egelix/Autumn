import React, { useState } from "react";
import LoginField from "../../components/LoginPage/LoginField";
import CreateField from "../../components/LoginPage/CreateField";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [logInActive, setLogInActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);
  const [newUser, setNewUser] = useState("")

  /*const handleFetchBasicAuth = () => {
    fetch(BASE_URL + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from("martin:12345").toString("base64"),
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
        Authorization: "Bearer " + jwt,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };*/

  const handleNewUser = (name) => {
    setNewUser(name);
    setCreateActive(false);
    setLogInActive(true);
  }

  let login = !logInActive ? (
    <button
      onClick={() => {
        setLogInActive(true);
        setCreateActive(false);
      }}
    >
      login
    </button>
  ) : (
    <LoginField newUser={newUser}/>
  );
  
  let create = !createActive ? (
    <button
      onClick={() => {
        setLogInActive(false);
        setCreateActive(true);
      }}
    >
      CREATE USER
    </button>
  ) : (
    <CreateField handleNewUser={handleNewUser} />
  );

  return (
    <div className="login-root">
      <div>
        <img src="src/pixel/Welcome.png" alt="welcome logo" />
      </div>
      <div>
        <Link className="link-button" to={"/game"}>QUICK PLAY</Link> 
      </div>
      <div>
        {login} 
      </div>
      <div>
        {create}
      </div>
      {/*<button onClick={handleFetchBasicAuth}>basicAuth</button>
      <button onClick={handleFetch}>fetchWithoutAuth</button>
  <button onClick={handleFetchToken}>fetchWithToken</button>{" "}*/}
    </div>
  );
}
