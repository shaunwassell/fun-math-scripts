function collatz(n) {
    let sequence = [n];

    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }

        sequence.push(n);
    }

    return sequence;
}


for (i = 1; i <= 50; i++) {
    console.log('(' + i + ') ----------------------')
    console.log(collatz(i));
    console.log('----------------------------------')
}