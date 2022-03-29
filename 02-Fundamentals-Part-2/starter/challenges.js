//  Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.


// const heighMark = 1.69;
// const heighJohn = 1.95;
// const weightMark = 78;
// const weightJohn = 92;
// const heighMark = 1.88;
// const heighJohn = 1.76;
// const weightMark = 95;
// const weightJohn = 85;
// const marksBMI = weightMark / heighMark ** 2;
// const johnsBMI = weightJohn / heighJohn ** 2;
// console.log(marksBMI, johnsBMI);

// console.log(marksBMI1, markHigherBMI1, markHigherBMI2);



// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

// if (marksBMI > johnsBMI) {
//     console.log(`Mark's BMI(${marksBMI}) is higher than John's(${johnsBMI})!`);
// } else {
//     console.log(`John's BMI(${johnsBMI}) is higher than Mark's(${

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106})!`);
// // }



// const dolphins1 = 90;
// const dolphins2 = 106;
// const dolphins3 = 101;
// const koalas1 = 109;
// const koalas2 = 90;
// const koalas3 = 100;
// const averageDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
// const averageKoalas = (koalas1 + koalas2 + koalas3) / 3;
// console.log(averageDolphins, averageKoalas);
// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log("Dolphins wins! Congratulations !");
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log("Koalas wins! Congratulations ! ");
// } else if (averageKoalas >= 100 && averageDolphins >= 100 && averageKoalas === averageDolphins) {
//     console.log("Draw! There is no winner !");
// } else {
//     console.log('no team wins the trophy ! ');

// }

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20 %.
Your tasks:
1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
this.It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
    (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430

*/
// const bill = 40;

// const bill = Number(prompt('bill ?'))
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// function price(bill) {
//     return console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2}, and the total value is ${bill + (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)};`)
// }
// price(Number(prompt("BILL ? ")));

/*

A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

*/
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins >= averageKoalas * 2) {
//         console.log(`Dolphins win (${avgDolhins} vs. ${averageKoalas})`);
//     } else if (avgKoalas >= averageDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log(`no winner ! `);
//     }
// }

// checkWinner(averageDolphins, averageKoalas);

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);


/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
    / (height * height)(mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI(the same
method on both objects).Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
tall.

const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

mark.calcBMI();
console.log(mark);
console.log(mark.bmi);




const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;

    }
};

john.calcBMI();   // esli ne vizvat etot metod - ne budet rabotat next, ibo ne budet takogo property kak BMI do zapuska metoda CALC
console.log(john.bmi);
// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullname}'s BMI (${mark.calcBMI()}) is higher than ${john.fullname}'s (${john.calcBMI()})`);
// } else {
//     console.log(`${john.fullname}'s BMI (${john.calcBMI()}) is higher than ${mark.fullname}'s (${mark.calcBMI()})`)
// };

console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullname}'s BMI (${mark.calcBMI()}) is higher than ${john.fullname}'s BMI (${john.calcBMI()})` : `${john.fullname}'s BMI (${john.calcBMI()}) is higher than ${mark.fullname}'s BMI (${mark.calcBMI()})`);
*/

/*
/////////////////////////////////////////


Coding Challenge #4 


Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals('tips' and 'totals')
3. Use the 'calcTip' function we wrote before(no need to repeat) to calculate
tips and total values(bill + tip) for every bill value in the bills array.Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
    an argument.This function calculates the average of all numbers in the given
array.This is a difficult challenge(we haven't done this before)! Here is how to
solve it:
    4.1.First, you will need to add up all values in the array.To do the addition,
        start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop.In each iteration, add the current value to the
'sum' variable.This way, by the end of the loop, you have all values
added together
4.2.To calculate the average, divide the sum you calculated before by the
length of the array(because that's the number of elements)
4.3.Call the function with the 'totals' array

*/


/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push((calcTip(bills[i]) + bills[i]));
};
console.log(tips);
console.log(totals);




const calcAverage = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum / arr.length; // na proverke zavtikal consolit tyt, a consolil snaruji. vo vtorih - ne zareturnil average
};
console.log(Math.trunc(calcAverage(totals)));
console.log(Math.trunc(calcAverage(tips)));

*/

