import React, { useState } from "react";
import LoginField from "../components/LoginPage/LoginField";
import CreateField from "../components/LoginPage/CreateField";

export default function LoginPage() {
  const [logInActive, setLogInActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);

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
    <LoginField />
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
    <CreateField />
  );

  return (
    <div>
      {login}
      {create}
      {/*<button onClick={handleFetchBasicAuth}>basicAuth</button>
      <button onClick={handleFetch}>fetchWithoutAuth</button>
  <button onClick={handleFetchToken}>fetchWithToken</button>{" "}*/}
    </div>
  );
}
