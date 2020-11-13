import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../FileCSS/Nav.css";

export default function Nav() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <header className="Navbar">
        <nav className="nav">
            <NavLink className="company" to="#">
                <i className="fab fa-accusoft"></i> Reno
                <strong style={{ color: "yellow" }}>Vina</strong>
            </NavLink>
            <div className="menu-wrap">
                <div>
                <ul className={ click ? 'nav-active' : 'nav-inactive' }>
                    <li><NavLink to="./Web" activeClassName="nav-menu-active"className="Link">Home</NavLink></li>
                    <li><NavLink to="./About" activeClassName="nav-menu-active"className="Link">About</NavLink></li>
                    <li><NavLink to="./Contact"activeClassName="nav-menu-active" className="Link">Contact</NavLink></li>
                    <li><NavLink to="./Service" activeClassName="nav-menu-active"className="Link">Service</NavLink></li>
                </ul>
                </div>
            </div>
                <div className="menu-icon" onClick={ handleClick }>
                    <i className={ click ? 'fa fa-times': 'fa fa-bars'} />
                </div>                  
            </nav>
        </header>
    );
}
