function biggestOf3Numbers(num1, num2, num3) {
    let biggestNum = 0;
    
    if (num1 >= num2 && num1 >= num3) {
        biggestNum = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        biggestNum = num2;
    }
    else {
        biggestNum = num3;
    }
    console.log(biggestNum);
}
biggestOf3Numbers(-2, 7, 3)
biggestOf3Numbers(130, 5, 99)
biggestOf3Numbers(43, 43.2, 43.1)
biggestOf3Numbers(2, 2, 2)