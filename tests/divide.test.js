var assert = require('assert');
var divide = require('../src/divide');


describe('dividing two numbers', () => {
    it('divides two numbers', () => {
        const test_quotient = divide(1, 2);
        assert.equal(test_quotient, .5);
    });
});