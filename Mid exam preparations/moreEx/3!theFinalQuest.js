function theFinalQuest(input) {
    let array = input.filter(x => x !== "");
    let realMessage = array.shift().split(" ");

    let tokens = array.shift();
    while (tokens !== "Stop") {
        tokens = tokens.split(' ');
        let command = tokens[0];

        if (command === "Delete") {
            let index = Number(tokens[1]);
            if (index <= realMessage.length - 1) {
                realMessage.splice(index + 1, 1);
            }

        } else if (command === "Swap") {
            if (realMessage.includes(tokens[1]) >= 0 && realMessage.includes(tokens[2]) >= 0) {
                let firstCount = tokens[1];
                let foundIndexOne = realMessage.indexOf(tokens[1]);
                let foundIndexTwo = realMessage.indexOf(tokens[2]);
                realMessage[foundIndexOne] = tokens[2];
                realMessage[foundIndexTwo] = firstCount;
            }
        } else if (command === "Put") {
            let word = tokens[1];
            let currIndex = Number(tokens[2]);
            if (currIndex <= realMessage.length - 1) {
                realMessage.splice(currIndex - 1, 0, word);
            }

        } else if (command === "Sort") {
            realMessage = realMessage.sort((a, b) => b.localeCompare(a));
        } else if (command === "Replace") {
                let foundIndex = realMessage.indexOf(tokens[2]);
                if (foundIndex !== -1) {
                realMessage.splice(foundIndex, 1, tokens[1]);
            }
        }
        tokens = array.shift();
    }
console.log(realMessage.join(" "))
}

theFinalQuest(["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"])
// Congratulations! You made it through the last challenge!
theFinalQuest(["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"])
// This is the final quest!