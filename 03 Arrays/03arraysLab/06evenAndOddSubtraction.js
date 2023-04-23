function evenAndOddSubtraction(array) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);

        if (array[i] % 2 === 0) {
            sumEven += array[i];
        } else {
            sumOdd += array[i];
        }
    }
    let totalSum = sumEven - sumOdd;
    console.log(totalSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3, 5, 7, 9])
evenAndOddSubtraction([2, 4, 6, 8, 10])