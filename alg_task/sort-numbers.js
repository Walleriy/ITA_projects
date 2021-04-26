const cArr = [-5, 0, 5.215, 25.25, 28];
const dArr = [-35, -5.2, 1.12, 3.2, 6.5, 29];
let ifCount = 0;

const createNewSortedArray = (arr1, arr2) => {
    let resArr = [];

    let cIterator = 0;
    let dIterator = 0;
    while(cIterator < arr1.length || dIterator < arr2.length) {

        ifCount = ifCount + 1;
        if( arr1[cIterator] <= arr2[dIterator] ){
            resArr.push(arr1[cIterator]);
            cIterator = cIterator + 1;

            if(cIterator === arr1.length) {
                while (dIterator < arr2.length) {
                    resArr.push(arr2[dIterator]);
                    dIterator = dIterator + 1;
                }

                return resArr;
            }
        }
        else {
            resArr.push(arr2[dIterator]);
            dIterator = dIterator + 1;

            if(dIterator === arr2.length) {
                while (cIterator < arr1.length) {
                    resArr.push(arr1[dIterator]);
                    cIterator = cIterator + 1;
                }

                return resArr;
            }
        }

    }

    return resArr;
}

let newArr = createNewSortedArray(cArr, dArr);

console.log(`cArr: ${cArr} \n 
dArr: ${dArr} \n 
newArr: ${newArr} \n 
ifCount = ${ifCount} < ${cArr.length} + ${dArr.length}: ${ifCount < (cArr.length + dArr.length)}`);

module.exports = { createNewSortedArray };
