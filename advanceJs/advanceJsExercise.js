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


  // Write a function that takes an object representing a shopping cart with items and their quantities. Use a for loop to calculate the total price of all items in the cart.
  const shoppingCart = {
    itemOne: {
      item: "Soap",
      price: 10,
      quantity: 5
    },
    itemtwo: {
      item: "loofa",
      price: 20,
      quantity: 1
    },
    itemThree: {
      item: "Shampoo",
      price: 35,
      quantity: 2
    }
  };
  
  const priceCalculator = function (shoppingCart) {
    let totalAmount = null;
    let message = " ";
    //console.log(shoppingCart.itemOne.price)
    for (let items in shoppingCart) {
      const { item, price, quantity } = shoppingCart[items];
      const itemTotalAmount = price * quantity;
      totalAmount = totalAmount + itemTotalAmount;
      message += `${item} (${price} * ${quantity}): ${itemTotalAmount}\n`;
    }
    message += `Total: CAD ${totalAmount}`;
    return message;
  };
  
  console.log(priceCalculator(shoppingCart));
  