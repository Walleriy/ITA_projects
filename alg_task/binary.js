const naturalNumber = 6;

const naturalToBinary = ( number ) => {
    let res = number.toString(2);
    res = res.split('').reverse().join('');
    return res;
}

const result = naturalToBinary(naturalNumber);

console.log(`Natural number: ${naturalNumber}; \n
Binary number: ${result}`);

module.exports = { naturalToBinary };