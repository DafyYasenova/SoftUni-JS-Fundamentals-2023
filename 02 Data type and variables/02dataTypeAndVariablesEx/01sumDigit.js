function sumDigit(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let sumText = num[i];
        sum += Number(sumText);
    }
    console.log(sum);
}
sumDigit(245678)
sumDigit(97561)
sumDigit(543)