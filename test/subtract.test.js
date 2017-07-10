const assert = require('assert');
const subtract = require('../src/subtract');

describe('subtracting two numbers', () => {
    it('subtracts two numbers', () => {
        const difference = subtract(5,2);
        assert.equal(difference,3);
    });
});