'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 15;

// document.querySelector('.score').textContent = 11;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 17;

const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number! ';
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
    } else if(guess < secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent = 'too low !'; 
        score --;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game !';
            document.querySelector('.score').textContent = 0;
        };
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too high !';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game !';
            document.querySelector('.score').textContent = 0;
        }
    }
});

console.log(secretNumber);