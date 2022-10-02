const selectionSort = require('../3_selection_sort');
const bubbleSort = require('../4_bubble_sort');
const mergeSort = require('../5_merge_sort');
const quickSort = require('../6_quick_sort');
const getUnsortedArrayWithLength = require('./helper');

let unsortedArray;
let expectedArray;
let startTime;

beforeEach(() => {
  unsortedArray = getUnsortedArrayWithLength(100000);
  expectedArray = [...unsortedArray].sort((a, b) => a - b);
  startTime = new Date();
})

afterEach(() => {
  const timeToSort = (new Date() - startTime) / 1000;
  console.log('Selection Sort completion time', timeToSort, 's');
})

test('should run selection sort', () => {
  const sortedArray = selectionSort(unsortedArray);
  expect(sortedArray.length).toEqual(unsortedArray.length);
  expect(JSON.stringify(sortedArray)).toEqual(JSON.stringify(expectedArray));
});
test('should run bubble sort', () => {
  const sortedArray = bubbleSort(unsortedArray);
  expect(sortedArray.length).toEqual(unsortedArray.length);
  expect(JSON.stringify(sortedArray)).toEqual(JSON.stringify(expectedArray));
});
test('should run merge sort', () => {
  const sortedArray = mergeSort(unsortedArray);
  expect(sortedArray.length).toEqual(unsortedArray.length);
  expect(JSON.stringify(sortedArray)).toEqual(JSON.stringify(expectedArray));
});
test('should run quick sort', () => {
  const sortedArray = quickSort(unsortedArray);
  expect(sortedArray.length).toEqual(unsortedArray.length);
  expect(JSON.stringify(sortedArray)).toEqual(JSON.stringify(expectedArray));
});