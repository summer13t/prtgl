///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};

// [players1, players2] = [...game.players];
// const [pl1, pl2] = game.players;
// console.log(pl1, pl2);
// [gk, ...fieldPlayers] = [...players1];
// const allPlayers = [...players1, ...players2];
// [...playersFinal] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team1, x: draw, team2 } = game.odds;
// const greatest = Math.min(team1, team2);
// console.log(greatest);
// console.log(players1, players2);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored by ${players}`);
// };

// printGoals('Davies', 'Miller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Miller');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely wo win');


Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console ( We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console , but in a nice formatted way,exactly like this:
    Odd of victory Bayern Munich: 1.33 
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉


4. Bonus:   Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
GOOD LUCK 😀


// 1)
for (const [goal, pl] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${pl}`);
}
// 2)
const values = Object.values(game.odds);
console.log(values);
let sum = 0;
for (const avg of values) {
  sum += avg;
}
console.log(sum / values.length);
//!!! OR sum /= values.lenght. and then console.log(sum)

// 3)

const entries = Object.entries(game.odds);
for (const [tm, odd] of entries) {
  game[tm]
    ? console.log(`Odd of victory ${game[tm]}: ${odd}`)
    : console.log(`Odd of draw: ${odd}`);
}
// his logic better: (he dont have REPEATS)
for (const [tm, odd] of entries) {
  const teamStr = tm === 'x' ? 'draw' : `victory ${game[tm]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
// 4)
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);



// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
// 2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
// 3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card']
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2)
gameEvents.delete(64);
// 3)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// 4)
for (const [a, b] of gameEvents) {
  const half = a <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${a}: ${b}`);
};


/////////////////////////////////////////

Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs): underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// const input = document.querySelector('textarea').value;
document.querySelector('button').addEventListener('click', function () {
  const guess = document.querySelector('textarea').value;
  const arr = guess.split('\n');
  let o = 1;

  // his desicion :
  for (const [i, nm] of arr.entries()) {
    const [first, second] = nm.toLowerCase().trim().split('_');
    const third = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${third.padEnd(20)}${'✅'.repeat(i + 1)}`);

    // my desicion after look on his first line :  !!! i forgot about .ENTRIES()
    //for (const nm of arr) {
    // const [first, second] = nm.toLowerCase().trim().split('_');
    // console.log(
    //   (first + second[0].toUpperCase() + second.slice(1)).padEnd(20, ' ') +
    //     '✅'.repeat(o++)
    // );

    // My first desicion without any hints !!! :
    //for (const nm of arr) {
    // console.log(
    //   (
    //     nm.trim().toLowerCase().slice(0, nm.indexOf('_')) +
    //     nm.slice(nm.indexOf('_') + 1)[0].toUpperCase() +
    //     nm.slice(nm.indexOf('_') + 2)
    //   )
    //     .replaceAll('_', '')
    //     .padEnd(20, ' ') + '✅'.repeat(o++)
    // );
  }
});

/
/
/
/
/
/
/
/
/
/
/
/
/
//
/
/
/
/
/


Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs): underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅

*/
