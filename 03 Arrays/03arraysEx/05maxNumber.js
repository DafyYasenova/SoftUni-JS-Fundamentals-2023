function maxNumber(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            newArray.push(array[i]);
        }
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                if (j === array.length - 1) {
                    newArray.push(array[i]);
                }
                continue;
            } else {
                break;
            }
        }
    }
    console.log(newArray.join(' '));
}

maxNumber([1, 4, 3, 2]) //	4 3 2
maxNumber([14, 24, 3, 19, 15, 17]) //	24 19 17
maxNumber([41, 41, 34, 20]) //	41 34 20
maxNumber([27, 19, 42, 2, 13, 45, 48]) //	48

// // 2 answer:
function maxNumber2(array) {

    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNumber = array[i];

        for (let j = i + 1; j < array.length; j++) {
            if (currentNumber <= array[j]) {
                isBigger = false;
            }
        }
        if (isBigger == true) {
            resultArray.push(array[i]);
        }
    }

    console.log(resultArray.join(' '));
}
maxNumber2([1, 4, 3, 2]) //	4 3 2
maxNumber2([14, 24, 3, 19, 15, 17]) //	24 19 17
maxNumber2([41, 41, 34, 20]) //	41 34 20
maxNumber2([27, 19, 42, 2, 13, 45, 48]) //	48