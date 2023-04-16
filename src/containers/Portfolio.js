import React, { useContext, useState, useEffect } from "react";
import "../styles/Portfolio.scss";
import PortfolioItem from "../components/PortfolioItem";
import AppContext from "../context/AppContext";
import ModalItemPort from "./ModalItemPort";
import Title from "../components/Title";

export default function Portfolio() {
  const { portfolioItems, mainItemModalPort, changeMainModalItem } =
    useContext(AppContext);
  const [modalItemValue, setModalItemValue] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="portfolio-main">
      <Title title="MY WORKS" subTitle="WORKS" />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="container-portfolio">
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
        </>
      )}
    </div>
  );
}
