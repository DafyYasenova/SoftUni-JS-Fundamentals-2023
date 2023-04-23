function factorialDivision(numA, numB) {
    let firstFactorialNum = calcFactorial(numA);
    let secFactorialNum = calcFactorial(numB);

    console.log((firstFactorialNum / secFactorialNum).toFixed(2));

    function calcFactorial(num) {
        let result = 1;
        for (let i = num; i > 1; i -= 2) {
            result *= i * (i - 1);
        }
        return result;
    }
}
factorialDivision(5, 2)
factorialDivision(6, 2)