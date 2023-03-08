import React from "react"; 
import '../styles/Option.scss';

export default function Option({image, text}) {
    return (
        <div className="option-main">
            <div className="option-imagen" style={{background: `${image}`}}></div>
            <p className="option-text">{text}</p>
        </div>
    )
}