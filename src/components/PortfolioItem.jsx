import React from "react";
import '../styles/PortfolioItem.scss';

export default function PortfolioItem({text}) {
    return (
        <div className="card-item">{text}</div>
    )
}