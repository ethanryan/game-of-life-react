// This does a two-dimensional loop over the square around the given
// x,y position, counting all fields that have a cell but are not the
// center field.
//NOTE: via: https://codereview.stackexchange.com/questions/87330/emulating-conways-game-of-life-using-javascript?newreg=3c196755a2ad4a94ac580804f08d2483

// export default function countLiveNeighbors(grid, x, y, numberOfRows, numberOfColumns) {
//   var count = 0;
//   let width = numberOfRows
//   let height = numberOfColumns
//   for (var y1 = Math.max(0, y - 1); y1 <= Math.min(height, y + 1); y1++) {
//     for (var x1 = Math.max(0, x - 1); x1 <= Math.min(width, x + 1); x1++) {
//       if ((x1 !== x || y1 !== y) && grid[x1 + y1 * width])
//       count += 1;
//     }
//   }
//   // console.log('countLiveNeighbors, final count is: ', count)
//   return count;
// }

import countLiveNeighbors from './countLiveNeighbors';

// let grid = [ [1],[2] ]
let arrayWithCell = [{"alive": true, "generation": 0, "id": 0, "liveNeighors": "", "x": 0, "y": 0}]

test("countLiveNeighbors takes a grid, cell coordinates, rows and columns, and returns a count of one cell's living neighbors", () => {
  expect( countLiveNeighbors(arrayWithCell, 0, 0, 1, 1) ).toEqual( 0 );
});
