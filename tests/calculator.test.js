const assert = require('assert');
const calculation = require('../src/calculator');

describe('This is an addition', () => {
    it('Learning how to add!', () => {
        const addition = calculation.add(4, 6);
        assert.equal(addition, 10);
    });
    // it('returns 3rd argument as name', () => {
    //     const options = args(['node', 'greeter.js', 'fred']);
    //     assert.deepEqual(options, { name: 'fred' });
    // });
    // it('returns 3rd argument as name', () => {
    //     const options = args(['node', 'greeter.js', 'fred']);
    //     assert.deepEqual(options, { name: 'fred' });
    // });
    // it('returns 3rd argument as name', () => {
    //     const options = args(['node', 'greeter.js', 'fred']);
    //     assert.deepEqual(options, { name: 'fred' });
    // });

});