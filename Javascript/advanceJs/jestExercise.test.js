const {arraySort, calculator} = require('./jestExercise');
test('Sorts [3, 2, 1] to [1, 2, 3]', () => {
  const inputArray = [3, 2, 1]; // Input array to be sorted
  const expectedSortedArray = [1, 2, 3]; // Expected sorted array
  const sortedArray = arraySort(inputArray); // Sorting the input array using arraySort function
  
  expect(sortedArray).toEqual(expectedSortedArray); // Expecting the sorted array to be equal to the expected sorted array
});

test('(2, 3) - Addition, Subtraction, and Multiplication of variables', () => {
    const calc = calculator(2, 3); // Creating a calculator object with initial values 2 and 3
    expect(calc.addition()).toBe(5); // Expecting addition operation to result in 5
    expect(calc.subtracrion()).toBe(-1); // Expecting subtraction operation to result in -1
    expect(calc.multiplication()).toBe(6); // Expecting multiplication operation to result in 6
})
