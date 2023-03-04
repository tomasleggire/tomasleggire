import React from 'react';
import './styles/App.scss';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import useElementOnScreen from './hooks/useElementOnScreen';
import Services from './containers/Services';


function App() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  });

  return (
    <div className="App" ref={containerRef}>
      <HomeContainer>
        <Navbar isVisible={isVisible} />
        <Portada />
      </HomeContainer>
      <Services>

      </Services>
    </div>
  );
}

export default App;
