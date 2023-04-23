function substring(text, startIndex, count) {
    let endIndex = startIndex + count;
    let result = text.slice(startIndex, endIndex);

    console.log(result);
}
substring('ASentence', 1, 8) //	Sentence
substring('SkipWord', 4, 7) //	Word

function substring2(text, startIndex, count) {
    let endIndex = startIndex + count;
    let result = text.substring(startIndex, endIndex);

    console.log(result);
}
substring2('ASentence', 1, 8) //	Sentence
substring2('SkipWord', 4, 7) //	Word