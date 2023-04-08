import React from "react";
import '../styles/NavMenuMobile.scss';
import { MdClear } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavMenuMobile({ menuMobileValue, setMenuMobileValue }) {
    return (
        <div className={`main-menu-mobile ${menuMobileValue ? 'visible-menu-mobile' : ''}`}>
            <div className="head-menu-mobile">
                <Link to='/' onClick={()=>setMenuMobileValue(false)} ><MdAccountBox className="icon-menu-mobile"/></Link>
                <MdClear className="icon-menu-mobile close-icon-mobile" onClick={()=>setMenuMobileValue(false)}/>
            </div>
            <div className="links-menu-mobile">
                <ul>
                    <li>
                        <Link to="/" onClick={()=>setMenuMobileValue(false)} className="link-mobile">
                            <h2><span>01. </span>HOME</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={()=>setMenuMobileValue(false)} className="link-mobile">
                            <h2><span>02. </span>ABOUT</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" onClick={()=>setMenuMobileValue(false)} className="link-mobile">
                            <h2><span>03. </span>RESUME</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/works" onClick={()=>setMenuMobileValue(false)} className="link-mobile">
                            <h2><span>04. </span>WORKS</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={()=>setMenuMobileValue(false)} className="link-mobile">
                            <h2><span>05. </span>CONTACT</h2>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-menu-mobile">
            <h4 className='h4-nav-mobile'><span className='span-nav-mobile'>© 2023</span> TomásLeggire</h4>
            </div>
        </div>
    )
}