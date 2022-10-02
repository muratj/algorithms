// O(n)
const arr = [1, 3, 4, 5, 7, 8, 9];
let iterations = 0;

function linearSearch(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    iterations++;
    if (arr[i] === number) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, 9));
console.log(iterations);

module.exports = linearSearch;