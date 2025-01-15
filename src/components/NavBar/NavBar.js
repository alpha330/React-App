import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => (
    <ul className="Navbar">
        <Link to="/Contact">
        <li className="NavBar-Item">Contact Us</li>
        </Link>  
        <Link to="/AboutMe">
        <li className="NavBar-Item">About Me</li>
        </Link>
        <Link to="/">
        <li className="NavBar-Item">Shop</li>
        </Link>   
        <Link to="/Blog">
        <li className="NavBar-Item">Blog</li>
        </Link>                            
    </ul>
)

export default NavBar