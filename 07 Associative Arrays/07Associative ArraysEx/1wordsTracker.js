function wordsTracker(input) {
    let words = input.shift().split(" ");

    let object = {};
    for (let word of words) {
        object[word] = 0;
    }

    for (let word of input) {
        if (object.hasOwnProperty(word)) {
            object[word] += 1;
        }
    }
    let entriesWord = Object.entries(object).sort((a, b) => b[1] - a[1]);
    for (let entry of entriesWord) {
        console.log(`${entry[0]} - ${entry[1]}`)
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words', 'this',
    'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
/* this - 3
sentence - 2 */
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the',
    'And', 'finally', 'the', 'the', 'sentence'])
/* the – 3
is - 1 */