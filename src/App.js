import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./containers/Navbar";
import Services from "./containers/Services";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import Resume from "./containers/Resume";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
