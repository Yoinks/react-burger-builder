import React from 'react';
import logo from './logo.svg';
import Unicorn from './components/Unicorn'
import UnicronFunc from './components/UnicornFunctional'
import './App.css';

function App() {
  const mRef = () => {
    console.log("This is passing a method reference as a prop to Component - Unicorn")
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Unicorn click={mRef} />
      {/* <UnicronFunc/> */}
    </div>
  );
}

export default App;
