import React from "react"; 
import '../styles/Option.scss';

export default function Option({image, text}) {
    return (
        <div className="option-main">
            <div>
                <img src={image} className="option-imagen"/>
            </div>
            <p className="option-text">{text}</p>
        </div>
    )
}