const { naturalToBinary } = require('../binary');

describe('test naturalToBinary function', () => {

    let number = 10;
    let res = naturalToBinary(number);

    it('Should return string', () => {
        expect(typeof res).toBe('string');
    })

    it('Should return reversed binary number', () => {
        expect(parseInt(res, 2) === number).toBe(true);
    })

})
