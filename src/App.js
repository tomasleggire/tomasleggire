import React from 'react';
import './styles/App.scss';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import useElementOnScreen from './hooks/useElementOnScreen';
import Services from './containers/Services';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';


function App() {

  const initialState = useInitialState();

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  });

  return (
    <AppContext.Provider value={initialState}>
    <div className="App" ref={containerRef}>
      <HomeContainer>
        <Navbar isVisible={isVisible} />
        <Portada />
      </HomeContainer>
      <Services>

      </Services>
    </div>
    </AppContext.Provider>
  );
}

export default App;
