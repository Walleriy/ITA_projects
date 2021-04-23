let m = 5;
let n = 4;

const create_table = (rows, cols) => {

    let arr = [];

    for (let row = 0; row < rows; row++) {

        let arr_column = [];

        for (let column = 0; column < cols; column++) {
            let data = Math.floor((Math.random() * 19) - 9);
            arr_column[column] = data;
        }

        arr[row] = arr_column;
    }

    return arr;
}

const findMax = (arr) => {

    let max = arr[0][0];

    for (const arrElement of arr) {
        for (const arrElementElement of arrElement) {
            if (Math.abs(arrElementElement) > max) {
                max = Math.abs(arrElementElement);
            }
        }
    }

    return max;
}

const divideMatrix = (inputArr, divider) => {

    const arr = JSON.parse(JSON.stringify(inputArr));

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            arr[row][col] = (arr[row][col]/divider).toFixed(3);
        }
    }

    return arr;
}

const matrix = create_table(m, n);
const max = findMax(matrix);
const newMatrix = divideMatrix(matrix, max);

console.log(`Created matrix with ${m} rows and ${n} columns:`);
console.table(matrix);

console.log(`Max value in matrix : \n ${max}`);

console.log(`New matrix :`);
console.table(newMatrix);

module.exports = {create_table, findMax, divideMatrix}
