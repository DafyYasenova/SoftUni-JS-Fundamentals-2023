function censoredWords(text, word) {

    let result = text;
    while (result.includes(word)) {
        result = result.replace(word, "*".repeat(word.length));
        //ако искаме да оставим първата буква, а останалите да заместим с *:
       // result = result.replace(word, word[0] + "*".repeat(word.length -1));
    }
    console.log(result);
}
censoredWords('A small sentence with some words', 'small')
//	A ***** sentence with some words
censoredWords('Find the hidden word', 'hidden')
// Find the ****** word
