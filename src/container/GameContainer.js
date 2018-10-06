import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';

class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer center-block">

        <div>GameContainer here, rendering GameGrid...</div>

        <div className="center-block">
          yo what's up, center me...
        </div>

        <GameGrid
        />

      </div>
    );
  }
}

export default GameContainer;
