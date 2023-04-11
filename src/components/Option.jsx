import React from "react"; 
import '../styles/Option.scss';

export default function Option({image, text, title}) {
    return (
        <div className="option-main">
            <div className="option-image-div">
                <img src={image} className="option-imagen"/>
            </div>
            <h6 className="option-title">{title}</h6>
            <p className="option-text">{text}</p>
        </div>
    )
}