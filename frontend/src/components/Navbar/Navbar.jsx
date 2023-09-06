import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar">
					<div className="navbar-div">
						<Link to="/account/home">Home</Link>
					</div>
					<div className="navbar-div">
						<Link to="/account/reverse">Reverse</Link>
						<Link to="/account/game">Game</Link>
						<Link to="/account/user">Users</Link>
					</div>
				</nav>
        </div>
    )
}