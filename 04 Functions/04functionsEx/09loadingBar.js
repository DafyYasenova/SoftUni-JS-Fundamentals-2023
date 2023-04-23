function loadingBar(number) {
    let array = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".",]

    let currrentNumber = number / 10;
    let repeatCount = ("%".repeat(currrentNumber));
    array.splice(0, currrentNumber, repeatCount);

    if (number === 100) {
        console.log(`100% Complete!`);
        console.log(`[${array.join('')}]`);
    } else {
        console.log(`${number}% [${array.join('')}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30) //	30% [%%%.......] Still loading...
loadingBar(100) //100% Complete! [%%%%%%%%%%]