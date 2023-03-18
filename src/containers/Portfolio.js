import React, { useContext } from "react";
import "../styles/Portfolio.scss";
import PortfolioItem from "../components/PortfolioItem";
import AppContext from "../context/AppContext";

export default function Portfolio() {

  const { portfolioItems } = useContext(AppContext);

  return (
    <div className="portfolio-main" name="portfolio">
      <h1 className="h1-portfolio">My Work</h1>
      <div class="container">
        <div class="cards">
          {portfolioItems.map((item) => {
            return (
              <PortfolioItem id={item.ide} text={item.text}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}
