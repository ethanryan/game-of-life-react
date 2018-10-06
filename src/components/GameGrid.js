import React, { Component } from 'react';

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

class GameGrid extends Component {


  render() {
    return (
      // <div className="GameGrid center-block">
      //   Game Grid here!!!
      // </div>

      <div>
        game grid...

        <div className="grid-container">
          {grid.map(eachCell => {
            console.log('eachCell is: ', eachCell)
            return (
              <div key={eachCell.id} className="grid-item">
                {eachCell.id} -- {eachCell.alive === true ? "ALIVE!!" : "dead..."}
              </div>
            )
          })}
        </div>

      </div>
    );
  }
}

export default GameGrid;
