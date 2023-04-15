import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Services.scss";
import Title from "../components/Title";
import ServiceItem from "../components/ServiceItem";
import useElementOnScreen from "../hooks/useElementOnScreen";

import me2 from "../images/YO2.PNG";

import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";

import Slider from "react-slick";
import Option from "../components/Option";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Services() {
  const { optionsState } = useContext(AppContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "150px",
    threshold: 0.1,
  });

  const servicesItems = [
    {
      num: 1,
      img: FaCode,
      title: "Web Development",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam.",
    },
    {
      num: 2,
      img: FaTabletAlt,
      title: "Mobile App Development",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam.",
    },
    {
      num: 3,
      img: FaDatabase,
      title: "Backend Development",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam.",
    },
  ];

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
        breakpoint: 1300,
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
    <div className="services-main">
      <Title title="ABOUT ME" subTitle="ABOUT" />
      <div className="about-me-main">
        <img src={me2} className="about-img" />
        <div className="about-info">
          <h1 className="h1-about">
            Hi, I am <span className="span-about">Tomás Leggire</span>
          </h1>
          <ul className="ul-about">
            <li>First Name: Tomás</li>
            <li>Last Name: Leggire</li>
            <li>Age: 23</li>
            <li>Nacionality: Argentinian</li>
            <li>Lenguages: Spanish, English</li>
            <li>Address: Merlo, Buenos Aires, Argentina</li>
            <li>Freelance: Avaliable</li>
          </ul>
          <button type="button" className="btn-about">
            DOWNLOAD CV
          </button>
        </div>
      </div>
      <Title title="MY SERVICES" subTitle="SERVICES" />
      <div
        className={`services-items ${isVisible && "services-visible"}`}
        ref={containerRef}
      >
        {servicesItems.map((serviceItem) => {
          return (
            <ServiceItem
              num={serviceItem.num}
              title={serviceItem.title}
              subTitle={serviceItem.subTitle}
            >
              <div className="services-icon-div">
                <serviceItem.img className="services-icon" />
              </div>
            </ServiceItem>
          );
        })}
      </div>

      <div className="slider-main">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn-option-div"
        >
          <MdKeyboardArrowLeft className="btn-option" />
        </button>
        <Slider {...settings} className="services-slider" ref={slider}>
          {optionsState.map((item) => {
            return (
              <Option
                image={item.image}
                text={item.text}
                title={item.title}
                key={item.title}
              />
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
    </div>
  );
}
