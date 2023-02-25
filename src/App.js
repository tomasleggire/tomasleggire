import React from 'react';
import './styles/App.scss';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <HomeContainer>
        <Navbar />
      </HomeContainer>
    </div>
  );
}

export default App;
