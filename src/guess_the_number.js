export default function guessTheNumber() {
  let answer = Math.floor(Math.random() * (100 - 1)) + 1
  let guess = prompt('Guess a number between 1 and 100!')

  while (guess != answer) {
     if (guess < answer) {
      guess = prompt('Your guess is too low, guess higher!')
    } else if (guess > answer) {
      guess = prompt('Your guess is too high, guess lower!')
    } else if (guess.toUpperCase() == 'EXIT') {
      return
    }
  }

  alert('You win! The number was ' + answer)
}

guessTheNumber()
