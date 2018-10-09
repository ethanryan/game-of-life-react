export default function flattenArray(array) {
  let flatArray = array.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4] //to flat single level array
  return flatArray
}
