import React from "react";
import '../styles/MoreInfo.scss';
import ImageOne from '../images/web-design-layout.gif';

export default function MoreInfo() {
    return (
        <div className="moreInfo-main">
            <div className="moreInfo-one">
                <img src={ImageOne} className='one-image'/>
                <div className="one-texts">
                  <h1 className="one-h1">MOBILE-FRIENDLY</h1>
                  <p className="one-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.</p>
                </div>
            </div>
            <div className="moreInfo-two"></div>
        </div>
    )
}