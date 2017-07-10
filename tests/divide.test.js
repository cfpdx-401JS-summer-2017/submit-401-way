const assert = require('assert');
const divide = require('../src/divide.js');

describe('division', () => {
    it('divides a number by another', () => {
        const result = divide(3,2);
        assert.equal(result, 1.5);
    });

    it('throws an error when dividing by zero', () => {
        let errored = false;
        try{
            divide(10,0);
        }
        catch(err) {
            errored = true;
        }
        assert.ok(errored);
    });
});