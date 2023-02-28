import React from 'react'
import '../styles/Navbar.scss';
import { MdAccountBox } from "react-icons/md";

export default function Navbar() {
    return (
        <header className='nav-main'>
            <nav className='nav'>
                <div className='name-title'>
                    <MdAccountBox className='title-icon'/>
                    <h3 className='title-h3'>tomás.me</h3>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            SERVICES
                        </li>
                        <li>
                            PORTFOLIO
                        </li>
                        <li>
                            PRICING
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}