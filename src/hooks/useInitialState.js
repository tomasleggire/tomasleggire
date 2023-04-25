import { useState } from "react";
import imageOne from "../icons/slider-icons/mobile-app-svgrepo-com.png";
import imageTwo from "../icons/slider-icons/web-development-svgrepo-com.png";
import imageThree from "../icons/slider-icons/html-coding-svgrepo-com.png";
import imageFour from "../icons/slider-icons/site-svgrepo-com.png";
import imageFive from "../icons/slider-icons/git-svgrepo-com.png";
import imageSix from "../icons/slider-icons/potion-svgrepo-com.png";
import imageSeven from "../icons/slider-icons/artificial-intelligence-svgrepo-com.png";
import imageEight from "../icons/slider-icons/heart-file-svgrepo-com.png";

import imagenUno from "../images/imagesPortfolio/itemPort1.png";
import imagenDos from "../images/imagesPortfolio/itemPort2.png";
import imagenTres from "../images/imagesPortfolio/itemPort3.png";
import imagenCuatro from "../images/imagesPortfolio/itemPort4.png";
import imagenCinco from "../images/imagesPortfolio/itemPort5.png";
import imagenSeis from "../images/imagesPortfolio/itemPort6.png";
import imagenSiete from "../images/imagesPortfolio/itemPort7.png";
import imagenOcho from "../images/imagesPortfolio/itemPort8.png";
import imagenNueve from "../images/imagesPortfolio/itemPort9.png";
import imagenDiez from "../images/imagesPortfolio/itemPort10.png";
import imagenOnce from "../images/imagesPortfolio/itemPort11.png";
import imagenDoce from "../images/imagesPortfolio/itemPort12.png";

import imagenModalUno from "../images/imagesModalPortfolio/item1.PNG";
import imagenModalDos from "../images/imagesModalPortfolio/item2.PNG";
import imagenModalTres from "../images/imagesModalPortfolio/item3.PNG";
import imagenModalCuatro from "../images/imagesModalPortfolio/item4.PNG";
import imagenModalCinco from "../images/imagesModalPortfolio/item5.PNG";
import imagenModalSeis from "../images/imagesModalPortfolio/item6.PNG";
import imagenModalSiete from "../images/imagesModalPortfolio/item7.PNG";
import imagenModalOcho from "../images/imagesModalPortfolio/item8.PNG";
import imagenModalNueve from "../images/imagesModalPortfolio/item9.PNG";
import imagenModalDiez from "../images/imagesModalPortfolio/item10.PNG";
import imagenModalOnce from "../images/imagesModalPortfolio/item11.PNG";
import imagenModalDoce from "../images/imagesModalPortfolio/item12.PNG";

const useInitialState = () => {
  const optionsState = [
    {
      image: imageOne,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
    {
      image: imageTwo,
      text: "Proficiency in the core web technologies of HTML, CSS, and JavaScript",
      title: "PROFICIENCY",
    },
    {
      image: imageThree,
      text: "Experience with React and ability to use it to build complex web applications",
      title: "FRONT-END FRAMEWORKS",
    },
    {
      image: imageFour,
      text: "Web accessibility and ability to design and develop websites for everyone",
      title: "WEB ACCESSIBILITY",
    },
    {
      image: imageFive,
      text: "Experience with version control systems like Git for managing and collaborating on projects",
      title: "VERSION CONTROL",
    },
    {
      image: imageSix,
      text: "Ability to write unit tests for code and use testing frameworks to ensure code quality",
      title: "TESTING",
    },
    {
      image: imageSeven,
      text: "Use AI for productivity and efficiency. Improve my code to develop a competitive edge in my field.",
      title: "AI USAGE",
    },
    {
      image: imageEight,
      text: "Driven by an insatiable thirst for knowledge and a relentless pursuit of excellence in my craft.",
      title: "PASSION",
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
        parrafe:
          "CRUD operations are essential for managing and manipulating data in many software applications and database systems. They provide a basic set of functionalities for creating, reading, updating, and deleting data, which are necessary for building complex applications and managing large amounts of data.",
        url: "https://tomasleggire.github.io/Interactive-comments-section/",
      },
    },
    {
      id: 2,
      image: imagenDos,
      title: "Weather App",
      text: "Web design/development",
      modal: {
        image: imagenModalDos,
        title: "Weather App",
        text: "Web design/development",
        parrafe:
          "Provides users with up-to-date information about the weather conditions in their location or any other location of their interest, with a seccion where you can add those locations to favorites and a swtich to change between light mode and dark mode.",
        url: "https://tomasleggire.github.io/Weather-React-App-v2/",
      },
    },
    {
      id: 3,
      image: imagenTres,
      title: "Ecommerce Product Page",
      text: "Web design/development",
      modal: {
        image: imagenModalTres,
        title: "Ecommerce Product Page",
        text: "Web design/development",
        parrafe:
          "Application that allows users to purchase products or services directly from their mobile devices. The app typically offers a variety of features to help users browse, search for, and purchase products, as well as manage their accounts and track their orders.",
        url: "https://tomasleggire.github.io/ecommerce-product-main-page/",
      },
    },
    {
      id: 4,
      image: imagenCuatro,
      title: "Interactive Card Form",
      text: "Web design/development",
      modal: {
        image: imagenModalCuatro,
        title: "Interactive Card Form",
        text: "Web design/development",
        parrafe:
          "An interactive card form with managed errors is a type of user interface that allows users to input information through a card-style form, with real-time error handling and feedback to help them correct any mistakes or omissions.",
        url: "https://tomasleggire.github.io/interactive-card-details-form/",
      },
    },
    {
      id: 5,
      image: imagenCinco,
      title: "TIC TAC TOE",
      text: "Web design/development",
      modal: {
        image: imagenModalCinco,
        title: "TIC TAC TOE",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://charming-cascaron-fe696f.netlify.app/",
      },
    },
    {
      id: 6,
      image: imagenSeis,
      title: "Calculator",
      text: "Web design/development",
      modal: {
        image: imagenModalSeis,
        title: "Calculator",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://bespoke-monstera-6e68bd.netlify.app/",
      },
    },
    {
      id: 7,
      image: imagenSiete,
      title: "Todo App",
      text: "Web design/development",
      modal: {
        image: imagenModalSiete,
        title: "Todo App",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://scintillating-longma-d99be7.netlify.app/",
      },
    },
    {
      id: 8,
      image: imagenOcho,
      title: "Advice Generator",
      text: "Web design/development",
      modal: {
        image: imagenModalOcho,
        title: "Advice Generator",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://stellar-swan-bb1834.netlify.app/",
      },
    },
    {
      id: 9,
      image: imagenNueve,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenModalNueve,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://fastidious-macaron-8d1a6e.netlify.app/",
      },
    },
    {
      id: 10,
      image: imagenDiez,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenModalDiez,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://fascinating-fudge-134231.netlify.app/",
      },
    },
    {
      id: 11,
      image: imagenOnce,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenModalOnce,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://rococo-faun-37be35.netlify.app/",
      },
    },
    {
      id: 12,
      image: imagenDoce,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenModalDoce,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
        url: "https://fantastic-pie-9ab743.netlify.app/",
      },
    },
  ];

  const [mainItemModalPort, setMainItemModalPort] = useState({
    image: imagenModalDos,
    title: "C.R.U.D",
    text: "Web design/development",
    parrafe:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
    url: 'https://tomasleggire.github.io/Interactive-comments-section/',
  });

  const changeMainModalItem = (id) => {
    const indexItem = portfolioItems.findIndex((item) => item.id === id);
    const newMainItem = {
      ...portfolioItems[indexItem].modal,
    };
    setMainItemModalPort(newMainItem);
  };

  return {
    optionsState,
    portfolioItems,
    mainItemModalPort,
    setMainItemModalPort,
    changeMainModalItem,
  };
};
export default useInitialState;
