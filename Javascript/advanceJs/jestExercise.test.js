const arraySort = require('./jestExercise');

test('Sorts [3, 2, 1] to [1, 2, 3]', () => {
  const inputArray = [3, 2, 1];
  const expectedSortedArray = [1, 2, 3];
  const sortedArray = arraySort(inputArray);
  
  expect(sortedArray).toEqual(expectedSortedArray);
});
