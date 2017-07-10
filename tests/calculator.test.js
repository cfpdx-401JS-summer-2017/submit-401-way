const assert = require('assert');
const calculator = require('../src/calculator');

// function adder() {
//     return 1;
// }

describe('calculator library', () => {
    it('adds numbers together', () => {
        const sum = calculator.add(1,1); // adder();
        assert.equal(sum, 2);
    });

    it('subtracts numbers from each other', () => {
        const diff = calculator.subtract(2,1);
        assert.equal(diff, 1);
    });

    it('multiplies numbers together', () => {
        const prod = calculator.multiply(2,2);
        assert.equal(prod, 4);
    });

    it('divide numbers', () => {
        const frac = calculator.divide(4,2);
        assert.equal(frac, 2);
    });
});