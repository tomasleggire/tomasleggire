import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Services.scss";
import Title from "../components/Title";
import me2 from '../images/YO2.PNG';

import Slider from "react-slick";
import Option from "../components/Option";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ItemSlider from "../components/ItemSlider";

export default function Services() {
  const { optionsState } = useContext(AppContext);

  // const slider = useRef(null);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: false,
  //   arrows: false,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 0,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="services-main">
      <Title title='ABOUT ME' subTitle='ABOUT'/>
      <div className="about-me-main">
        <img src={me2} className="about-img" />
        <div className="about-info">
          <h1 className="h1-about">Hi, I am <span className="span-about">Tomás Leggire</span></h1>
          <ul className="ul-about">
            <li>
              First Name: Tomás
            </li>
            <li>
              Last Name: Leggire
            </li>
            <li>
              Age: 23
            </li>
            <li>
              Nacionality: Argentinian
            </li>
            <li>
              Lenguages: Spanish, English
            </li>
            <li>
              Address: Merlo, Buenos Aires, Argentina
            </li>
            <li>
              Freelance: Avaliable
            </li>
          </ul>
        <button type="button" className="btn-about">DOWNLOAD RESUME</button>
        </div>
      </div>
      <Title title='MY SERVICES' subTitle='SERVICES' />
    </div>
  );
}

{/* <div className="services-main" name="get-started">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn-option-div"
        >
          <MdKeyboardArrowLeft className="btn-option" />
        </button>
        <Slider {...settings} className="services-slider" ref={slider}>
          {optionsState.map((item) => {
            return (
              <Option image={item.image} text={item.text} title={item.title} key={item.title}/>
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
      <ItemSlider />
      */}