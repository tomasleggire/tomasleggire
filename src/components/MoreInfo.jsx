import React from "react";
import '../styles/MoreInfo.scss';
import ImageOne from '../images/web-design-layout.gif';
import ImageTwo from '../images/web-designer-with-idea.gif';
import { Link } from "react-scroll";

export default function MoreInfo() {
    return (
        <div className="moreInfo-main">
            <div className="moreInfo-one">
                <img src={ImageOne} className='one-image' alt='REACT JS DEVELOPER' />
                <div className="one-texts">
                    <h2 className="one-h2">REACT & REACT NATIVE DEVELOPER</h2>
                    <p className="one-p">I excel at building responsive user interfaces and creating reusable components. I have a deep understanding of integrating with APIs, to handle data in an organized and efficient way. Additionally, I have knowledge of artificial intelligence technologies to improve my work or automate certain tasks in React applications. I am proficient in using libraries. With these skills, I am able to build modern, data-driven applications that provide intelligent insights and suggestions to users.</p>
                    <Link smooth to="portfolio" offset={-60}>
                        <button className="btn-learn-more">Learn more</button>
                    </Link>
                </div>
            </div>
            <div className="moreInfo-two">
                <img src={ImageTwo} className='two-image' />
                <div className="two-texts">
                    <h2 className="two-h2">FULL STACK LEARNING</h2>
                    <p className="two-p">I excel at building responsive user interfaces and creating reusable components. I have a deep understanding of integrating with APIs, to handle data in an organized and efficient way. Additionally, I have knowledge of artificial intelligence technologies to improve my work or automate certain tasks in React applications. I am proficient in using libraries. With these skills, I am able to build modern, data-driven applications that provide intelligent insights and suggestions to users.</p>
                    <Link smooth to="portfolio" offset={-60}>
                        <button className="btn-learn-more">About me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}