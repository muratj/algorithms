// O(n log n)
/*
  split array in a half [8,7,3,4](left and right)
  until you get array with 1 element [ [ [8],[7] ],[ [3],[4] ] ]
  then compare left and right elements and merge it to one array [8],[7] => [7,8]
  repeat this process for right parent array too [3],[4] => [3,4]
  so we have sorted left and right elements merge them again [7,8],[3,4] => [3,4,7,8]
*/

function mergeSort(arr) {
  const middle = Math.floor(arr.length / 2);

  if (arr.length === 1) return arr;
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  while (leftArray.length) {
    sortedArray.push(leftArray.shift());
  }
  while (rightArray.length) {
    sortedArray.push(rightArray.shift());
  }
  return sortedArray;
}

module.exports = mergeSort;