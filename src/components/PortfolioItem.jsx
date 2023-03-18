import React from "react";
import '../styles/PortfolioItem.scss';

export default function PortfolioItem({ image, title, text }) {
    return (
        <div className="card-item">
            <img src={image} className='image-item' alt={title}/>
            <h2 className="item-h1">{title}</h2>
            <span className="item-text">{text}</span>
        </div>
    )
}