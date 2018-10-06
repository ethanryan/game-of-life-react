import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';
import Rules from '../components/Rules'; //NOTE: delete this component later...
import ControlPanel from '../components/ControlPanel';


let grid = [] //game grid is an array of cells
//NOTE: is grid an array of arrays, or an array of objects??

let gridLength = 25

for (var i=0; i < gridLength; i++) {
  let cell = {id: '', alive: ''} //this needs to be declared in the for loop...
  let randomValue = (Math.random() > .5) ? true : false //this needs to be declared in the for loop...
  console.log('i is: ', i)
  cell.id = i
  cell.alive = randomValue
  console.log('cell now is: ', cell)
  grid.push(cell)
}

console.log('grid is: ', grid)


class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: "hello world",
      generation: 0,
      // grid: grid,
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
          grid={grid}
        />

        <ControlPanel
          generation={this.state.generation}
        />

      </div>
    );
  }
}

export default GameContainer;
