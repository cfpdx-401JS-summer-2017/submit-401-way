const assert = require('assert');

function forEach(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

it('forEach', () => {
    const array = [1, 3, 5];
    const collect = [];
    forEach(array, (n, i) => collect[i] = n);
    assert.deepEqual(collect, array);
});