function mergeArrays(firstArray, secondArray) {

    let mergeArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        let firstNum = firstArray[i];
        let secondNum = secondArray[i]; 

        if (i % 2 === 0) {
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);
        }

        let currentResult = firstNum + secondNum;
        mergeArray.push(currentResult);
    }

    console.log(mergeArray.join(" - "));
}


mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])	//22 - 1522 - 110 - 5636 - 46
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']) // 35 - 12312333 - 10 - 77122 - 48      
