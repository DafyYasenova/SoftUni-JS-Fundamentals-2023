function sumEvenNumbers(array) {
    let sumEven = 0;
    
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);

        if (array[i] % 2 === 0) {
            sumEven += array[i];
        }
    }
    console.log(sumEven)
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
sumEvenNumbers(['3', '5', '7', '9'])
sumEvenNumbers(['2', '4', '6', '8', '10'])
