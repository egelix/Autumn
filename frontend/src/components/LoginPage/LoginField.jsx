import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

export default function LoginField({newUser}) {
  const navigate = useNavigate();
  const [name, setName] = useState(newUser);
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, password: password }),
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem("jwt", data.accessToken))
      .then(() => navigate("/account/home"));
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input value={name} type="text" name="name" onChange={handleNameChange} />
        <input type="text" name="password" onChange={handlePasswordChange} />
        <button>Login</button>
      </form>
    </div>
  )
}
