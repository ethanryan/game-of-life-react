import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';

class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
        Game Container here!!!

        <GameGrid
        />
        
      </div>
    );
  }
}

export default GameContainer;
