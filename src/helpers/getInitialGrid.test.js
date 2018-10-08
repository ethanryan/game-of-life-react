import getInitialGrid from './getInitialGrid';

let trueOrFalse = true || false //need to mock this...

let arrayWithCell = [{"alive": trueOrFalse, "generation": 0, "id": 0, "liveNeighors": "", "x": 0, "y": 0}]

test('getInitialGrid returns an array of cell objects', () => {
  expect( getInitialGrid(1, 1) ).toEqual(arrayWithCell);
});
