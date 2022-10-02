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

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function swap(arr, destinationIndex, startIndex) {
  const temp = arr[destinationIndex];
  arr[destinationIndex] = arr[startIndex];
  arr[startIndex] = temp;
}

module.exports = bubbleSort;