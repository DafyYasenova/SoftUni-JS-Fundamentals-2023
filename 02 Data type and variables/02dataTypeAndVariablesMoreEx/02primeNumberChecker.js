function primeNumberChecker(num) {
    let isPrime = true;
    for (let i = 2; i <= (num - 1); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime)
}
primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)