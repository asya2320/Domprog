const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

// вариант с методами массива - O(nlogn)
// function findUnique(arr) {
//     return arr
//         .sort((a, b) => a - b)
//         .filter((val, inx, arr) => val != arr[inx + 1]);
// }

// вариант с мапами, более оптимальный - O(n)
function findUnique(arr) {
    const unique = new Map();
    const uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.has(arr[i])) {
            unique.set(arr[i], true);
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

console.log(findUnique(array));
