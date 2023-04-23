function addAndSubstract(array) {

    let newArray = [];
    let sumArray = 0;
    let sumNewArray = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        sumArray += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        newArray[i] = currentNumber;
        sumNewArray += currentNumber;
    }
    console.log(newArray);
    console.log(sumArray);
    console.log(sumNewArray);

}
addAndSubstract([5, 15, 23, 56, 35]) //[5, 14, 21, 59, 31] 
                                    //134
                                    //130
addAndSubstract([-5, 11, 3, 0, 2])
