const assert = require('assert');
const divide = require('../src/divide.js');

describe('division', () => {
    it('divides a number by another', () => {
        const result = divide(3,2);
        assert.equal(result, 1.5);
    });
});