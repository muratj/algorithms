// O(n*n)
// const arr = [5, 7, 2, 4, 8, 3, 6, 1, 0, 9];
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let iterations = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) indexOfMin = j;
      iterations++;
    }
    let temp = arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
console.log(iterations);