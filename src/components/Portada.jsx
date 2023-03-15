import React from "react";
import '../styles/Portada.scss';
import { Link } from "react-scroll";

export default function Portada() {
    return (
        <div className="portada-main">
            <h1 className="portada-title">TOMÁS LEGGIRE</h1>
            <h2 className="portada-h2">WEB APP DEVELOPMENT</h2>
            <p className="portada-p">I like to craft solid and scalable frontend products white great user experiences. My focus is on creating engaging, accessible & performant interfaces for humans.</p>
            <Link smooth to='get-started' offset={-70}>
                <button type="button" className="portada-btn">
                    <span className="btn-span-portada">Get Started</span>
                </button>
            </Link>
        </div>
    )
}


