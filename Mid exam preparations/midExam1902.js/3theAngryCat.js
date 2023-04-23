function theAngryCat(priceRatings, entryPoint, typeOfItems) {
 
    let entryPointItem = priceRatings[entryPoint];

    let leftArr = priceRatings.slice(0, entryPoint);
    let rightArr = priceRatings.slice(entryPoint);

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < leftArr.length; i++) {
        if (typeOfItems === "cheap") {
            if (leftArr[i] < entryPointItem) {
                leftSum += leftArr[i];
            }
        } else {
            if (leftArr[i] >= entryPointItem) {
                leftSum += leftArr[i];
            }
        }
        if (typeOfItems === "expensive") {
            if (leftArr[i] < entryPointItem) {
                leftSum += leftArr[i];
            }
        } else {
            if (leftArr[i] >= entryPointItem) {
                leftSum += leftArr[i];
            }
        }
    }

    for (let i = 0; i < rightArr.length; i++) {
        if (typeOfItems === "cheap") {
            if (rightArr[i] < entryPointItem) {
                rightSum += rightArr[i];
            }
        } else {
            if (rightArr[i] >= entryPointItem) {
                rightSum += rightArr[i];
            }
        }
    }

    if (leftSum >= rightSum) {
        console.log("Left - " + leftSum);
    } else {
        console.log("Right - " + rightSum);
    }

}
theAngryCat([1, 5, 1],
    1,
    "cheap")
    theAngryCat([5, 10, 12, 5, 4, 20],
        3,
        "cheap")
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
            