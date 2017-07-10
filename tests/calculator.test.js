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

});