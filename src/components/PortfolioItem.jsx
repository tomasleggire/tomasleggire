import React from "react";
import '../styles/PortfolioItem.scss';

export default function PortfolioItem({text}) {
    return (
        <div class="card-item">{text}</div>
    )
}