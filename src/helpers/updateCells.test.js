import updateCells from './updateCells';

let arrayWithCell = [{"alive": true, "generation": 0, "id": 0, "liveNeighors": "", "x": 0, "y": 0}]

test('updateCells takes lots of arguments and returns a new array of cells', () => {
  expect( updateCells(arrayWithCell, [true], 1, 1, 1) ).toEqual( arrayWithCell );
});
