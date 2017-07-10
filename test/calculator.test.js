const assert = require('assert');
const calculator = require ('../src/calculator');

describe('calculator library', () => {
  it ('adds values', () => {
    const sum = calculator.add(1,4);
    assert.equal(sum, 5);
  });

  it ('subtracts values', () => {
    const difference = calculator.subtract(3, 2);
    assert.equal(difference, 1);
  });

  it ('multiplies values', () => {
    const product = calculator.multiply(1, 4);
    assert.equal(product, 4);
  });
});