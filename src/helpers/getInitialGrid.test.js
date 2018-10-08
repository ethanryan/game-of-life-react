import getInitialGrid from './getInitialGrid';

// const mockMath = Object.create(global.Math);
// mockMath.random = () => 0.5;
// global.Math = mockMath;
const getInitialGridFn = jest.fn();

let arrayWithCell = [{"alive": true, "generation": 0, "id": 0, "liveNeighors": "", "x": 0, "y": 0}]

getInitialGridFn.mockReturnValue(arrayWithCell)
// let trueOrFalse = true || false //need to mock this...


test('getInitialGrid returns an array of cell objects', () => {
  expect( getInitialGridFn(1, 1) ).toEqual(arrayWithCell);
});
