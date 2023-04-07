import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./components/Navbar";
import Portada from "./components/Portada";
import useElementOnScreen from "./hooks/useElementOnScreen";
import Services from "./containers/Services";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import MoreInfo from "./components/MoreInfo";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Navbar />
        <HomeContainer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;

// const [containerRef, isVisible] = useElementOnScreen({
//   root: null,
//   rootMargin: "0px",
//   threshold: 1.0,
// });
