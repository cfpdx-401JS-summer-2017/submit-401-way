const assert = require('assert');
const subtract = require('../src/subtract');

describe('subtracting two numbers', () => {
    it('subtracts two numbers', () => {
        const difference = subtract(4,6);
        assert.equal(difference, 2);
    });
});