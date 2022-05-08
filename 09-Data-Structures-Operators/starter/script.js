'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};


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

