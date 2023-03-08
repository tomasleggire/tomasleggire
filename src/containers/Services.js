import React, { useRef } from "react";
import '../styles/Services.scss';
import Slider from "react-slick";

export default function Services() {
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
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          }
        ]
      };

    return (
        <div className="services-main">
            <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
            <Slider {...settings} className='services-slider' ref={slider}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
            </Slider>
<button onClick={() => slider?.current?.slickNext()}>Next</button>
        </div>
    )
}