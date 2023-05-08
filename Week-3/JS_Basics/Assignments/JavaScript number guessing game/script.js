// Your solution goes here
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guesses = 0;
  while (guesses < totalGuesses) {
    let guess = prompt(
      guesses === 0
        ? "Enter a number between 1 and 100."
        : guess < numToGuess
        ? guess + " is too small. Guess a larger number."
        : guess + " is too large. Guess a smaller number."
    );
    if (guess === null) {
      return 0;
    }
    if (!isNaN(guess) && guess !== "") {
      guesses++;
      guess = parseInt(guess);
      if (guess === numToGuess) {
        return guesses;
      }
    } else {
      alert("Please enter a number.");
    }
  }
  return 0;
}
