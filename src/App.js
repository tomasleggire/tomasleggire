import React from 'react';
import './styles/App.scss';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/Navbar';
import useElementOnScreen from './hooks/useElementOnScreen';

function App() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.10
  });

  return (
    <div className="App">
      <HomeContainer>
        <Navbar
          isVisible={isVisible} 
        />
      </HomeContainer>
        <div className='box'></div>
      <div className='box-dos' ref={containerRef}></div>
    </div>
  );
}

export default App;
