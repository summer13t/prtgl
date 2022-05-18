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
};
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



/*
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