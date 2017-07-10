const assert = require('assert');
const calculator = require('../src/calculator');

// calculator.add();
// calculator.subtract();
// calculator.multiply();
// calculator.divide();

describe('calculating', () => {
    it('adds', () => {
        const adding = calculator.add(1,2);
        assert.equal(adding, 3);
    });

    it('subtracts', () => {
        const subtracting = calculator.subtract(2,1);
        assert.equal(subtracting, 1);
    });

    it('multiplies', () => {
        const multiplying = calculator.multiply(2,3);
        assert.equal(multiplying, 6);
    });

    it('divides', () => {
        const dividing = calculator.divide(4,2);
        assert.equal(dividing, 2);
    });
});