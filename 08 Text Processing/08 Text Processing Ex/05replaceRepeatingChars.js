function replaceRepeatingChars(letters) {

    let result = '';
    let lastIndex = '';
    for (let i = 0; i < letters.length; i++) {
        if (lastIndex !== letters[i]) {
            result += letters[i];
            lastIndex = letters[i];
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')//	abcdedsa
replaceRepeatingChars('qqqwerqwecccwd') //	qwerqwecwd