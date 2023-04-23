function lastKNumbersSequence(length, kNum) {
    let sequence = [1];

    for (let i = 1; i < length; i++) {
        let index = Math.max(sequence.length - kNum, 0)

        let lastThreeNum = sequence.slice(index);
        let sumFromThreeNum = 0;
        for (const el of lastThreeNum) {
            sumFromThreeNum += el;
        }
        sequence.push(sumFromThreeNum);
    }
    console.log(sequence.join(" "))
}

lastKNumbersSequence(6, 3) // 1 1 2 4 7 13
lastKNumbersSequence(8, 2) // 1 1 2 3 5 8 13 21
