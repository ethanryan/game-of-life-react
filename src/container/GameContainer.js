import React, { Component } from 'react';

import GameGrid from '../components/GameGrid';
import ControlPanel from '../components/ControlPanel';

class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer center-block">

        <div>GameContainer here, rendering GameGrid...</div>

        <div className="rules">

          <h1>
            Game of Life Rules:
          </h1>

          <p>
            The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
          </p>
          <p>
            Any live cell with fewer than two live neighbors dies, as if by underpopulation.
          </p>
          <p>
            Any live cell with two or three live neighbors lives on to the next generation.
          </p>
          <p>
            Any live cell with more than three live neighbors dies, as if by overpopulation.
          </p>
          <p>
            Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
          </p>
          <p>
            The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.
          </p>
        </div>

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
