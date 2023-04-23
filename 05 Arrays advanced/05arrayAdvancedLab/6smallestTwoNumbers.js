function smallestTwoNumbers(input) {
    let sortSmallest = input.sort((a, b) => a - b);

    let firstTwoSmallestNum = sortSmallest.slice(0, 2);
    console.log(firstTwoSmallestNum.join(' '))

}
smallestTwoNumbers([30, 15, 50, 5]) //	5 15		
smallestTwoNumbers([3, 0, 10, 4, 7, 3]) //	0 3