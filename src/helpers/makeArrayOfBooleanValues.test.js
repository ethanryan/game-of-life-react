import makeArrayOfBooleanValues from './makeArrayOfBooleanValues';

let array = [{alive: true}, {alive: false}, {alive: true}]

test('makeArrayOfBooleanValues takes an array of objects and returns an array of booleans based on the alive attribute', () => {
  expect( makeArrayOfBooleanValues(array) ).toEqual( [true, false, true] );
});
