import React, { useState } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci"

const Header = () => {
const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
}

    return (
        <nav className = "cont">
            <img className = "w-45 shadow-xl " src="./file.svg" alt="Bolpslogo"></img>
            <ul className={mobileMenu?"" : "hide-mobile-menu" }>
                <li><Link to="/"><button className="btn">Home</button></Link></li>
                <li><Link to="/Services"><button className="btn">Services</button></Link></li>
                <li><Link to="/ContactUs"><button className="btn">Contact Us</button></Link></li>
                
        
        
            </ul>
            <CiMenuBurger className="menu-icon" onClick={toggleMenu}/>
        </nav>
    )
};

export default Header