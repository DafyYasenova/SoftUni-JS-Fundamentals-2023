function numbers(input) {
    let allNumbers = input.split(" ");
    let sumOfAllNumbers = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i] = Number(allNumbers[i]);
        sumOfAllNumbers += allNumbers[i];

    }
    let average = sumOfAllNumbers / allNumbers.length;
    let newArr = [];
    for (let el of allNumbers) {
        if (el > average) {
            newArr.push(el);
        }
    }
    newArr.sort((a, b) => b - a);
    let buff = "";
    for (let i = 0; i < 5; i++) {
        if (newArr[i]) {
            buff += newArr[i] + ' '
        }
    }

    if (buff.length === 0) {
        console.log("No");
    } else {
        console.log(buff);
    }
}
numbers('10 20 30 40 50') //50 40
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51') //-1 -2 -3
numbers('1') //No
numbers('-1 -2 -3 -4 -5 -6') //-1 -2 -3