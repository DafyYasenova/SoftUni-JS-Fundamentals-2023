function processOddNumbers(numbers) {
    let oddNum = numbers.filter((num, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse()

    console.log(oddNum.join(' '))

}
processOddNumbers([10, 15, 20, 25]) //50 30 
processOddNumbers([3, 0, 10, 4, 7, 3]) //6 8 0 