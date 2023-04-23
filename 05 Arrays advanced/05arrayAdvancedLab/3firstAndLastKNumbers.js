function firstAndLastKNumbers(numbers) {
    
    let kElement = numbers.shift();
    let sumFirstNum = numbers.slice(0, kElement);
    let sumLastNum = numbers.slice(numbers.length - kElement);

    console.log(sumFirstNum.join(" "));
    console.log(sumLastNum.join(" "));

}
firstAndLastKNumbers([2, 7, 8, 9])
firstAndLastKNumbers([3, 6, 7, 8, 9])