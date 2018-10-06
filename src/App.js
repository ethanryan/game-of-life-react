import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/App.css';

import GameContainer from './container/GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Game... of Life!</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. //basics
        </p> */}

        <div>App here, rendering GameContainer...</div>

        <GameContainer
        />

      </div>
    );
  }
}

export default App;
