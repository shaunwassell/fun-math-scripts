function isPrime(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

MAX_VALUE = 100;
let primes = []

for (i = 1; i <= MAX_VALUE; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

console.log(primes);