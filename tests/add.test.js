
var assert = require('assert');
var add = require('../src/add');


describe('adding two numbers', () => {
    it('adds two numbers', () => {
        const test_sum = add(1, 2);
        assert.equal(test_sum, 3);
    });
});