import countLiveNeighbors from './countLiveNeighbors';

export default function updateCells(clone, arrayOfBooleanValues, nextGeneration, numberOfRows, numberOfColumns) {
  // let numberOfRows = this.state.numberOfRows
  // let numberOfColumns = this.state.numberOfColumns
  let newArray = clone.map(eachCell => {
    let livingCellsCount = countLiveNeighbors(arrayOfBooleanValues, eachCell.x, eachCell.y, numberOfRows, numberOfColumns)
    // console.log('in makeNewArrayOfCells, livingCellsCount is: ', livingCellsCount)
    eachCell.liveNeighors = livingCellsCount
    eachCell.generation = nextGeneration
    return eachCell
  })
  return newArray
}
