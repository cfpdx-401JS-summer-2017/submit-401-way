const assert = require('assert');
const divide = require('../src/divide');

describe('dividing two numbers', () => {
    it('divides two numbers', () => {
        const quotient = divide(5,2);
        assert.equal(quotient,2.5);
    });
});