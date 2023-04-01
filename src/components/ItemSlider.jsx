import React, { useRef, useContext } from "react";
import '../styles/ItemSlider.scss';
import Slider from "react-slick";
import AppContext from "../context/AppContext";

export default function ItemSlider() {

    const { itemsTech } = useContext(AppContext);

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

    return (
        <Slider {...settings} className="item-slider" ref={slider}>
            {itemsTech.map((itemTech) => {
                return (
                    <div className="item-container-slider" key={itemTech.text}>
                        <img src={itemTech.img} className='item-slider-img' alt={itemTech.text}/>
                        {/* <span className="item-span-slider">{itemTech.text}</span> */}
                    </div>
                )
            })}
        </Slider>
    )
}