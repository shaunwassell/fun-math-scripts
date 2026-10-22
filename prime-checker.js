function isPrime(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(12));
