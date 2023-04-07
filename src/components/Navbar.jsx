import React from 'react'
import '../styles/Navbar.scss';
import { MdAccountBox } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdEast } from "react-icons/md";

export default function Navbar() {

    return (
        <>
            <header className='nav-main'>
                <nav className='nav'>
                    <MdAccountBox className='icon-nav' />
                    <MdOutlineMenu className='icon-nav' />
                    <h4 className='h4-nav'><span className='span-nav'>© 2023</span> TomásLeggire</h4>
                </nav>
            </header>
            <MdEast className='icon-nav nav-mobile'/>
        </>
    )
}