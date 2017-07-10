const assert = require('assert');
const multiply = require('../src/multiply');

describe('multiply two numbers', () => {
    it('multiplies two numbers', () => {
        const product = multiply(2,6);
        assert.equal(product, 12);
    });
});