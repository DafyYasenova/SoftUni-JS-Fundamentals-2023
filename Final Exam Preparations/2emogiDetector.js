function emogiDetector(input) {

    let text = input.shift();
    let pattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g;

    let thresholdSum = 1;
    let emojisCool = [];

    let patternNumber = /[0-9]/g;
    let matchNum = text.match(patternNumber);
    for (let digit of matchNum) {
        thresholdSum *= Number(digit);
    }

    let sumCharCodeAt = 0;
    let indexCharCodeAt = 0;
    let counter = 0;
    let matchesEmoji = text.matchAll(pattern);

    for (let match of matchesEmoji) {
        let emoji = match[0];
        let nameEmoji = match.groups.name;
        counter++;

        sumCharCodeAt = 0;
        for (let i = 0; i < nameEmoji.length; i++) {

            indexCharCodeAt = nameEmoji.charCodeAt(i)
            sumCharCodeAt += indexCharCodeAt;
        }
        if (sumCharCodeAt > thresholdSum) {
            emojisCool.push(emoji);
        }
    }

    console.log(`Cool threshold: ${thresholdSum}`)
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    for (let emoji of emojisCool) {
        console.log(`${emoji}`);
    }

}

emogiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
/* Cool threshold: 540
4 emojis found in the text. The cool ones are:
::Smiley::
**Tigers**
::Mooning::
*/
emogiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
// /* 	Cool threshold: 120
// 4 emojis found in the text. The cool ones are:
// ::Joy::
// **Banana**
// ::Wink::
// **Vali**
// */
emogiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
// /*Cool threshold: 17496
// 1 emojis found in the text. The cool ones are:
//  */