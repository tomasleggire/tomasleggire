import React from "react";
import '../styles/ServiceItem.scss';

export default function ServiceItem({ num, title, subTitle, children }) {
    return (
        <div className="service-item-main">
            <div className='header-service-item'>
                {children}
                <span className="span-service-item">0{num}</span>
            </div>
            <div className="text-service-item">
                <h2 className="title-service-item">{title}</h2>
                <p className="subtitle-service-item">{subTitle}</p>
            </div>
        </div>
    )
}