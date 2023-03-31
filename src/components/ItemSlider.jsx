import React, { useRef } from "react";
import '../styles/ItemSlider.scss';
import Slider from "react-slick";

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

    const items = [
        {
            text: 'HTML'
        },
        {
            text:'SCCS'
        },
        {
            text: 'CSS'
        },
        {
            text: 'JAVASCRIPT'
        },
        {
            text: 'REACT JS'
        },
        {
            text: 'REACT NAVITE'
        }
    ]

    return (
        <Slider {...settings} className="item-slider" ref={slider}>
            {items.map((item) => {
                return (
                    <span className="item-span-slider">{item.text}</span>
                )
            })}
        </Slider>
    )
}