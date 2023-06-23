// Given an array of numbers, write a function to swap the first and last elements using array destructuring.
const elementSwap = function (arr) {
    const first = arr[0];
    const last = arr[arr.length - 1];
    arr.shift();
    arr.pop();
    return [last, ...arr, first];
  };
  
  console.log(elementSwap([1, 2, 34, 5, 45]));
  
  //Write a function that takes an object representing a person with properties like name, age, and occupation. Use object destructuring to extract and print these properties.
  
  const userDtaiil = function (user) {
    const { name, age, occupation } = user;
    console.log(`${name} is ${age} years old and works as a ${occupation}.`);
  };
  
  const user = {
    name: "Joe",
    age: 36,
    occupation: "Engineer"
  };
  userDtaiil(user);
  