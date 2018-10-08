import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';
import Rules from '../components/Rules'; //can delete this component later...
import ControlPanel from '../components/ControlPanel';

import makeArrayOfBooleanValues from '../helpers/makeArrayOfBooleanValues';
import getInitialGrid from '../helpers/getInitialGrid';
import updateCells from '../helpers/updateCells';
import applyRulesOfLife from '../helpers/applyRulesOfLife';


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
  }

  addGeneration() {
    console.log('addGeneration called...')
    let currentGeneration = this.state.generation
    let nextGeneration = currentGeneration + 1
    this.setState({generation: nextGeneration})
    this.makeNewArrayOfCells(nextGeneration)
  }

  makeNewArrayOfCells(nextGeneration) {
    console.log('makeNewArrayOfCells called...')
    // let clone = this.state.grid.slice(0)  //NOTE: this is still allowing the objects within state to be mutated!
    // let clone = this.state.grid.map(eachCell => Object.assign({}, eachCell)) //preventing state from getting mutated
    let clone = this.state.grid.map(eachCell => ({...eachCell}) ) //preventing state from getting mutated
    // console.log('clone is: ', clone)
    let arrayOfBooleanValues = makeArrayOfBooleanValues(clone)
    //1) map over grid, call livingCellsCount on each cell, and return newArray of cell objects, replacing liveNeighors value (with a number) and generation values for each object...
    let newArray = updateCells(clone, arrayOfBooleanValues, nextGeneration, this.state.numberOfRows, this.state.numberOfColumns)
    //2) apply rules of game to each cell object's liveNeighors number in newArray, updating each cell's alive value with new boolean value...
    let newArrayOfCells = applyRulesOfLife(newArray)
    //3) with newArray, update state of grid...
    this.setState({grid: newArrayOfCells})
  }

  componentDidMount() {
    console.warn('GameContainer --> componentDidMount!')
    let grid = getInitialGrid(this.state.numberOfRows, this.state.numberOfColumns)
    this.setState({grid: grid})
  }

  render() {
    // console.log('GameContainer, this.state is: ', this.state)
    return (
      <div className="GameContainer center-block">

        <h1 className="center-text">
          Game of Life
        </h1>

        <GameGrid
          grid={this.state.grid}
        />

        <div className="center-text">
          <button onClick={this.addGeneration} className="big-button">
            Next Generation
          </button>
        </div>

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
