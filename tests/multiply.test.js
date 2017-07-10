const assert = require('assert');
const multiply = require('../src/multiply.js');

describe('multiply', () => {
    it('multiplies a number by another', () => {
        const result = multiply(3,2);
        assert.equal(result, 6);
    });
});