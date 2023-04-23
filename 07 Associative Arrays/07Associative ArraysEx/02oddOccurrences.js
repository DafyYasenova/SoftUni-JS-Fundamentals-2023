function oddOccurrences(words) {
    let object = {};
    let allWords = words.split(" ")
        .map(w => w.toLowerCase()); 

    for (let word of allWords) {
        object[word] = 0;
    }
    for (let word of allWords) {
        if (object.hasOwnProperty(word)) {
            object[word]++;
        }
    }

    let currentValue = Object.entries(object).sort((a,b)=> b[1]- a[1]);
    let currWord = '';
    for (let [word, value] of currentValue) {
        if (value % 2 !== 0) {
            currWord += word + " ";
        }
    }
    console.log(currWord);
    
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')

