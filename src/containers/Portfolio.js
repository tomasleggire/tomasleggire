import React, { useContext } from "react";
import "../styles/Portfolio.scss";
import PortfolioItem from "../components/PortfolioItem";
import AppContext from "../context/AppContext";
import useElementOnScreen from "../hooks/useElementOnScreen";

export default function Portfolio() {

  const { portfolioItems } = useContext(AppContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <div className="portfolio-main" name="portfolio" ref={containerRef}>
      <h1 className="h1-portfolio">My Work</h1>
      <div className={`container ${isVisible ? 'container-visible' : ''}`}>
        <div className="cards">
          {portfolioItems.map((item) => {
            return (
              <PortfolioItem id={item.id} image={item.image} title={item.title} text={item.text}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}
