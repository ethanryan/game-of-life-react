// const helloWorld = require('./helloWorld');
import helloWorld from './helloWorld';


test('helloWorld returns a string', () => {
  expect( helloWorld() ).toBe("hi everybody!");
});
