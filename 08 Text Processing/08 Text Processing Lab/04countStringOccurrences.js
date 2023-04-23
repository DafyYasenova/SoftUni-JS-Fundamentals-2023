function countOccurrences(text, word) {
// решение на един ред: let counter = text.split(" ").filter(w => w === word).length;
    let words = text.split(" ");
    let counter = 0;
    for (let el of words) {
        if (el === word) {
            counter++;
        }
    }
    console.log(counter);
}
countOccurrences('This is a word and it also is a sentence', 'is') //2
countOccurrences('softuni is great place for learning new programming languages', 'softuni') //1