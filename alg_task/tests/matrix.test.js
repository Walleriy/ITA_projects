const { create_table, findMax, divideMatrix } = require('../matrix');

describe('test functions from matrix', () => {

    let res = create_table(2, 3);

    it('Should return arr with length = m', () => {
        expect(res.length).toBe(2);
        expect(typeof res).toBe('object');
    })
    it('Should return object', () => {
        expect(typeof res).toBe('object');
    })
})
