function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

const MAX_VALUE = 10;

for (i = 1; i <= MAX_VALUE; i++) {
    console.log('(' + i + ') ----------------------')
    console.log(fibonacci(i));
}