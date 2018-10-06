import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';
import Rules from '../components/Rules'; //NOTE: delete this component later...
import ControlPanel from '../components/ControlPanel';

class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: "hello world",
    }
  }

  render() {
    console.log('GameContainer, this.state is: ', this.state)
    return (
      <div className="GameContainer center-block">

        <div>GameContainer here, rendering GameGrid...</div>

        <Rules
        />

        <div className="center-block">
          yo what's up, center me...
        </div>

        <GameGrid
        />

        <ControlPanel
        />

      </div>
    );
  }
}

export default GameContainer;
