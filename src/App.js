import React, { Component } from 'react';

import './style/App.css';

import GameContainer from './container/GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="center-text">
          App here, rendering GameContainer...
        </div>

        <GameContainer
        />

      </div>
    );
  }
}

export default App;
