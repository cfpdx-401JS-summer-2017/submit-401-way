var assert = require('assert');
var multiply = require('../src/multiply');


describe('multiplying two numbers', () => {
    it('multiplies two numbers', () => {
        const test_product = multiply(1, 2);
        assert.equal(test_product, 2);
    });
});