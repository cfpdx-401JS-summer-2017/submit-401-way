function divide(a,b) {
    let result = 0;

    if (b === 0) {
        throw ('NaN--division by zero');
    } else {
        result = a / b;
    }
    return result;
}

module.exports = divide;