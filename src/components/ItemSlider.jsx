import React, { useRef } from "react";
import '../styles/ItemSlider.scss';
import Slider from "react-slick";

import html from '../images/imagesTechItems/html5.svg';
import js from '../images/imagesTechItems/javascript.svg';
import scss from '../images/imagesTechItems/sass.svg';
import css from '../images/imagesTechItems/css3.svg';

export default function ItemSlider() {
    const slider = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
    };

    const itemsTech = [
        {
            text: 'HTML',
            img: html
        },
        {
            text: 'CSS',
            img: css
        },
        {
            text:'SASS',
            img: scss
        },
        
        {
            text: 'JAVASCRIPT',
            img: js
        },
        {
            text: 'REACT JS',
            img: html
        },
        {
            text: 'REACT NAVITE',
            img: html
        }
    ]

    return (
        <Slider {...settings} className="item-slider" ref={slider}>
            {itemsTech.map((itemTech) => {
                return (
                    <div className="item-container-slider">
                        <img src={itemTech.img} className='item-slider-img' alt={itemTech.text}/>
                        {/* <span className="item-span-slider">{itemTech.text}</span> */}
                    </div>
                )
            })}
        </Slider>
    )
}