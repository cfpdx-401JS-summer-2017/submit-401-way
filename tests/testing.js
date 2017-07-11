const calculator = require('../src/calculator');
var assert = require('assert');

describe('add', function() {
    it('combines two int into a sum',() => {
        const sum = calculator.add(1, 2);
        assert.equal(sum, 3);
    });
});

describe('subtract', function() {
    it('deducts one int from the total of the other', ()=>{
        const total = calculator.subtract(1,2);
        assert.equal(total, -1);

    });
 });

 describe('multiply', function() {
    it('combines two int exponents',() => {
        const exponent = calculator.multiply(2, 2);
        assert.equal(exponent, 4);
    });
});

describe('devide', function() {
    it('splits two int new result',() => {
        const result = calculator.devide(2,0);
        assert.equal(result, 0);
    });
    it ('can not devide by 0', () => {
        let errored = false;
        try
    }
});
