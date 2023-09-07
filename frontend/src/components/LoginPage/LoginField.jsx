import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

export default function LoginField({newUser, setLoginActive}) {
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
    <div className='data-input'>
      <div className='close-btn-container'>
        <img src='src/pixel/x.png' onClick={() => setLoginActive(false)} />
      </div>
      <form className='input-form' onSubmit={handleLogin}>
        <label htmlFor='name'>Name:</label>
        <input value={name} autoFocus type="text" name="name" onChange={handleNameChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handlePasswordChange} />
        <button type='submit' className='submit-btn'>Login</button>
      </form>
    </div>
  )
}
