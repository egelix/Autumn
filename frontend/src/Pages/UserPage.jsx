import { useState } from "react";

const fetchCreateUser = (username, password) => {
    return fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    }).then((res) => res.json());
}

const fetchGetAllUsers = () => {
    return fetch("http://localhost:8080/user").then((res) => res.json());
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

    const handleUserCreate = (username, password) => {
        fetchCreateUser(username, password).then((res) => {
            print(res);
        })
    }

    const getAllUsers = () => {
        fetchGetAllUsers().then((res) => setUsers(res))
    }

    const deleteUserById = (id) => {
        fetchDeleteUserById(id).then((res) => {
            print(res);
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
            <button type="button" onClick={() =>
                handleUserCreate(
                    document.getElementById("usernameInput").value,
                    document.getElementById("passwordInput").value
                )}>Create</button>
            <div>Users:
                <button type="button" onClick={getAllUsers}>Get All</button>
            </div>
            <ul>
                {users?.map(user => (
                    <li key={user.id}>{user.username}
                        <button type="button" onClick={() => deleteUserById(user.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserPage;