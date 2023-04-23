function sumFisrtAndLast(array) {

    let firstNum = Number(array.shift());
    let lastNum = Number(array.pop());
    let sumFisrtAndLast = firstNum + lastNum;
    console.log(sumFisrtAndLast);

}
sumFisrtAndLast(['20', '30', '40'])
sumFisrtAndLast(['5', '10'])