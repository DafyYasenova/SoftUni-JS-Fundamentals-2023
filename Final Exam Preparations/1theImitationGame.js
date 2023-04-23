function theImitationGame(input) {
    let startWord = input.shift();
    let commands = input.shift();

    while (commands !== 'Decode') {
        commands = commands.split("|");
        if (commands[0] === 'ChangeAll') {
            let removeChar = commands[1];
            let replaceChar = commands[2];
            for (let char of startWord) {
                while (startWord.includes(removeChar)) {
                    startWord = startWord.replace(removeChar, replaceChar);
                }
            }
        } else if (commands[0] === 'Insert') {
            let index = Number(commands[1]);
            let value = commands[2];
            startWord = startWord.substring(0, index) + value + startWord.substring(index);


        } else if (commands[0] === "Move") {
            let moveIndex = Number(commands[1]);
            for (let i = 0; i < moveIndex; i++) {
                let firstChar = startWord.substring(0, 1);
                let lastLeters = startWord.substring(1);
                startWord = lastLeters + firstChar;
            }
        }
        commands = input.shift();
    }
    if (commands === 'Decode') {
        console.log(`The decrypted message is: ${startWord}`);
    }
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])
/* The decrypted message is: Hello */
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',])
/* The decrypted message is: howareyou? */
theImitationGame(["aaaaaaaaaaaaaaaa",
    "ChangeAll|a|b",
    "Insert|0|abc",
    "Move|3",
    "Decode"])
/* The decrypted message is: bbbbbbbbbbbbbbbbabc */
