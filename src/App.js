import React from 'react';
import './styles/App.scss';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import useElementOnScreen from './hooks/useElementOnScreen';

function App() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: .1
  });

  return (
    <div className="App">
      <HomeContainer>
        <Navbar
          isVisible={isVisible}
          ref={containerRef}
        />
        <Portada />
      </HomeContainer>
        <div className='box'></div>
    </div>
  );
}

export default App;
