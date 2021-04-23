const { create_table, findMax, divideMatrix } = require('../matrix');

test('Should return m*n arr', () => {
    let res = create_table(2, 3);
    expect(res.length).toBe(2);
    expect(typeof res).toBe('object');
})