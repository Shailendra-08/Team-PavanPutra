import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {

    return (
        <div>

            <footer>
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><a href="#about">Mission</a></li>
                            <li><a href="#projects">Our Work</a></li>
                            <NavLink to={"/Arti"}>Arti</NavLink>

                            <li><a href="#contact">Contact</a></li>
                        </ul>

                    </div>
                </nav>
                <p>|| जय श्री राम ||</p>

                <p>Copyright ©Team - Misssion PawanPutra. All Rights Reserved.</p>
            </footer>

        </div>
    )
}

export default Footer
