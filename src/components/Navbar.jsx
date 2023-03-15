import React, { useContext } from 'react'
import '../styles/Navbar.scss';
import { MdAccountBox } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import AppContext from '../context/AppContext';

export default function Navbar({ isVisible }) {

    const { navState } = useContext(AppContext);

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
                        <li className={`nav-li ${navState.services ? 'nav-visible' : ''}`}>
                            SERVICES
                        </li>
                        <li className={`nav-li ${navState.portfolio ? 'nav-visible' : ''}`}>
                            PORTFOLIO
                        </li>
                        <li className={`nav-li ${navState.contact ? 'nav-visible' : ''}`}>
                            CONTACT
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}