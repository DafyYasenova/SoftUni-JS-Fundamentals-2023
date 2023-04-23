function sumOfOddNumbers(n) {
    let totalSum = 0;
    for (let i = 1; i <= n * 2; i++) {
        if (i % 2 !== 0) {
            console.log(i)
            totalSum += i;
        }
    }
    console.log(`Sum: ${totalSum}`);
}
sumOfOddNumbers(3)