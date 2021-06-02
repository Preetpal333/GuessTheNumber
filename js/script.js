'use strict';
// Genration of the secret number

let secretNumber = Math.floor(Math.random() * 20) + 1;

// To check Score
let score = 20;
let highScore = 0;

// To display message of the game

let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// ********** to Check the secret number ********

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('This is not a number ,Please enter a number');
  } else if (guess === secretNumber) {
    displayMessage('Number is corerect ,You win the game');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is too high' : 'Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// ********** to click again buttonand reset the game ********

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
