import React from "react";
import me from "../images/YO.PNG";
import "../styles/HomeContainer.scss";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const iconsMedia = [
  {
    text: "Twitter",
    img: AiOutlineTwitter,
  },
  {
    text: "Linkedin",
    img: AiFillLinkedin,
  },
  {
    text: "Github",
    img: AiFillGithub,
  },
  {
    text: "Instagram",
    img: AiOutlineInstagram,
  },
];

export default function HomeContainer() {
  return (
    <div className="home-div-main">
      <div className="home-content">
        <img src={me} alt="Tomás Leggire" className="img-me" />
        <h1 className="h1-home">
          Hi, I am
          <span className="span-home"> Tomás Leggire</span>
        </h1>
        <p className="p-home">
          I like to craft solid and scalable frontend products white great user
          experiences. My focus is on creating engaging, accessible & performant
          interfaces for humans.
        </p>
        <div className="icons-home">
        {iconsMedia.map((icon) => {
          return (
            <div>
                {<icon.img className="icon-home"/>}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
