function condenseArrayToNumber(nums) {
    let condensedNumber = nums;
    while (condensedNumber.length > 1) {
        let newArray = [];

        for (let i = 0; i < condensedNumber.length - 1; i++) {
            let firstNumber = condensedNumber[i]
            let secondNumber = condensedNumber[i + 1];

            newArray.push(firstNumber + secondNumber);
        }
        condensedNumber = newArray;
    }
    console.log(condensedNumber[0]);
}

condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])