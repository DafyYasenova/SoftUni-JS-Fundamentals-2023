function digitwithWords(digit) {
    let printNum = 0;
    switch (digit) {
        case 'one': printNum = 1; break;
        case 'two': printNum = 2; break;
        case 'three': printNum = 3; break;
        case 'four': printNum = 4; break;
        case 'five': printNum = 5; break;
        case 'six': printNum = 6; break;
        case 'seven': printNum = 7; break;
        case 'eight': printNum = 8; break;
        case 'nine': printNum = 9; break;
        case 'zero': printNum = 0; break;
    }
    console.log(printNum);
}
digitwithWords('nine');
digitwithWords('two')
digitwithWords('zero')