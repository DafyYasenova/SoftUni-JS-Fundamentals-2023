function wordOccurrences(array) {
    let map = new Map();
    let counter = 1;
    for (let word of array) {
        if (!map.has(word)) {
            map.set(word, counter)
        } else {
            let currCount = map.get(word)
            let newCount = currCount + 1;
            map.set(word, newCount)
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for (let line of sorted) {
        console.log(`${line[0]} -> ${line[1]} times`)
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
/* sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times */
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
/* dog -> 2 times
bye -> 1 times
city -> 1 times
dad -> 1 times
boys -> 1 times
ginger -> 1 times */

//2 way with OBJECT:
function wordOccurrences1(array) {
    let words = {};
    for (let word of array) {
        if (!words[word]) {
            words[word] = 0;
        }
        words[word]++;
    }
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`)
    }
}
wordOccurrences1(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
/* sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times */
wordOccurrences1(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
/* dog -> 2 times
bye -> 1 times
city -> 1 times
dad -> 1 times
boys -> 1 times
ginger -> 1 times */