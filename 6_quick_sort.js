// O(log n)
/*
  get any element in array as pivot
  forEach element check if it is greater or less than pivot
    if less store in left array
    if greater store in right array
  repeat process for left and right arrays until length equal or less than 1
*/
const arr = [5, 7, 2, 8, 4, 3, 6, 9, 1, 0, 1, 2, 2];

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const lessValues = [];
  const greaterValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      lessValues.push(arr[i]);
    } else {
      greaterValues.push(arr[i]);
    }
  }

  // const sortedArray = [];
  // const sortedLess = quickSort(lessValues);
  // const sortedGreater = quickSort(greaterValues);

  // while (sortedLess.length) {
  //   sortedArray.push(sortedLess.shift());
  // }
  // sortedArray.push(pivot)
  // while (sortedGreater.length) {
  //   sortedArray.push(sortedGreater.shift());
  // }

  // return sortedArray;
  return [...quickSort(lessValues), pivot, ...quickSort(greaterValues)];
}

console.log(quickSort(arr));