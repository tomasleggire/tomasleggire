import React from 'react'
import '../styles/Navbar.scss';
import { MdAccountBox } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";

export default function Navbar({ isVisible }) {

    return (
        <header className={`nav-main ${!isVisible ? 'visible' : ''}`}>
            <nav className='nav'>
                <div className='name-title'>
                    <MdAccountBox className='title-icon'/>
                    <h3 className='title-h3'>tomás.me</h3>
                </div>
                <MdOutlineFormatListBulleted className='nav-menu-icon' />
                <div className='nav-links'>
                    <ul>
                        <li className='nav-li'>
                            SERVICES
                        </li>
                        <li className='nav-li'>
                            PORTFOLIO
                        </li>
                        <li className='nav-li'>
                            CONTACT
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}