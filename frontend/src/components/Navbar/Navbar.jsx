import { useContext } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import UserContext from "../../user/UserContext";

export default function Navbar() {
	const [currentUser, setCurrentUser] = useContext(UserContext);
    return (
        <div className="container">
            <nav className="navbar">
					<div className="navbar-div">
						<Link to="/account/home">Home</Link>
					</div>
						<p className="navbar-text">Hello {currentUser.name}</p>
					<div className="navbar-div">
						<Link to="/account/reverse">Reverse</Link>
						<Link to="/account/game">Game</Link>
						<Link to="/account/user">Users</Link>
					</div>
				</nav>
        </div>
    )
}