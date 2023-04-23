function englishNameOfTheLastDigit(number) {

    if (number % 10 === 1) {
        console.log("one");
    } else if (number % 10 === 2) {
        console.log("two");
    } else if (number % 10 === 3) {
        console.log("three");
    } else if (number % 10 === 4) {
        console.log("four");
    } else if (number % 10 === 5) {
        console.log("five");
    } else if (number % 10 === 6) {
        console.log("six");
    } else if (number % 10 === 7) {
        console.log("seven");
    } else if (number % 10 === 8) {
        console.log("eight");
    } else if (number % 10 === 9) {
        console.log("nine");
    } else if (number % 10 === 0) {
        console.log("zero")
    }
}


englishNameOfTheLastDigit(512)
englishNameOfTheLastDigit(1)
englishNameOfTheLastDigit(1643)