// O(n*n)
/*
  for each item in an array [8,7,3,4]
  check if element next to it is less 8 > 7
  if so swap them [7,8,3,4]
  8>3 => [7,3,8,4]
  8>4 => [7,3,4,8]
  repeat process again ^
  if swap not happened (means everything sorted) return sortedArray
*/
const arr = [5, 7, 2, 8, 4, 3, 6, 9, 1, 0, 1, 2, 2];

function bubbleSort(arr) {
  let noSwap = true;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      noSwap = false;
    }
  }
  if (noSwap) return arr;
  return bubbleSort(arr);
}

function swap(arr, destinationIndex, startIndex) {
  const temp = arr[destinationIndex];
  arr[destinationIndex] = arr[startIndex];
  arr[startIndex] = temp;
}

console.log(bubbleSort(arr));