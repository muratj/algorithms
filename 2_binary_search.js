// O(log N)
/*
  Works only when array sorted
  Given [5,6,7,8,9,11]
  Search 9
  Split array into half and get middle element (7)
  check if middle element equal, less or greater than search element (7<9)
  if less search the element in the right half and vice versa ([8,9,11])
  repeat the process (9 === 9)
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, number, startIndex = 0, endIndex = arr.length) {
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  let middleNumber = arr[middleIndex];

  if (middleNumber === number) {
    return middleIndex;
  } else if (middleNumber > number) {
    return binarySearch(arr, number, startIndex, middleIndex - 1);
  } else if (middleNumber < number) {
    return binarySearch(arr, number, middleIndex + 1, endIndex);
  }
  return null;
}

const result = binarySearch(arr, 10);

console.log(result);