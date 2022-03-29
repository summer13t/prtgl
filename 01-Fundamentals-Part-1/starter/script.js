/*
let js = 'amazing';
console.log(40 + 21 + 4 - 16);
console.log('Jonas');
console.log(23);

let firstName = ('Pete')
console.log(firstName);

console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log(firstName);

let $function = 'Jess';
let _function = 'Score';

let second_name = ('Roxanne_Arria');

console.log(second_name);

let person = ("Jonas");
let PI = 3.1415;

console.log($function);



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof 23);
console.log(typeof javaScriptIsFun);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;
const birthYear = 1990;
// birthYear = 1991;
// const job;

var job = 'musicMaker';
job = 'footballPlaya';


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 = 2*2*2 (2 v kube) = eng 2 to the power of 3

const firstName = 'Ivan';
const secondName = 'Drago';

console.log(firstName + " " + secondName);
// typeof operators
let year = 'FUCKAAAA';
console.log(typeof year);
// Assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x(15) + 10
x *= 4; // x = x(25) * 4
x++; // x = x(100) + 1
x--;
x--;
console.log(x);

// Comparison operators - sravnitel`nie
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



const firstName = 'Ivan';
const job = 'crafter';
const year = 2054;
const birthYear = 1990;

const Ivan = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + "!";
console.log(Ivan);

const newIvan = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(newIvan);

console.log(`russki voenni korabl, idi naxui!`)
//  we can use `` vmesto '' or "", to use tempate string whenever you want without editing '' & "".

// do es6 multiple lines vigliadeli tak:

console.log('String with \n\
multiple \n\
lines');

//  but now with template strings :
console.log(`String
multiple
lines`);


const age = 15;
if (age >= 18) {
    console.log('Sarah can start driving licence');
} else {
    const yearsLeft = 18 - age;
    console.log(`${yearsLeft} years left to start driving licence`)
}
//  - is called IF\else control structure;

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const birthYear = "1990";
console.log(Number(birthYear) + 18);
console.log(String(27), 27);
console.log(Number('Jonas'));
console.log(typeof NaN);

// type coercion

console.log("23" - 12 - "7");
console.log('I am ' + 23 + " years old");
console.log("23" / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);
console.log(2 + 3 + 4 + "5");



// 5 falsy values: 0, null, undifinied, " ", NaN

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('Ivan'));
console.log(Boolean({}));
console.log(Boolean(''));  // all of that was a conversion

const money = 0;  
if (money) {         // and this is a coercion, right in parentesis (money) javascript make a coercion to boolean automatically, and if value is falsy - it will coerc to False and run ELSE statement. Either it will coerc to true
    console.log("Don't spend it all !");
} else {
    console.log('You should get a job ! ');
}

let heigh = 10;
if (heigh) {
    console.log('Yo ky heigh is defined !');
} else {
    console.log("heigh is undefined!");
}



const age = '18';
if (age === 18) console.log('you are full of shit +');

if (age == 18) console.log('you are full of shit - ')


const favourite = Number(prompt('What is your favourite number ? '));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is a cool number ! ");
} else if (favourite === 7) {
    console.log("Cool! 7 is a cool number too! ) ");
} else if (favourite === 9) {
    console.log("omg, its a 9 ! Great number !! ");
} else {
    console.log("your number is not 23 or 7 or 9 :( ");
}

if (favourite !== 23) console.log("Why not a 23? ");




// const hasDriversLicence = true;
// const hasGoodVision = true;
// const isTired = false;

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("someone else should drive ...");
// }


const day = 'mond';
// const day = prompt('what day ? ');
switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record the videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend ! : D ');
        break;
    default:
        console.log('not a valid day ! ');
}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('go to coding meetup');
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("write code examples");
} else if (day === 'friday') {
    console.log('record the videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend ! :D ');
} else {
    console.log('not a valid day  ');
}


// Conditional ( ternary) operator . ternary - троичный, ибо у него 3 части
const age = 23;
// age >= 18 ? console.log(' I like to drink sodavodka') :
//     console.log('I like to drink a water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

