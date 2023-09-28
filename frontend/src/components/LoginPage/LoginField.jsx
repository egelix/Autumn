import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import fetchUser from '../../user/fetchUser';
import UserContext from '../../user/UserContext';
import { Buffer } from 'buffer';
import BASE_URL from '../../constants';

export default function LoginField({newUser, setLoginActive}) {
  const navigate = useNavigate();
  const [name, setName] = useState(newUser);
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(BASE_URL + "/auth/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from(name + ":" + password).toString("base64")
      }
      // body: JSON.stringify({ name: name, password: password }),
    })
    .then(response => {localStorage.setItem("Authorization", response.headers.get("Authorization"));
                        return response.json();})
      .then(user => {
        console.log(user.id)
        localStorage.setItem("userId", user.id);
        setCurrentUser({name: user.username, id: user.id, authorities: user.authorities});
      })
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
