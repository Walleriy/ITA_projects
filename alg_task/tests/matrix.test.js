const { create_table, findMax, divideMatrix } = require('../matrix');

const twoDimensionalArrLength = (arr) => {
    let length = 0;
    for (const arrElement of arr) {
        length = length + arrElement.length;
    }

    return length;
}

describe('test functions from matrix', () => {

    let m = 2;
    let n = 3;
    let res = create_table(m, n);
    let testArr = [
        [1, 2, 3],
        [-1, 2, 5],
        [-2, -6, 5]
    ];
    let divideRes = divideMatrix(res,findMax(res));

    describe( 'test create_table', () => {

        it('Should return object', () => {
            expect(typeof res).toBe('object');
        })

        it('Should return arr with length = m*n', () => {
            expect(twoDimensionalArrLength(res)).toBe(m*n);
        })
    });

    describe('test findMax', () => {

        it('Should return number', () => {
            expect(typeof findMax(res)).toBe('number');
            expect(typeof findMax(testArr)).toBe('number');
        })

        it('should return 6 for testArr', () => {
            expect(findMax(testArr)).toBe(6);
        });
    });

    describe('test divideMatrix', () => {

        it('Should return object', () => {
            expect(typeof divideRes).toBe('object');
        })

        it('Should return arr with length = m*n', () => {
            expect(twoDimensionalArrLength(divideRes)).toBe(m*n);
        })

    });

})
