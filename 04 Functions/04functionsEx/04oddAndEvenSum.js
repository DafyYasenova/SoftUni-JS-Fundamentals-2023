function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numAsString = String(number)
    for (let i = 0; i < numAsString.length; i++) {
        let numberConvert = Number(numAsString[i])
        if (numberConvert % 2 !== 0 && numberConvert !== 0 ) {
            oddSum += numberConvert;
        } else if (numberConvert % 2 === 0 || numberConvert == 0) {
            evenSum += numberConvert;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
oddAndEvenSum(1000435) //	 Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234)	// Odd sum = 54, Even sum = 22
