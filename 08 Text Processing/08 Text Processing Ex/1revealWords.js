function revealWords(words, text) {
    let wordsArr = words.split(", ");
    let textArr = text.split(" ");
    for (let word of wordsArr) {
        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i].includes("*")) {
                if (word.length === textArr[i].length) {
                    textArr[i] = word;
                }
            }
        }
    }
    console.log(textArr.join(" "));
}

revealWords('great',
    'softuni is ***** place for learning new programming languages')
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')

// 2 way with for Of:

function revealWords2(words, text) {
    let wordsArr = words.split(", ");
    let textArr = text.split(" ");
    for (let word of wordsArr) {
        for (let el of textArr) {
            let index = textArr.indexOf(el);
            if (el.startsWith("*") && word.length === el.length) { // el.startsWith === el. includes!
                textArr[index] = word;
            }
        }
    }
    console.log(textArr.join(" "));
}
revealWords2('great',
    'softuni is ***** place for learning new programming languages')
//revealWords2('great, learning',
  //  'softuni is ***** place for ******** new programming languages')

// 3 forEach:
function revealWords3(words, text) {
    let wordsArr = words.split(", ");
    text = ` ${text} `;
    wordsArr.forEach(word => {
           let match = ` ${"*".repeat(word.length)} `;
           text = text.replace(match, ` ${word} `);
        });
    
    console.log(text.trim());
}
revealWords3('great',
    'softuni is ***** place for learning new programming languages')
//revealWords3('great, learning',