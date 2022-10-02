// O(n*n)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) indexOfMin = j;
    }
    let temp = arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin] = temp;
  }
  return arr;
}

module.exports = selectionSort;