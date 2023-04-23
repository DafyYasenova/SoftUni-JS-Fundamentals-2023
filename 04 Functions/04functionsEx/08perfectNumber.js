function perfectNumber(number) {
    let result = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            result += i
        }
    }
    if (result === number && result !== 0) {
        console.log(`We have a perfect number!`)
    } else {
        console.log(`It's not so perfect.`)
    }
}
perfectNumber(28)
perfectNumber(6)
perfectNumber(1236498)