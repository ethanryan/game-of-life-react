import applyRulesOfLife from './applyRulesOfLife';

let arrayWithCell = [{"alive": true, "generation": 0, "id": 0, "liveNeighors": 3, "x": 0, "y": 0}]

test("applyRulesOfLife takes an array of cells, and returns a new array of cells with each cell's alive status updated based on conditional rules", () => {
  expect( applyRulesOfLife(arrayWithCell) ).toEqual( arrayWithCell );
});
