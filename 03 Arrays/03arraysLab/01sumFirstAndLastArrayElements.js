function sumFirstAndLastArrayElements(input) {
    let firstNumber = input[0];
    let finalNumber = input[input.length - 1];
    let sumElements = firstNumber + finalNumber;
    console.log(sumElements);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);