function arrayModifier(array) {
    let modifierArray = array.shift().split(' ').map(Number);

    while (array[0] != "end") {
        let commands = array;
        let currentCommands = commands.shift().split(" ");
        let command = currentCommands[0];
        let firstEl = currentCommands[1];
        let secondEl = currentCommands[2];

        if (command === "swap") {
            let newEl = modifierArray[firstEl];
            modifierArray[firstEl] = modifierArray[secondEl];
            modifierArray[secondEl] = newEl;
        } else if (command === "multiply") {
            modifierArray[firstEl] *= modifierArray[secondEl];
        } else if (command === "decrease") {
            for (let i = 0; i < modifierArray.length; i++) {
                modifierArray[i]--;
            }
        }
    }
    console.log(modifierArray.join(", "))
}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)