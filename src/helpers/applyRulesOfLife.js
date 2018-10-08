export default function applyRulesOfLife(newArray) {
  let newArrayOfCells = newArray.map(eachCell => {
    if (eachCell.alive === false && eachCell.liveNeighors === 3) {
      eachCell.alive = true
      return eachCell
    }
    if (eachCell.alive === true && (eachCell.liveNeighors < 2 || eachCell.liveNeighors > 3)) {
      eachCell.alive = false
      return eachCell
    } else {
      return eachCell
    }
  })
  return newArrayOfCells
}
