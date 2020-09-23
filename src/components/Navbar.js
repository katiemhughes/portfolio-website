import React, { useState } from "react";
import "../App.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GrEmergency } from "react-icons/gr";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="navBar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <GrEmergency className="navbar-icon" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            <Link className="textLink" to="/" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="textLink" to="/about" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="textLink" to="/stack" onClick={closeMobileMenu}>Tech Stack</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="textLink" to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;