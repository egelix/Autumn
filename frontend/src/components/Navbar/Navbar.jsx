import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar">
					<div className="navbar-div">
						<Link to="/">Home</Link>
					</div>
					<div className="navbar-div">
						<Link to="/reverse">Reverse</Link>
						<Link to="/game">Game</Link>
						<Link to="/user">Users</Link>
					</div>
				</nav>
        </div>
    )
}