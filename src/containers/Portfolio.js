import React, { useContext, useState } from "react";
import "../styles/Portfolio.scss";
import PortfolioItem from "../components/PortfolioItem";
import AppContext from "../context/AppContext";
import useElementOnScreen from "../hooks/useElementOnScreen";
import ModalItemPort from "./ModalItemPort";

export default function Portfolio() {
  const { portfolioItems, mainItemModalPort, changeMainModalItem } =
    useContext(AppContext);

  const [modalItemValue, setModalItemValue] = useState(false);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <div className="portfolio-main" name="portfolio" ref={containerRef}>
      <div className={`container ${isVisible ? "container-visible" : ""}`}>
        <div className="cards">
          {portfolioItems.map((item) => {
            return (
              <PortfolioItem
                id={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
                setModalItemValue={setModalItemValue}
                changeMainModalItem={changeMainModalItem}
              />
            );
          })}
        </div>
      </div>
      {modalItemValue && (
        <ModalItemPort
          setModalItemValue={setModalItemValue}
          mainItemModalPort={mainItemModalPort}
        />
      )}
    </div>
  );
}
