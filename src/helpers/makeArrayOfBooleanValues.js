export default function makeArrayOfBooleanValues(array) {
  let arrayOfBooleanValues = array.map(cell => cell.alive);
  return arrayOfBooleanValues
}
