import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Services.scss";
import Slider from "react-slick";
import Option from "../components/Option";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useElementOnScreen from "../hooks/useElementOnScreen";


export default function Services({children}) {
  const { optionsState, setNavState } = useContext(AppContext);

  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <>
      <div className="services-main">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn-option-div"
        >
          <MdKeyboardArrowLeft className="btn-option" />
        </button>
        <Slider {...settings} className="services-slider" ref={slider}>
          {optionsState.map((item) => {
            return (
              <Option image={item.image} text={item.text} title={item.title} />
            );
          })}
        </Slider>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="btn-option-div"
        >
          <MdKeyboardArrowRight className="btn-option" />
        </button>
      </div>
      <button className="btn-learn-more">Learn more</button>
      {children}
    </>
  );
}
