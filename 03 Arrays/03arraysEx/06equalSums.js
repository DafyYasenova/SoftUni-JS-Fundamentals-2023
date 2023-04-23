function equalSums(array){
    let foundIndex = 'no';
for (let i = 0; i < array.length; i++){
    let leftSum = 0;
    let rightSum = 0;

    for(let l = 0; l < i; l++){
        leftSum += array[l];
    }
    for (let r = i +1; r < array.length; r++){
        rightSum += array[r];
    }
    if (leftSum === rightSum){
        foundIndex = i;
    }
}
console.log(foundIndex);
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])


// 2 answer:
function equalSums2(array) {
    let leftSum = 0;
    let rightSum = 0;
    let foundIndex = false;

    for (let i = 0; i < array.length; i++) {
        if (i > 0) {
            for (let j = i - 1; j >= 0; j--) {
                let currentNumber = Number(array[j]);
                leftSum += currentNumber;
            }
        }
        if (i < array.length - 1) {
            for (let k = i + 1; k <= array.length - 1; k++) {
                currentNumber = Number(array[k]);
                rightSum += currentNumber;
            }
        }
        if (leftSum === rightSum) {
            console.log(i);
            foundIndex = true;
        }
        leftSum = 0;
        rightSum = 0;
    }

    if (foundIndex === false) {
        console.log('no');
    }
}

equalSums2([1, 2, 3, 3])
equalSums2([1, 2])
equalSums2([1])
equalSums2([1, 2, 3])
equalSums2([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])