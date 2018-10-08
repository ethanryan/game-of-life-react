import React, { Component } from 'react';

import Cell from './Cell';


class GameGrid extends Component {

  render() {
    return (
        <div className="grid-container">
          {this.props.grid.map(eachCell => {
            // console.log('eachCell is: ', eachCell)
            return (
              <div key={eachCell.id} className="grid-item">
                <Cell
                  cellId={eachCell.id}
                  cellAlive={eachCell.alive}
                  cellX={eachCell.x}
                  cellY={eachCell.y}
                  cellGeneration={eachCell.generation}
                  liveNeighors={eachCell.liveNeighors}
                />
              </div>
            )
          })}
        </div>
    );
  }
}

export default GameGrid;
