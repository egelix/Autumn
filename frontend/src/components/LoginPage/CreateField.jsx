import React, {useState} from 'react'

const BASE_URL = "http://localhost:8080";

export default function CreateField() {
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
            .then((data) => console.log(data));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleNameChange}/>
            <input type='text' name='password'onChange={handlePasswordChange}/>
            <button>CREATE!</button>
        </form>
    </div>
  )
}
