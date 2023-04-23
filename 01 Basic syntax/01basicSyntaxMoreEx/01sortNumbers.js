function sortNumbers(num1, num2, num3) {
    let biggestNumber = 0;
    let meanNumber = 0;
    let smallestNumber = 0;

    if (num1 >= num2 && num2 >= num3) {
        biggestNumber = num1;
        meanNumber = num2;
        smallestNumber = num3;

    } else if (num1 >= num3 && num3 >= num2) {
        biggestNumber = num1;
        meanNumber = num3;
        smallestNumber = num2;

    } else if (num2 >= num3 && num3 >= num1) {
        biggestNumber = num2;
        smallestNumber = num1;
        meanNumber = num3;

    } else if (num2 >= num1 && num1 >= num3) {
        biggestNumber = num2;
        smallestNumber = num3;
        meanNumber = num1;

    } else if (num3 >= num1 && num1 >= num2) {
        biggestNumber = num3;
        smallestNumber = num2;
        meanNumber = num1;

    } else if (num3 >= num2 && num2 >= num1) {
        biggestNumber = num3;
        smallestNumber = num1;
        meanNumber = num2;
    }
    console.log(biggestNumber);
    console.log(meanNumber);
    console.log(smallestNumber);

    //2 way:
    let numbers = [num1, num2, num3];
    numbers.sort(function(a,b){return b-a});
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);


}
sortNumbers(2, 1, 3)
sortNumbers(-2, 1, 3)
sortNumbers(0, 0, 2)

