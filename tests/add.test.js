const assert = require('assert');
const add = require('../src/add');

describe('calculator library', () => {
    it('adds', () => {
        const adding = add(1,2);
        assert.equal(adding, 3);
    });
});