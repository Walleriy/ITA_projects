let m = 5;
let n = 4;
let arr = [];

let create_table = (rows, cols) => {
    for (let row = 0; row < rows; row++) {

        let arr_column = [];

        for (let column = 0; column < cols; column++) {
            let data = Math.floor((Math.random() * 19) - 9);
            arr_column[column] = data;
        }

        arr[row] = arr_column;
    }
}

let findMax = (arr) => {
    // TODO
}

create_table(m, n);

console.log(arr);
