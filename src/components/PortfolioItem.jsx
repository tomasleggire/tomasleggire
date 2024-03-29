import React from "react";
import '../styles/PortfolioItem.scss';

export default function PortfolioItem({ id, image, title, text, setModalItemValue, changeMainModalItem }) {
    return (
        <div className="card-item">
            <img 
                src={image} 
                className='image-item' 
                alt={title}
                onClick={() => {
                    changeMainModalItem(id);
                    setModalItemValue(true);
                }}
            />
            <h2 className="item-h1">{title}</h2>
            <span className="item-text">{text}</span>
        </div>
    )
}