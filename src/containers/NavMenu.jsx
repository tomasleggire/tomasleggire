import React from "react";
import '../styles/NavMenu.scss';

export default function NavMenu({ menuValue, setMenuValue }) {
    return (
        <div className={`main-nav-menu ${menuValue ? 'visible-menu' : ''}`}>

        </div>
    )
}