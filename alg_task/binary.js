const naturalNumber = 10;

const naturalToBinary = ( number ) => {
    let res = number.toString(2);
    return res;
}

const result = naturalToBinary(naturalNumber);

console.log(`Natural number: ${naturalNumber}; \n
Binary number: ${result}`);

module.exports = { naturalToBinary };