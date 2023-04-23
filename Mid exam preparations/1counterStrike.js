function counterStrike(input) {
    let initialEnergy = Number(input.shift())
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === "End of battle") {
            console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`)
            break;
        } else {
            command = Number(command);
        }
        if (initialEnergy - command < 0) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`);
            break;
        }
        initialEnergy -= command;
        count++;
        if (count % 3 === 0) {
            initialEnergy += count;
        }
    }
}
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]))

counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]))