function mirrorWords(input) {
    let inputLine = input[0];

    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let mirrorWords = [];
    const matchEl = [...inputLine.matchAll(pattern)];
    // слага в масива всяка двойка думи!

    for (let match of matchEl) {
        let firstWord = match[2];
        let secondWord = match[3];
        let reverseWord = secondWord.split("").reverse().join("");
        if (firstWord === reverseWord) {
            mirrorWords.push(firstWord + " <=> " + secondWord);
        }
    }

    if (matchEl.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${matchEl.length} word pairs found!`)
    }
        if (mirrorWords.length === 0) {
            console.log("No mirror words!");
        } else {
            console.log("The mirror words are:");
            console.log(mirrorWords.join(", "));
        }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])
/* 5 word pairs found!
The mirror words are:
Part <=> traP, leveL <=> Level, sAw <=> wAs
*/
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
/*2 word pairs found!
No mirror words!
 */
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])
/* No word pairs found!
No mirror words!
*/