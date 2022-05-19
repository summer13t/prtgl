'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex=1, mainIndex=0, adress, time='20:00'}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
};

// SPREAD OPERATOR
const arr = [8,9,7];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr);

console.log(...newGoodArr);

// EXAMPLE 
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// COPY ARRAy
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// FIX BUG !!!! ITERABLES ARE : All data structures, except THE OBJECTS (Arrays, Strings, maps, sets)

const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters);
console.log(...str);

// FIX console.log(`${...str} NOT WORKIN`); COZ ITS (MULTIPLE VALUES, SEPARETED BY COMAS) USUALLY EXPECTED ONLY WHEN WE PASS ARGUMENTS IN FUNCTIONS, OR ARE CREATING A NEW ARRAYS ! 

// real-world example
const ingredients = ['mushrooms', 'avocado', 'cheese'];
restaurant.orderPasta(...ingredients);


// or we can do 

// const ingredientsPromtp = [prompt(`Lets make a pasta! Ingredient 1?`), prompt('Ingredient 2?'), prompt('ingredient 3 ?')]
// restaurant.orderPasta(...ingredientsPromtp);

// OBJECTS FIX IN ES2018 We CAN ALSO MAKE IT WITH OBJECTS ( SPREAD OPERATOR)

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

// Copying ! 

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'KABAK';
console.log(restaurant.name);
console.log(restaurantCopy.name); // U SEE??? ! ITS CHANGING JUST ONE ! (JUST IN COPY, NOT IN MAIN OBJECT )




// destructuring objects 

/*
restaurant.orderDelivery({
  time: '00:53',
  adress: 'Kozatska 15',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  adress: "Kosovo",
  mainIndex: 0
});


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//we can set default values, for property, that doesnt exist yet ( that we wanna get from API or etc.)
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 555;
const obj = {a:23, b:7, c:14};
({a, b} = obj);
console.log(a, b);

// nested objects
const {fri: {open: openFriday, close: closeFriday}} = openingHours;
console.log(openFriday, closeFriday);




const arr = [2, 7, 8];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// Welcome - DESTRUCTURING 
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//skipping some elements by empty spaces , ,
let [main, , secondary] = restaurant.categories
console.log(main, secondary);
// in order to switch two variables (In our case to switch Italian with vegetarian) : 
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from function array
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(3, 0);
console.log(starter, mainCourse);

// NEsted destructuring
const nested = [3, 6, [2, 4]];
// const [i, ,j] = nested;
// console.log(i, j);
const [i, ,[j, k]] = nested; 
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 5];
console.log(p, q, r);

*/