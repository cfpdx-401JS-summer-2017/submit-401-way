const assert = require('assert');
const calculator = require ('../src/calculator');

describe('calculator library', () => {
  it ('adds values', () => {
    const sum = calculator.add();
    assert.equal(sum, 2);
  });
});