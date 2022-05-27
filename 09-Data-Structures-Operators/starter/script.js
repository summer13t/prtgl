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
  },

  orderPizza: function (mainIngredient, ...othersIngredients) {
    console.log(`Here is your pizza ${mainIngredient}-based on, with some ${othersIngredients}`);
    console.log(mainIngredient, othersIngredients);
  }
};

// NULIST COALESCING OPERATOR 
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//NULISH VALUES ARE: null and undefined ( NOT INCLUDED 0 or " " );
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


/*

// 3 things about LOGICAL OPERATORS: 1) use ANY data type; 2)return ANY data type; 3)short-circuiting evaluation (in case of "OR" operator- if 1st value is a truthy value - it will immediately return the first value)

console.log('====== OR =====');
console.log(3 || "Suluguni");
//AND ! if all of them are falsy - then it will return the last:
console.log(undefined || null);
//examples :
console.log("" || "Soso");
console.log(true || 0);
console.log(undefined || null || "" || 'HI' || 23 || 0);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
// INSTEAD we could do this : 
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
console.log('======= AND =======');
// AND operator works in OPPOSITE WAY: it will immediately return the first falsy value. Or if all walues are truthy - i will return the last
console.log(0 && 'Jonas'); 
console.log(7 && 'Jonas');

console.log('HI' && 23 && null && 13 && 'OK');  

// PRACTICAL EXAMPLE 
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'suluguni');
}
// INSTeAD we can do this :
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'suluguni');

// FIX BUG SO !!! in practical applications we can use the OR operator to set default values, and AND operator to execute code in the second operand if the first one is true;





//  REST PATTERN  1) DESTRUCTURING

// REST coz on the LEFT side of =
const [a, b, ...others]  = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherMenu); // FIX so it not includes any SKIPPED elements, only rest of them. so ! REST pattern only must be a lAST

// OBJECTS with REST 
const { sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions (rest parametr)


const add = function (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)
    sum += numbers[i]; 
  console.log(sum);
};
add(2,4);
add(2,4,6,7);
add(1,2,3,4,5,6,7,8);

const x = [23, 25, 7];
add(...x);

restaurant.orderPizza('mushrooms', ' ananas', ' Suluguni', " chiken");





// SPREAD coz on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];


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