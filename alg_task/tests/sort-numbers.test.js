const { createNewSortedArray, ifCount } = require('../sort-numbers');

const cArr = [-5, 0, 5.215, 25.25, 28];
const dArr = [-35, -5.2, 1.12, 3.2, 6.5, 29];

const cArr2 = [-5.3, 0, 5.215, 25.25, 28, 28.2, 29.2, 35];
const dArr2 = [-35, -12, -8.2, -7.6, -5.2, 1.12, 3.2, 6.5, 15, 18.2, 29];

describe('test sort-numbers function', () => {

    const res2 = createNewSortedArray(cArr2, dArr2);
    const res = createNewSortedArray(cArr, dArr);

    it('Should return object', () => {
        expect(typeof res).toBe('object');
    });

    it('Should return arr with length = sum of input arrs length', () => {
        expect(res.length).toBe(cArr.length + dArr.length);
        expect(res2.length).toBe(cArr2.length + dArr2.length);
    });

    it('Should have ifCount less than sum of input arrs length', () => {
        expect(ifCount < cArr.length + dArr.length).toBe(true);
    });

    it('Should return sorted array', () => {
        expect(res === res.sort(function(a, b) {
            return a - b;
        })).toBe(true);
        expect(res2 === res2.sort(function(a, b) {
            return a - b;
        })).toBe(true);
    });
})
