//сложность O(n)

const array = [2, 1, 3, 5];
function findMissing(arr) {
    let len = arr.length + 1;
    let expectSum = (len * (len + 1)) / 2;
    let realSum = arr.reduce((prev, cur) => prev + cur, 0);
    return expectSum - realSum;
}

console.log(findMissing(array));
