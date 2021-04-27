const { naturalToBinary } = require('../binary');

describe('test naturalToBinary function', () => {

    let number = 6;
    let res = naturalToBinary(number);

    it('Should return reversed binary number', () => {
        expect(parseInt(res.split('').reverse().join(''), 2) === number).toBe(true);
    })

    it('Should return string', () => {
        expect(typeof res).toBe('string');
    })
})
