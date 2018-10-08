import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';
import Rules from '../components/Rules'; //can delete this component later...
import ControlPanel from '../components/ControlPanel';

import helloWorld from '../helpers/helloWorld';
// import flattenArray from '../helpers/flattenArray';
import makeArrayOfBooleanValues from '../helpers/makeArrayOfBooleanValues';
import getInitialGrid from '../helpers/getInitialGrid';
// import countLiveNeighbors from '../helpers/countLiveNeighbors';
import updateCells from '../helpers/updateCells';
import applyRulesOfLife from '../helpers/applyRulesOfLife';

// const numberOfRows = 5
// const numberOfColumns = 20 //max columns at this styling...

class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      generation: 0,
      grid: [], //initial state of grid is an empty array... //NOTE: need to update nested generation in each cell within grid???
      numberOfRows: 5,
      numberOfColumns: 20, //max columns at this styling...
    }
    this.addGeneration = this.addGeneration.bind(this)
    // this.getInitialGrid = this.getInitialGrid.bind(this)
    // this.flattenArray = this.flattenArray.bind(this)
    // this.countLiveNeighbors = this.countLiveNeighbors.bind(this)
    // this.makeArrayOfBooleanValues = this.makeArrayOfBooleanValues.bind(this)
  }

  // // This does a two-dimensional loop over the square around the given
  // // x,y position, counting all fields that have a cell but are not the
  // // center field.
  // //NOTE: via: https://codereview.stackexchange.com/questions/87330/emulating-conways-game-of-life-using-javascript?newreg=3c196755a2ad4a94ac580804f08d2483
  // countLiveNeighbors(grid, x, y) {
  //   var count = 0;
  //   let width = this.state.numberOfRows
  //   let height = numberOfColumns
  //   for (var y1 = Math.max(0, y - 1); y1 <= Math.min(height, y + 1); y1++) {
  //     for (var x1 = Math.max(0, x - 1); x1 <= Math.min(width, x + 1); x1++) {
  //       if ((x1 !== x || y1 !== y) && grid[x1 + y1 * width])
  //         count += 1;
  //     }
  //   }
  //   // console.log('countLiveNeighbors, final count is: ', count)
  //   return count;
  // }

  // makeMatrix = (x, y) => (
  //   Array.from(
  //     { length: x }, (thing, x) => Array.from(
  //       { length: y }, (thing, y) => ({ x, y })
  //     )
  //   )
  // );



  // flattenArray(array) {
  //   let flatArray = array.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4] //to flat single level array
  //   return flatArray
  // }

  // makeArrayOfBooleanValues(array) {
  //   let arrayOfBooleanValues = array.map(cell => cell.alive);
  //   return arrayOfBooleanValues
  // }

  // getInitialGrid() { //move this function to a helper function...
  //   console.warn('getInitialGrid called...')
  //   let grid = [] //game grid is an array of cell objects
  //   let matrix = this.makeMatrix(this.state.numberOfRows, numberOfColumns)
  //   // console.log('matrix is: ', matrix)
  //   let matrixFlat = flattenArray(matrix) //NOTE: flat throws error in test, because it is not yet used in all browsers, so using flattenArray function instead...
  //   // console.log('matrixFlat is: ', matrixFlat)
  //   let gridLength = matrixFlat.length
  //   // console.log('gridLength is: ', gridLength)
  //   for (var i=0; i < gridLength; i++) {
  //     // console.log('matrixFlat[i] is: ', matrixFlat[i])
  //     let cell = {
  //       id: '',
  //       alive: '',
  //       x: '', //aka row
  //       y: '', //aka column
  //       liveNeighors: '', //make this a function...
  //       generation: 0
  //     } //this needs to be declared in the for loop...
  //     let randomValue = (Math.random() > .5) ? true : false //this needs to be declared in the for loop...
  //     cell.id = i
  //     cell.alive = randomValue
  //     cell.x = matrixFlat[i].x
  //     cell.y = matrixFlat[i].y
  //     // console.log('cell now is: ', cell)
  //     grid.push(cell)
  //   }
  //   // console.log('getInitialGrid - grid is: ', grid)
  //   return grid
  // }

  addGeneration() {
    console.log('addGeneration called...')
    let currentGeneration = this.state.generation
    let nextGeneration = currentGeneration + 1
    this.setState({generation: nextGeneration})
    this.makeNewArrayOfCells(nextGeneration)
  }

  // updateCells(clone, arrayOfBooleanValues, nextGeneration) {
  //   let numberOfRows = this.state.numberOfRows
  //   let numberOfColumns = this.state.numberOfColumns
  //   let newArray = clone.map(eachCell => {
  //     let livingCellsCount = countLiveNeighbors(arrayOfBooleanValues, eachCell.x, eachCell.y, numberOfRows, numberOfColumns)
  //     // console.log('in makeNewArrayOfCells, livingCellsCount is: ', livingCellsCount)
  //     eachCell.liveNeighors = livingCellsCount
  //     eachCell.generation = nextGeneration
  //     return eachCell
  //   })
  //   return newArray
  // }

  // applyRulesOfLife(newArray) {
  //   let newArrayOfCells = newArray.map(eachCell => {
  //     if (eachCell.alive === false && eachCell.liveNeighors === 3) {
  //       eachCell.alive = true
  //       return eachCell
  //     }
  //     if (eachCell.alive === true && (eachCell.liveNeighors < 2 || eachCell.liveNeighors > 3)) {
  //       eachCell.alive = false
  //       return eachCell
  //     } else {
  //       return eachCell
  //     }
  //   })
  //   return newArrayOfCells
  // }

  makeNewArrayOfCells(nextGeneration) {
    console.log('makeNewArrayOfCells called...')
    // let clone = this.state.grid.slice(0)  //NOTE: this is still allowing the objects within state to be mutated!
    // let clone = this.state.grid.map(eachCell => Object.assign({}, eachCell)) //preventing state from getting mutated
    let clone = this.state.grid.map(eachCell => ({...eachCell}) ) //preventing state from getting mutated
    // console.log('clone is: ', clone)
    let arrayOfBooleanValues = makeArrayOfBooleanValues(clone)
    //1) map over grid, call livingCellsCount on each cell, and return newArray of cell objects, replacing liveNeighors value (with a number) and generation values for each object...
    let newArray = updateCells(clone, arrayOfBooleanValues, nextGeneration, this.state.numberOfRows, this.state.numberOfColumns)
    // console.log('0. newArray is: ', newArray)
    //2) apply rules of game to each cell object's liveNeighors number in newArray, updating each cell's alive value with new boolean value...
    let newArrayOfCells = applyRulesOfLife(newArray)
    // console.log('1. newArrayOfCells is: ', newArrayOfCells)
    //3) with newArray, update state of grid...
    this.setState({grid: newArrayOfCells})
  }

  componentDidMount() {
    console.warn('GameContainer --> componentDidMount!')
    helloWorld()
    let grid = getInitialGrid(this.state.numberOfRows, this.state.numberOfColumns)
    this.setState({grid: grid})
  }


  render() {
    // console.log('GameContainer, this.state is: ', this.state)
    return (
      <div className="GameContainer center-block">

        <div>
          GameContainer here, rendering GameGrid...
        </div>

        <div className="center-text">
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

        <Rules
        />

      </div>
    );
  }
}

export default GameContainer;
