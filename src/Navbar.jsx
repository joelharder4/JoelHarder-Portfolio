import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (<>
        <div className="navbar">
            <div className="navlink">
                <Link to="/">Home</Link>
            </div>
            <div className="navlink">
                <Link to="/about">About</Link>
            </div>
            <div className="navlink">
                <Link to="/projects">Projects</Link>
            </div>
            <div className="navlink">
                <Link to="/ai">AI</Link>
            </div>
        </div>
    </>);
}

export default Navbar;