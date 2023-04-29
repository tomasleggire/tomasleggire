import React from "react";
import '../styles/NavMenu.scss';
import LinkItem from "../components/LinkItem";

export default function NavMenu({ menuValue, setMenuValue }) {

    const links = [
        {
            id: 1,
            text: 'Home',
            path: "/",
        },
        {
            id: 2,
            text: 'Works',
            path: "/works"
        },
        {
            id: 3,
            text: 'Resume',
            path: "/resume"
        },
        {
            id: 4,
            text: 'About',
            path: "/about"
        },
        {
            id: 5,
            text: 'Contact',
            path: "/contact"
        }
    ]

    return (
        <div className={`main-nav-menu ${menuValue ? 'visible-menu' : ''}`}>
            {links.map((link) => {
                return (
                    <LinkItem key={link.id} text={link.text} path={link.path} num={link.id} setMenuValue={setMenuValue}/>
                )
            })}
        </div>
    )
}