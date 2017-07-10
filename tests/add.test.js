'use strict';

const assert = require('assert');
const add = require('../src/add.js');

describe('addition', () => {
    it('adds things together', () => {
        const sum = add(1,2);
        assert.equal(sum, 3);
    });
});