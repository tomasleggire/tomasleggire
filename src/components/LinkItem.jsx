import React from "react";
import '../styles/LinkItem.scss';
import { Link } from "react-router-dom";

export default function LinkItem({ key, text, path, num, setMenuValue }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }
    return (
        <Link
            to={path}
            onClick={() => {
                setMenuValue(false);
                scrollToTop();
            }}
            className="link-nav-menu"
        >
            <div className="text-nav-menu">
                <h1 className="nav-menu-h1"><span className="nav-menu-span">0{num}. </span>{text}</h1>
            </div>
        </Link>
    )
}