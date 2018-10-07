import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';
import Rules from '../components/Rules'; //NOTE: delete this component later...
import ControlPanel from '../components/ControlPanel';



////NOTE: trying this, got online:
// GridCell.prototype.countLiveNeighbors = function(grid) {
//     var liveCount = 0;
//
//     // Count neighbors
//     for (var i = -1; i < 2; ++i) {
//         for (var j = -1; j < 2; ++j) {
//             var dx = (this.x + i) % grid.width;
//             var dy = (this.y + j) % grid.height;
//
//             var cell = grid.getCell(dx, dy);
//             if (cell && cell != this && cell.isAlive()) {
//                 ++liveCount;
//             }
//         }
//     }
//
//     return liveCount;
// };

function countLiveNeighbors(grid) {
  console.log('countLiveNeighbors called with grid: ', grid)
    var liveCount = 0;

    // Count neighbors
    for (var i = -1; i < 2; ++i) {
        for (var j = -1; j < 2; ++j) {
            var dx = (this.x + i) % grid.width;
            var dy = (this.y + j) % grid.height;

            var cell = grid.getCell(dx, dy);
            if (cell && cell !== this && cell.isAlive()) {
                ++liveCount;
            }
        }
    }

    return liveCount;
};

// countLiveNeighbors(grid)



class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: "hello world",
      generation: 0,
      grid: [], //initial state of grid is an empty array...
      cell: {
        id: '',
        alive: '',
        row: '',
        column: '',
        liveNeighors: '',
        generation: ''
      }
    }
    this.addGeneration = this.addGeneration.bind(this)
    this.getInitialGrid = this.getInitialGrid.bind(this)
  }

  makeMatrix = (x, y) => (
    Array.from(
      { length: x }, (thing, x) => Array.from(
        { length: y }, (thing, y) => ({ x, y })
      )
    )
  );
  // console.log(makeMatrix(2, 2));

  getInitialGrid() {
    let grid = [] //game grid is an array of cell objects

    let numberOfRows = 5
    let numberOfColumns = 5

    let matrix = this.makeMatrix(numberOfRows, numberOfColumns)

    console.log('matrix is: ', matrix)
    let matrixFlat = matrix.flat()
    console.log('matrixFlat is: ', matrixFlat)

    // let gridLength = numberOfRows * numberOfColumns
    let gridLength = matrixFlat.length
    console.log('gridLength is: ', gridLength)

    for (var i=0; i < gridLength; i++) {
      // console.log('matrixFlat[i] is: ', matrixFlat[i])
      let cell = {
        id: '',
        alive: '',
        x: '', //aka row
        y: '', //aka column
        liveNeighors: '', //make this a function...
        generation: 0
      } //this needs to be declared in the for loop...
      let randomValue = (Math.random() > .5) ? true : false //this needs to be declared in the for loop...
      cell.id = i
      cell.alive = randomValue
      cell.x = matrixFlat[i].x
      cell.y = matrixFlat[i].y
      // console.log('cell now is: ', cell)
      grid.push(cell)
    }

    console.log('getInitialGrid - grid is: ', grid)
    return grid
  }

  addGeneration() {
    let currentGeneration = this.state.generation
    let nextGeneration = currentGeneration + 1
    this.setState({generation: nextGeneration})
  }

  componentDidMount() {
    let grid = this.getInitialGrid()
    this.setState({grid: grid})
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
          grid={this.state.grid} //passing grid from state...
        />

        <button className="center-text" onClick={this.addGeneration}>
          Next Generation
        </button>

        <ControlPanel
          generation={this.state.generation}
        />

      </div>
    );
  }
}

export default GameContainer;
