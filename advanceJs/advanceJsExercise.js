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
  
  //3.a For-of loops with objects:Create an object that represents a playlist with songs as keys and their durations as values. Use a for-of loop to calculate the total duration of the playlist.
// b. Given an object representing a dictionary with words as keys and their meanings as values, use a for-of loop to print all the words in uppercase.



const playList = {
  boysInTheHood: 210,
  fireWorks: 120,
  uproar: 138,
  tenuSamjawa: 360
}


let totalPlaylistDuration = null;
for(let duration of Object.values(playList)){
  totalPlaylistDuration += duration;
}

console.log(`Total Dusation of the playlist is ${Math.floor(totalPlaylistDuration/60)} mins ${totalPlaylistDuration % 60} Secs `)

const dictionary = {
  Serene: 'calm, peaceful, and untroubled',
  Resilient: 'able to recover quickly from difficulties or setbacks',
  Enigma: 'a person or thing that is mysterious, puzzling, or difficult to understand',
  Eloquent: 'fluent or persuasive in speaking or writing',
  Pristine: 'in its original condition; unspoiled or untouched',
  Avid: 'having a strong passion or enthusiasm for something',
  Benevolent: 'kind, generous, and concerned for others well-being',
  Ambiguous: 'having multiple possible interpretations or meanings',
  Prolific: 'producing or creating abundantly or at a high rate',
  Exquisite: 'extremely beautiful, delicate, or intricate'
};

for (let word of Object.keys(dictionary)) {
  console.log(word.toUpperCase());
}


// Given an array of objects representing books with properties like title, author, and year, use the map method to create a new array with only the titles of the books.
// Write a function that takes an object representing a product with properties like name, price, and quantity. Use the reduce method to calculate the total value of the product.
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  }
];

const bookCollection = books.map((book) => book.title)
console.log(bookCollection)

//b

const products = [
  {
    name: "iPhone",
    price: 999,
    quantity: 10
  },
  {
    name: "Laptop",
    price: 1499,
    quantity: 5
  },
  {
    name: "Headphones",
    price: 99,
    quantity: 20
  },
  {
    name: "Smartwatch",
    price: 199,
    quantity: 8
  }
];

const totalCart = products.reduce((accumulator, product) => {
  return accumulator + product.price * product.quantity
},0);
console.log('$ ' + totalCart)