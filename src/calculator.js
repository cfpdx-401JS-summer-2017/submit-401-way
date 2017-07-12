const calculator = {};

calculator.add = function(a, b) {
    return a + b;
};

calculator.subtract = function(a, b) {
    return a - b;
};

calculator.multiply = function(a, b) {
    return a * b;
};

calculator.divide = function(a, b) {
    if (b === 0) {
        throw new Error('you can not divide by zero');
    } else {
        return a / b;
    }
};

module.exports = calculator;
