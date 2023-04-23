function bombNumbers(array, bombs) {
    let bombsNum = bombs[0];
    let indexBombs = bombs[1];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === bombsNum) {
            let foundBombIndex = array.indexOf(bombsNum)
            // array.splice(foundBombIndex - indexBombs, indexBombs * 2 + 1);
            let startIndex = foundBombIndex - indexBombs;
            let detonatedIndex = indexBombs * 2 + 1;
            while (startIndex < 0) {
                startIndex++;
                detonatedIndex--;
            }
            array.splice(startIndex, detonatedIndex);
            i--;
        }
    }
    let sum = 0;
    for (let el of array) {
        sum += el
    }
    console.log(sum)

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3])