import React, { useState } from "react";
import "../App.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GrEmergency } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navBar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <GrEmergency className="navbar-icon" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <AiOutlineBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            <Link className="textLink" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="textLink" to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;