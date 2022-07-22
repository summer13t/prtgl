'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24
  }
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ mainIndex = 0, starterIndex = 0, time = '20:00', adress }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered streight at ${time} to ${adress} !  `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your nice pasta with ${ing1}, ${ing2} and ${ing3} ;) `
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    if (otherIngredients.length > 0) {
      console.log(
        `Here is your suppa-duppa ${mainIngredient}-based pizza with some ${otherIngredients} :))`
      );
    } else {
      console.log(
        `Here is your suppa-duppa ${mainIngredient}-based pizza :(( `
      );
    }
  }
};

/////////////////////////////////
/*


!!! MAPS 2 !!!
const question = new Map([
  ['question', 'What is the best programmin language in the world? '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct :D'],
  [false, 'Try again!']
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// ITERATION
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = 3;
console.log(question.get(question.get('correct') == answer));
//convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]); // ALL KEYS OF MAPS
console.log([...question.values()]); // ALL VALUES OF MAPS

// !!! MAPS !!!
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // SET METHOD RETURNS THE UPDATED MAP
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegeratian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed:( ');
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
// rest.clear();
// FIX arrays as a KEYs of MAps
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));


// !!! SETS  !!! - when you need to work with unique values
// WHENEVER YOU NEED TO STORE A VALUES IN ORDER, OR YOU NEED TO MANIPULATE A DATA - USE ARRAYS INSTEAD OF SETS
const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);
console.log(orderSet); // All the elements are unique! NO DUPLICATES BUG
console.log(new Set('Jonas'));
console.log(orderSet.size);

// VIDEO METHODS OF SET : .has, .add, .delete, .clear
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread')); //  its like .INCLUDES method in arrays
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear()
console.log(orderSet);
// looping is posible. coz set are also iterable

for (const order of orderSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // we convert our new SET into a NEW ARRAY
console.log(staffUnique);
console.log(new Set(staff).size);
// or
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Jonasschmedtmann').size);

/// !!! LOOPING OBJECTS !!!
// 1) Looping over the propety names ( also called KEYS )

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// 2) Property VALUES
const values = Object.values(openingHours);
console.log(values);

// 3) Looping through the entire OBJECT ( ENTRIES )

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// !!! Optional chaining !!! 
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// EXAMPLE

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'Hi@Jonas.io'
  }
];
console.log(users[0]?.name ?? 'User array is empty');
// and w\o it it will looks like :

if (users.length > 0) {
  console.log(users[0].name);
} else console.log('User array is empty');


//!!! ENHANCED OBJECTS LITERALS !!!

// 1) Object mojet bit snaruji. i 4to bi vpisat ego vnutr drugogo objecta, ti prosto pishehs ego NAZVANIE v properties bez zna4eniya
// 2) Function mojet pisatsya prosto bez slova function
// 3) mojno zna4eniya iz array podstavlyat v properties objecta s pomoshy  destructuring  FIX


// !!! FOR OF loop !!!
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}


// !!! ===== LOGICAL ASSINGMENT OPERATOR ==== !!! 
// 1) OR ASSIGNMENT OPERATOR
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// +======= NULISH ASSIGNMENT OPERATOR ( NULL OR UNDEFINED)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// ============ AND ASSIGNMENT OPERATOR
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

// NULISH OPERATOR, !!! NULISH VALUES : null and undefined (not 0 or "")
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
console.log('------- OR -------');
// use ANY data type, return ANY data type, short-circuiting(shor-circuit evaluation) !!!

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---------- AND --------');
console.log(0 && 'Jonas');
console.log('Jonas' && 15 && true && 23);

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// !!! NOW WE CAN DO IT LIKE THIS
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'spinach');


// REST OPERATOR
// 1) Destructuring

//!!! SPREAD coz on RIGHT sight of =
const arr = [1, 2, ...[3, 4]];

// !!! REST coz on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);
// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// !!! Another variant :
const x = [23, 5, 7];
add(...x); // !!! So at first we destruct an array right here <= and then pass into parametr "numbers" as alone values, and then by "..." rest parameter before NUMBERS (in function) we take it together into a new array and then make a SUM, so it gives us 35

restaurant.orderPizza('Mushrooms', ' onion', ' olives', ' spinach');
restaurant.orderPizza('mushrooms');

// !!! !!! FIX SO SPREAD OPERATOR WE USE IN PLACES, WHEN WE NEED SOME VALUES !!! SEPARATED BY COMAS. AND REST WE USE IN PLACES, WHERE WE NEED SOME VARIABLES NAMES, SEPARATED BY COMAS .




// SPREAD operator !!! in ARRAYS and FUNCTIONS we use it

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
// !!!Whenever we need an elements INDIVIDUALLY - we use SPEAD

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// COPY ARRAY

const mainMenuCopy = [...restaurant.mainMenu];

//JOIN ARRAYS TOGEZA
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// !!! iterables are arrays, strings, maps, sets. but NOT !!! objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//  Real-world example
const ingredients = [
  // prompt("Let's make pasta ! Ingredient 1? "),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Marcello' };
console.log(newRestaurant);
// Copying objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risotto ristorante';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// !!!  Destructuring objects !!!

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Rio Negro',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  adress: 'Rio Validole, 23',
  starterIndex: 1
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

//default values in destructuring objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// NESTED OBJECTS
const {
  fri: { open: o, close: c }
} = openingHours;
console.log(o, c);

// !!! DESTRUCTURING !!!
const arr = [2, 3, 4];
const a = arr[0];∂
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// TODO  SWITCHING VARIABLES W/O destructuring
// let temp = main;
// secondary = main;
// main = temp;
// console.log(main, secondary); AND WITH DESTRUCTURING :

[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested dectructuring
const nested = [2, 4, [5, 6]];
const [q, , [w, e]] = nested;
console.log(q, w, e);

//default values
const [i = 1, j = 1, k = 1] = [8, 9];
console.log(i, j, k);
*/
