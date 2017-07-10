const assert = require('assert');
const divide = require('../src/divide');

describe('dividing two numbers', () => {
    it('divides two numbers', () => {
        const quotient = divide(2, 100);
        assert.equal(quotient, 50);

        // let errored = false;
        // try {
        //     divide(0, 8);
        // }
        // catch (err) {
        //     errored = true;
        // }
        // assert.ok(errored);

        // if (errored) {
        //     throw new Error('cannot divide by 0');
        // }
    });

});