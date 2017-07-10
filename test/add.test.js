const assert = require('assert');
const add = require('../src/add');

describe('adding two numbers', () => {
    it('adds two numbers', () => {
        const sum = add(5,2);
        assert.equal(sum,7);
    })
})