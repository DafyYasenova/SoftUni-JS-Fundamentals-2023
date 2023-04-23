function hardWord(array) {
    let words = array.pop() //.sort((a, b) => b.length - a.length);

    let newString = array.toString();
    let wordOfString = array.toString().split(" ");

    //    for (let word of words) - if use sort, for word of word is first!
        for (let emptyWord of wordOfString) {
            for (let word of words) {
            if (emptyWord.startsWith("_") && emptyWord.endsWith("_")) {
                if (emptyWord.length === word.length) {
                    newString = newString.replace(emptyWord, word);
                }
            }
            if (emptyWord.startsWith("_") && !emptyWord.endsWith("_")) {
                let hole = emptyWord.slice(0, emptyWord.length - 1)
                if (hole.length === word.length) {
                    newString = newString.replace(hole, word);
                }
            }
        }
    }
    console.log(newString);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])