import { useState } from "react";

const fetchCreateUser = (username, password) => {
    return fetch("http://localhost:8080/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    }).then((res) => res.json());
}

const fetchGetAllUsers = () => {
    return fetch("http://localhost:8080/user/all").then((res) => res.json());
}

const fetchDeleteUserById = (id) => {
    return fetch("http://localhost:8080/user", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
    }).then((res) => res.json());
}

const UserPage = () => {

    const [users, setUsers] = useState(null);

    const handleUserCreate = (event, username, password) => {
        event.preventDefault();
        fetchCreateUser(username, password).then((res) => {
            console.log(res);
        })
    }

    const getAllUsers = (event) => {
        event.preventDefault();
        fetchGetAllUsers().then((res) => setUsers(res))
    }

    const deleteUserById = (event, id) => {
        event.preventDefault();
        fetchDeleteUserById(id).then((res) => {
            console.log(res);
            document.getElementById(id).remove();
        })
    }

    return (
        <>
            <h1>USER CONTROL</h1>
            <div>Create new User -{">"}
                <label>Username:</label>
                <input type="text" id="usernameInput" />
                <label>Password:</label>
                <input type="password" id="passwordInput" />
            </div>
            <button type="button" onClick={(e) =>
                handleUserCreate(
                    e,
                    document.getElementById("usernameInput").value,
                    document.getElementById("passwordInput").value
                )}>Create</button>
            <div>Users:
                <button type="button" onClick={getAllUsers}>Get All</button>
            </div>
            <ul>
                {users?.map(user => (
                    <li key={user.id}>{user.username}
                        <button type="button" onClick={(e) => deleteUserById(e, user.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserPage;