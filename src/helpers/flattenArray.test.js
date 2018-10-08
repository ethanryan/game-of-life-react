import flattenArray from './flattenArray';

let array = [ [1],[2] ]

test('flattenArray returns a flat single level array', () => {
  expect( flattenArray(array) ).toEqual( [1, 2] );
});
