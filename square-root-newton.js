function squareRoot(number, tolerance = 0.000001) {
  if (number < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }

  if (!Number.isFinite(number)) {
    throw new Error("Input must be a finite number");
  }

  if (!Number.isFinite(tolerance) || tolerance <= 0) {
    throw new Error("Tolerance must be positive");
  }

  if (number === 0) return 0;

  let guess = number >= 1 ? number : 1;
  let previousGuess;

  do {
    previousGuess = guess;
    guess = (guess + number / guess) / 2;
  } while (Math.abs(guess - previousGuess) > tolerance);

  return guess;
}

console.log(squareRoot(25));
console.log(squareRoot(2));
console.log(squareRoot(100));