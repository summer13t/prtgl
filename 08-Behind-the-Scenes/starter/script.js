'use strict';

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borrowin
matilda.calcAge();

const f = jonas.calcAge;

// f(); - will be undefined

*/
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    // SOLUTION 1
    /* 
    const self = this; 
   
    const isMillenial = function () {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996); BUG coz vse ravno eto regular fction call, hot` i vnutri metoda, a zna4 this = undefined .
      //solution 1 (before ES6) : Create extra var outside
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); */

    // SOLUTION 2 - TO USE ARROW F-TION (coz arrow f-tion doesnt have own THIS, AND THIS in MILLENIAL f-tion will use THIS from PARENT f-tion )
    const isMillenial = () => {
      console.log(this.year <= 1996 && this.year >= 1981);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  }, // PITFALL 4 MISTAKE !! BUG
};
jonas.greet();
jonas.calcAge();

// arguments keyword(not usable now, coz we have more modern tools to work with multiple parametrs:

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
//also we can add more parametrs!
addExpr(2, 4, 7, 9);

//but it will not work with ARROW f-tions, coz it works only with regular (expr and decl);
/*
var addArrow = (a, b) => {
  console.log(arguments); // BUG
  return a + b;
};
addArrow(2, 5);
*/
function addDeclr(a, b) {
  console.log(arguments);
  return a + b;
}

addDeclr(2, 4, 6);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//   Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
//its the same, coz this two objects are pointing on the same adress in the HEAP.
// marriedJessica = {} - cannot be done, coz its a CONST, and with const we can change things in a HEAP, but not in a CALL STACK, what is actually true for primitive types
// FIX;

//So how to copy object ?
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Mary', 'John'],
};
const jessicaCopy = Object.assign({}, jessica2); //this will make a new object for copy of jessica2, but it works only for level 1 (if it will be object in the object, it will not work)
jessicaCopy.lastName = 'Davis';
jessicaCopy.age = 28;
jessicaCopy.family.push('Elvis', 'Duda');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

//BUG so ! Both jessica`s objects have a property called FAMILY, whitch points at the same object in the memory HEAP. for DEEEP COPYING we gonna make some complex things later in course. GL ! thats all in this section
