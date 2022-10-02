const linearSearch = require('../linear_search');

const arr = [2, 3, 4, 5, 3, 2, 4, 9];

test('should search first element', () => {
  const result = linearSearch(arr, 2);
  expect(result).toBe(0);
});
test('should search last element', () => {
  const result = linearSearch(arr, 9);
  expect(result).toBe(7);
});
test('should search middle element', () => {
  const result = linearSearch(arr, 5);
  expect(result).toBe(3);
});