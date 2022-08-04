'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

let bgColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //NO INPUT
    if (!guess) {
        displayMessage('Please input a number! 🔢');


    } else if (guess === secretNumber) {
        displayMessage('Correct!✔');
        bgColor('#60b34f');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        guess > secretNumber ? displayMessage('Too high!☝') : displayMessage('Too Low!👇');
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥You lose the game!');
            document.querySelector('.score').textContent = 0;
            bgColor('#8B0000');
        }

    }
});


//RESET or AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
    bgColor('#222');
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = NaN;
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
});
