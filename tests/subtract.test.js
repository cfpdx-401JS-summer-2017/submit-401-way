'use strict';

const assert = require('assert');
const subtract = require('../src/subtract.js');

describe('subtraction', () => {
    it('subtracts something from another thing', () => {
        const subtraction = subtract(2,1);
        assert.equal(subtraction, 1);
    });
});