'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //NO INPUT
    if (!guess) {
        document.querySelector('.message').textContent = 'Please input a number! 🔢'

        //PLAYER WINS!    
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct!✔'
        document.querySelector('body').style.backgroundColor = '#60b34f';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //GUESS TOO HIGH
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!☝'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥You lose the game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#8B0000';
        }

        //GUESS TOO LOW
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!👇'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥You lose the game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#8B0000';
        }
    }


});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = NaN;
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
});


