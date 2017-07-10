const assert = require('assert');
const add = require('../src/add');

describe('adding function', () => {
    it('adds two numbers', () => {
        const sum = add({x:5, y:2});
        assert.equal(sum, 7);
    });


});