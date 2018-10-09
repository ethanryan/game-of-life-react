import flattenArray from '../helpers/flattenArray';


function makeMatrix(x, y) {
  return Array.from(
    { length: x }, (thing, x) => Array.from(
      { length: y }, (thing, y) => ({ x, y })
    )
  )
};

export default function getInitialGrid(numberOfRows, numberOfColumns) { //move this function to a helper function...
  console.warn('getInitialGrid called...')
  let grid = [] //game grid is an array of cell objects
  let matrix = makeMatrix(numberOfRows, numberOfColumns)
  // console.log('matrix is: ', matrix)
  let matrixFlat = flattenArray(matrix) //NOTE: flat throws error in test, because it is not yet used in all browsers, so using flattenArray function instead...
  // console.log('matrixFlat is: ', matrixFlat)
  let gridLength = matrixFlat.length
  // console.log('gridLength is: ', gridLength)
  for (var i=0; i < gridLength; i++) {
    // console.log('matrixFlat[i] is: ', matrixFlat[i])
    let cell = {
      id: '',
      alive: '',
      x: '', //aka row
      y: '', //aka column
      liveNeighors: '', //make this a function...
      generation: 0
    } //this needs to be declared in the for loop...
    let randomValue = (Math.random() > .5) ? true : false //this needs to be declared in the for loop...
    cell.id = i
    cell.alive = randomValue
    cell.x = matrixFlat[i].x
    cell.y = matrixFlat[i].y
    // console.log('cell now is: ', cell)
    grid.push(cell)
  }
  // console.log('getInitialGrid - grid is: ', grid)
  return grid
}
