/* Testing using Jest:
Write a test case using Jest to check if a function correctly sorts an array of numbers in ascending order.
Create a test suite using Jest to test a calculator object that has methods for addition, subtraction, multiplication. */

const arraySort = function(arr){
  return arr.sort((a,b) => a - b)
}

function calculator(num1, num2){
    const calcMethods = {
        num1: num1,
        num2: num2,
        addition: function(){
            return this.num1 + this.num2
        },
        subtracrion: function(){
            return this.num1 - this.num2
        },
        multiplication: function(){
            return this.num1 * this.num2
        }
    }
    return calcMethods;
}


module.exports = {arraySort, calculator}