const assert = require('assert');
const calculation = require('../src/calculator');

describe('This is the entire calculator', () => {
    it('Learning how to add!', () => {
        const addition = calculation.add(4, 6);
        assert.equal(addition, 10);
    });

    it('Learning how to substract!', () => {
        const substraction = calculation.substract(6, 3);
        assert.equal(substraction, 3);
    });
   
    it('Learning how to multiply!', () => {
        const multiplication = calculation.multiply(4, 6);
        assert.equal(multiplication, 24);
    });   

    it('Learning how to divide!', () => {
        const division = calculation.divide(8, 2);
        assert.equal(division, 4);
    });      

});