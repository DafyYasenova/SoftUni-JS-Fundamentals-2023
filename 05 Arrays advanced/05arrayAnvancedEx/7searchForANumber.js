function searchForANumber(fisrtArray, secondArray) {
    let elementsCount = secondArray[0];
    let removeElements = secondArray[1];
    let targetNumber = secondArray[2];

    let newArray = fisrtArray.slice(0, elementsCount);
    for (let i = 0; i < removeElements; i++) {
        newArray.shift();
    }

    let countTimes = 0;

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === targetNumber) {
            countTimes++;
        }
    }
    console.log(`Number ${targetNumber} occurs ${countTimes} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])