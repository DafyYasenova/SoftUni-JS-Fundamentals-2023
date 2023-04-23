function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}
amazingNumbers(1233)
amazingNumbers(999)

//2 way:
function amazingNumbers(num) {
    let textNum = num.toString();
    let sum = 0;
    let isAmazing = false;

    for (let i = 0; i < textNum.length; i++) {
        let currentNum = Number(textNum[i]);
        sum += currentNum;
    }

    let sumText = sum.toString();
    for (let i = 0; i < sumText.length; i++) {
        let currentDigit = sumText[i];
        if (currentDigit == "9") {
            isAmazing = true;
            break;
        }
    }
    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'}`);


}
amazingNumbers(1233)
amazingNumbers(999)