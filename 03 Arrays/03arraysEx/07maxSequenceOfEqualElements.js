function maxSequenceOfEqualElements(array) {
    let lognestSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let currentSequence = [];

        for (let k = i; k < array.length; k++) {
            let nextCurrentNumber = array[k];
            if (currentNumber === nextCurrentNumber) {
                currentSequence.push(currentNumber);
            } else {
                break;
            }
            if (currentSequence.length > lognestSequence.length) {
                lognestSequence = currentSequence;
            }
        }
    }
    console.log(lognestSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])	//2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
