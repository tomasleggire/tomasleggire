import React, { useContext, useState, useEffect } from "react";
import "../styles/Portfolio.scss";
import PortfolioItem from "../components/PortfolioItem";
import AppContext from "../context/AppContext";
import ModalItemPort from "./ModalItemPort";
import Title from "../components/Title";
import ReactLoading from 'react-loading';

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

  const [numElements, setNumElements] = useState(6);

  function handleLoadMore() {
    setNumElements(numElements + 3);
  }

  return (
    <div className="portfolio-main">
      <Title title="MY WORKS" subTitle="WORKS" />
      {loading ? (
        <div className="loader"><ReactLoading type={'spin'} color={'#14FFEC'} height={100} width={100} /></div>
      ) : (
        <>
          <div className="container-portfolio">
            <div className="cards">
              {portfolioItems.slice(0, numElements).map((item) => {
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
            {numElements == 12 ? '' : <button type="button" onClick={handleLoadMore} className="btn-load-more">LOAD MORE</button>}
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
