import { useState } from "react";
import imageOne from "../icons/cell-phone-svgrepo-com.svg";
import imageTwo from "../icons/book-svgrepo-com.svg";
import imageThree from "../icons/official-document-svgrepo-com.svg";
import imageFour from "../icons/pencil-svgrepo-com.svg";
import imageFive from "../icons/ppt-icon-application-svgrepo-com.svg";
import imageSix from "../icons/tick-svgrepo-com.svg";

import imagenUno from "../images/imagesPortfolio/itemPort1.png";
import imagenDos from "../images/imagesPortfolio/itemPort2.png";
import imagenTres from "../images/imagesPortfolio/itemPort3.png";
import imagenCuatro from "../images/imagesPortfolio/itemPort4.png";

import imagenModalUno from '../images/imagesModalPortfolio/item1.PNG';
import imagenModalDos from '../images/imagesModalPortfolio/item2.PNG';
import imagenModalTres from '../images/imagesModalPortfolio/item3.PNG';

const useInitialState = () => {
  const optionsState = [
    {
      image: imageOne,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
    {
      image: imageTwo,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
    {
      image: imageThree,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
    {
      image: imageFour,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
    {
      image: imageFive,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
    {
      image: imageSix,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      image: imagenUno,
      title: "C.R.U.D",
      text: "Web design/development",
      modal: {
        image: imagenModalUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 2,
      image: imagenDos,
      title: "Weather React App",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 3,
      image: imagenTres,
      title: " Ecommerce Product Page",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 4,
      image: imagenCuatro,
      title: "Interactive Card Form",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 5,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 6,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 7,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 8,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 9,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 10,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 11,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
    {
      id: 12,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
      },
    },
  ];

  const [mainItemModalPort, setMainItemModalPort] = useState({
      image: imagenModalTres,
      title: "C.R.U.D",
      text: "Web design/development",
      parrafe : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum."
  })

  return {
    optionsState,
    portfolioItems,
    mainItemModalPort,
    setMainItemModalPort
  };
};
export default useInitialState;
