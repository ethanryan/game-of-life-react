import React, { Component } from 'react';

import Cell from './Cell';


class GameGrid extends Component {

  render() {
    return (
      // <div className="GameGrid center-block">
      //   Game Grid here!!!
      // </div>

      <div>
        game grid...

        <div className="grid-container">
          {this.props.grid.map(eachCell => {
            console.log('eachCell is: ', eachCell)
            return (
              <div key={eachCell.id} className="grid-item">
                <Cell
                  cellId={eachCell.id}
                  cellAlive={eachCell.alive}
                />
              </div>
            )
          })}
        </div>

      </div>
    );
  }
}

export default GameGrid;
