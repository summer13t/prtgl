// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 17, 15, 14, 13, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:'))
    value: 10
  };
  console.table(measurement); // new command ! - v vide tabl
  // console.warn
  //console.error
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

//using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

*/

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// const forecastTemp = [17, 21, 23];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `... ${arr[i]}ºC in ${i + 1} days`;
//   }
//   console.log(str);
// };

// printForecast([12, 5, -5, 0, 4]);
