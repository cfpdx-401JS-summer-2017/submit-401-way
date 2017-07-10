var assert = require('assert');
var subtract = require('../src/subtract');

describe('subtracting two numbers', () => {
    it('subtracts two numbers', () => {
        const test_difference = subtract(1, 2);
        assert.equal(test_difference, -1);
    });
});