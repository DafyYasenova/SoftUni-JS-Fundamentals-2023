function passwordValidator(password) {
    let hasValidLength = passwordValidChar(password);
    let hasValidSpecialChar = validateNonSpecialChar(password);
    let hasValidDigit = checkForTwoNum(password);
    printResult(hasValidLength, hasValidSpecialChar, hasValidDigit);

    // "Password must be between 6 and 10 characters"
    function passwordValidChar(password) {
        return password.length >= 6 && password.length <= 10
    }
    
    // "Password must consist only of letters and digits"
    function validateNonSpecialChar(text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isLowerCase = checkCharForLowerCase(num);
            let isUpperCase = checkCharForUpperCase(num);
            let isNumber = checkForNumber(num);
            if (!isLowerCase && !isUpperCase && !isNumber) {
                return false;
            }
        }
        return true;
    }

    function checkForNumber(num) {
        return num >= 48 && num <= 57;
    }

    function checkCharForUpperCase(num) {
        return num >= 65 && num <= 90;
    }

    function checkCharForLowerCase(num) {
        return num >= 97 && num <= 122;
    }

    //Password must have at least 2 digits:
    function checkForTwoNum(password) {
        let counter = 0;
        for (let el of password) {
            let isNumber = checkForNumber(el.charCodeAt(0));
            if (isNumber) {
                counter++
            }
        }
        return counter >= 2;
    }

    // print result:

    function printResult(validLength, validSymbol, validDigit) {
        if (!validLength) {
            console.log(`Password must be between 6 and 10 characters`)
        }
        if (!validSymbol) {
            console.log(`Password must consist only of letters and digits`)
        }
        if (!validDigit) {
            console.log(`Password must have at least 2 digits`)
        }
        if (validLength && validSymbol && validDigit) {
            console.log(`Password is valid`)
        }
    }
}

passwordValidator('logIn')	//Password must be between 6 and 10 characters
//Password must have at least 2 digits
passwordValidator('MyPass123') //	Password is valid
passwordValidator('Pa$s$s') //	Password must consist only of letters and digits
                            // Password must have at least 2 digits
