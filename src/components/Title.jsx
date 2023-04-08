import React from "react";
import '../styles/Title.scss';

export default function Title( {title, subTitle} ) {
    return (
        <div className="title-main">
            <h1 className="title-back">{subTitle}</h1>
            <h2 className="title-front">{title}</h2>
            <div className="sun"></div>
        </div>
    )
}