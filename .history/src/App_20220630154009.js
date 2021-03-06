import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Hoang';
  const age = 18;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thanh Hoang
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p> Xin chao {name} + {age}</p>
      </header>
    </div>
  );
}

export default App;
