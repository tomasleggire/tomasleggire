import React, { useState } from 'react'
import '../styles/Navbar.scss';
import { MdAccountBox } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdEast } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { Link } from 'react-router-dom';

import NavMenu from './NavMenu';
import NavMenuMobile from './NavMenuMobile';

export default function Navbar() {

    const [menuValue, setMenuValue] = useState(false);
    const [menuMobileValue, setMenuMobileValue] = useState(false);

    const openModal = () => {
        setMenuValue(true);
        setMenuMobileValue(true);
    }
    const closeModal = () => {
        setMenuValue(false);
        setMenuMobileValue(false);
    }

    return (
        <>
            <header className='nav-main'>
                <nav className='nav'>
                    <Link to="/" className='link-nav-home' onClick={closeModal}><MdAccountBox className='icon-nav'/></Link>
                    {menuValue ? <MdClear onClick={closeModal} className='icon-nav'/> : <MdOutlineMenu className='icon-nav' onClick={openModal}/>}
                    <h4 className='h4-nav'><span className='span-nav'>© 2023</span> TomásLeggire</h4>
                </nav>
            </header>
            <NavMenu menuValue={menuValue} setMenuValue={setMenuValue}/>
            <NavMenuMobile menuMobileValue={menuMobileValue} setMenuMobileValue={setMenuMobileValue} />
            <MdEast className='icon-nav nav-mobile' onClick={openModal}/>
        </>
    )
}