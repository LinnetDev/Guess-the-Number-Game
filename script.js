'use strict';
//secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//store scores
let score = 20;
let highscore = 0;

//message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//click event function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('😒 Oops… you forgot to enter a number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Boom! You nailed it!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#10b981';

    //higscore changing
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Whoa, too high! Try something smaller ⬇️'
          : 'Hmm… too low, aim higher ⬆️'
      );
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#af73a4ff';
    } else {
      displayMessage('Game over! Don’t worry, try again 🎯');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//button again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Ready to play? Guess the number!');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.accentColor = '#111827';
});
