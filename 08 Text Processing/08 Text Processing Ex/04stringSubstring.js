function stringSubstring(word, text) {
    let lowText = text.toLowerCase().split(" ");
    let isFound = false;
    for (let el of lowText) {
        if (el === word) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language')
stringSubstring('python',
    'JavaScript is the best programming language')

// 2 way without boolean!
function stringSubstring2(word, text) {
    let lowText = text.toLowerCase().split(" ");

    for (let el of lowText) {
        if (el === word) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`)
}
stringSubstring2('javascript',
    'JavaScript is the best programming language')
stringSubstring2('python',
    'JavaScript is the best programming language')