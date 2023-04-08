import React from "react";
import '../styles/NavMenuMobile.scss';

export default function NavMenuMobile({ menuMobileValue, setMenuMobileValue }) {
    return (
        <div className={`main-menu-mobile ${menuMobileValue ? 'visible-menu-mobile' : ''}`}>
            <button onClick={()=>setMenuMobileValue(false)}>x</button>
        </div>
    )
}