import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Welcome to the Timer</h2>
      <Timer start= {Date.now()}/>
    </div>
  );
}

export default App;
