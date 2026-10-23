function collatzSequence(n) {
    let sequence = [n];

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }

        sequence.push(n);
    }

    return sequence;
}

const MAX_VALUE = 50;

for (i = 1; i <= MAX_VALUE; i++) {
    console.log('(' + i + ') ----------------------')
    console.log(collatzSequence(i));
}