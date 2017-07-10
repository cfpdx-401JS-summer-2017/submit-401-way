const calculator = require('../src/calculator');
var assert = require('assert');

const add = require( '../src/calculator' );
describe('add', function() {
    it('combines two int into a sum',() => {
        const sum = add(1, 2);
        assert.equal(sum, 3);
    });
});

const subtract = require( '../src/calculator' );
describe('subtract', function() {
    it('deducts one int from the total of the other', ()=>{
        const total = subtract(1,2);
        assert.equal(total, 1);

    });
});

const multiply = require( '../src/calculator' );
 describe('multiply', function() {
    it('combines two int exponents',() => {
        const exponent = multiply(2, 2);
        assert.equal(exponent, 4);
    });
});

const devide = require( '../src/calculator' );
describe('devide', function() {
    it('splits two int new result',() => {
        const result = devide(2, 10);
        assert.equal(result, 5);
    });
});
