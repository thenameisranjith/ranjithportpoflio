import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom'

const Nav = () => {
    const navStyle={
        color:"white"
    }
    return (
        <nav>
            <h3>Green Sky</h3>
            <ul className="nav-link">
                <Link style={navStyle} to="/about"> 
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/gallery">
                    <li>Gallery</li>
                </Link>
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;