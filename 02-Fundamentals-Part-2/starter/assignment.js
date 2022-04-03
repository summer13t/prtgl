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

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const ukr = describeCountry('Ukraine', 40, 'Kyiv');
// const fin = describeCountry('Finland', 6, 'Helsinki');
// const prtgl = describeCountry('Portugal', 13, 'Lisbon');
// console.log(ukr, fin, prtgl);

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//     return (population / worldPopulation) * 100;
// }

// const populationChina = percentageOfWorld1(1441);
// const populationUkraine = percentageOfWorld1(40);
// const populationFinland = percentageOfWorld1(6);

// console.log(populationChina, populationUkraine, populationFinland);

// const percentageOfWorld2 = function (population) {
//     return (population / worldPopulation) * 100;
// }

// const popCH = percentageOfWorld2(1441);
// const popUK = percentageOfWorld2(40);
// const popFN = percentageOfWorld2(6);

// console.log(popCH, popUK, popFN);

// const percentageOfWorld3 = population => (population / worldPopulation) * 100;

// const pCN = percentageOfWorld3(1441);
// const pUK = percentageOfWorld3(40);
// const pFN = percentageOfWorld3(6);

// console.log(pCN, pUK, pFN);

// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//     return (population / worldPopulation) * 100;
// }

// const describePopulation = function (country, population) {
//     const percent = percentageOfWorld1(population);
//     const description = `${country} has ${population} million ppl, which is about ${percent}% of the world.`;
//     console.log(description);
// }

// describePopulation('China', 1441);
// describePopulation('Ukraine', 40);
// describePopulation('Finland', 6);

// const populations = [1441, 40, 6, 13];
// console.log(populations.length === 4);

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];

// console.log(percentages);

// const neighbours = ['Poland', 'Moldova', 'Romania'];
// neighbours.push('Utopia');
// neighbours.pop();

// if (neighbours.includes('Germany') === false) {
//     console.log('Probably not a central European country');
// }

// // ne doper do !
// neighbours[neighbours.indexOf('Moldova')] = 'Republic of Moldova';

// console.log(neighbours);

// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Kyiv',
//     language: 'ukrainian',
//     population: 40,
//     neighbours: ['Poland', 'Moldova', 'Romania']
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking ppl, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// // // zatypil !! napisal myCountry.population = 42;

// // console.log(myCountry);

// // // same !! napisal myCountry['population'] = 40,

// //     console.log(myCountry);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

//!!!!!!!!!!!!!!!!!!

// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Kyiv',
//     language: 'ukrainian',
//     population: 40,
//     neighbours: ['Poland', 'Moldova', 'Romania'],
//     checkIsland: function () {
//         this.isIsland = !this.neighbours.length ? true : false;
//     }
// };

// myCountry.describe = function () {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking ppl, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
// }

// myCountry.describe();

// // myCountry.checkIsLand = function () {
// //     myCountry.isIsland = myCountry.neighbours.length ? true : false
// // };
// myCountry.checkIsland();
// // console.log(myCountry.isIsland);
// console.log(myCountry)

// for (let voter = 1; voter <= 50; voter = voter + 1) {
//     console.log(`Voter number ${voter} is currently voting`)
// };

// const populations = [1441, 40, 6, 13];

// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//     return (population / worldPopulation) * 100;
// }

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];

// console.log(percentages);

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// };
// console.log(percentages2);

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// }
// console.log(percentages2)

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "rusia"],
// ];

// // console.log(listOfNeighbours[0][0]);

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   //   console.log(listOfNeighbours[i]);
//   for (let o = 0; o < listOfNeighbours[i].length; o++) {
//     console.log(`Neighbour : ${listOfNeighbours[i][o]} `);
//   }
// }

// const populations = [1441, 40, 6, 13];

// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// };
// console.log(percentages2);

// const percentages3 = [];

// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages3.push(perc);
//   i++;
// }
// console.log(percentages3);
