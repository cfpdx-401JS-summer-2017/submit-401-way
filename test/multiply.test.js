const assert = require('assert');
const multiply = require('../src/multiply');

describe('multiplying two numbers', () => {
    it('multiplies two numbers', () => {
        const product = multiply(5,2);
        assert.equal(product,10);
    });
});