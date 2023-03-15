import React from 'react'
import '../styles/Navbar.scss';
import { MdAccountBox } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Link } from "react-scroll";

export default function Navbar({ isVisible }) {

    return (
        <header className={`nav-main ${!isVisible ? 'visible' : ''}`}>
            <nav className='nav'>
                <Link smooth to="home">
                <div className='name-title'>
                    <MdAccountBox className='title-icon' />
                    <h3 className='title-h3'>tomás.me</h3>
                </div>
                </Link>
                <MdOutlineFormatListBulleted className='nav-menu-icon' />
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link activeClass='active' smooth spy to="services" className='nav-li' offset={-80}>
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='active' smooth spy to="portfolio" className='nav-li' offset={-60}>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='active' smooth spy to="contact" className='nav-li' offset={-100}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}