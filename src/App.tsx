import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Tooltip as ReactTooltip} from "react-tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="App-link" id="tooltip" data-tooltip-content="hello world">
          Learn React
        </div>
        <ReactTooltip anchorId="tooltip"/>
      </header>
    </div>
  );
}

export default App;
