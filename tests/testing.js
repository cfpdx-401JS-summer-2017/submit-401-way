const calculator = require('../src/calculator');
const add = require( '../src/calculator' );
var assert = require('assert');

describe('module.exports.add', function() {
    it('combines two int into a sum',() => {
        const sum = add(1, 2);
        assert.equal(sum, 3);
    });
});

// describe('subtract', function() {
//     it('deducts one number from the total of the other', ()=>{
//         const total = subtract(1,2);
//         assert.equal(subtract, 1);

//     });
// });

