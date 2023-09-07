import React, {useState} from 'react'

const BASE_URL = "http://localhost:8080";

export default function CreateField({handleNewUser}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(BASE_URL + "/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: name, password: password }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then(() => handleNewUser(name));
    }

  return (
    <div className='data-input'>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleNameChange}/>
            <input type='password' name='password'onChange={handlePasswordChange}/>
            <button>CREATE!</button>
        </form>
    </div>
  )
}
