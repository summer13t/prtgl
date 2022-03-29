/*

const country = 'Ukraine';
const continent = 'Europe';
let population = 40;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;

let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'ukrainian';

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description);

const descpriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(descpriptionNew);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}



// 1. Predict the result of these 5 operations without executing them:
'9' - '5'; //4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 117
// 2. Execute the operations to check if you were right
console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2);


// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders")
// }
// console.log(typeof numNeighbours)

if (language === 'english' && population < 50 && !isIsland) {
    console.log('You should live in Ukraine :) ');
} else {
    console.log("Ukraine is not meet your criteria :(");
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers !");
        break;
    case 'spanish':
        console.log("2rd place in number of native speakers");
        break;
    case 'english':
        console.log("3rd place ");
        break;
    case "hindi":
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('great language too : D')
}

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average `)

*/
