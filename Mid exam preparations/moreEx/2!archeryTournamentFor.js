function archeryTournament(input) {
    let targetLine = input.shift().split("|").map(Number);
    let newArr = input.slice();
    let counterPoints = 0

    for (let i = 0; i < newArr.length; i++) {
        if (input[0] === "Game over") {
            break;
        }
        let tokens = input.shift().split(" ");
        let command = tokens[0]

        if (command === "Shoot") {

            let setLine = tokens[1].split("@")
            let direction = setLine[0];
            let firstIndex = Number(setLine[1]);
            let secondIndex = Number(setLine[2]);
            if (direction === "Left") {
                if (firstIndex >= 0 && firstIndex < targetLine.length && secondIndex >= 0 && secondIndex < targetLine.length) {
                    let foundIndex = firstIndex + secondIndex + 1;
                    targetLine.includes(foundIndex)
                    targetLine.splice(foundIndex, 1, (targetLine[foundIndex] - 5))
                    counterPoints += 5; //??
                }
            }
            if (direction === "Right") {
                // ??
                if (firstIndex >= 0 && firstIndex < targetLine.length && secondIndex >= 0 && secondIndex < targetLine.length) {
                    let rightIndex = firstIndex + 1
                    targetLine.splice(rightIndex, 1, (targetLine[foundIndex] - 5))
                    counterPoints += 5;
                }
            }
        }
        if (command === "Reverse") {
            targetLine.reverse()
        }
    }

    console.log(targetLine.join(" - "));
    console.log(`Iskren finished the archery tournament with ${counterPoints} points!`);
}
archeryTournament(["10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@4@5",
    "Shoot Right@6@5",
    "Reverse",
    "Game over"])

/* 5 - 5 - 10 - 10 - 10
Iskren finished the archery tournament with 10 points! */

archeryTournament(["20|30|40|50|60",
    "Shoot Left@0@12",
    "Shoot Right@4@15",
    "Shoot Left@6@5",
    "Reverse",
    "Game over"])
/* 55 - 45 - 40 - 30 - 20
Iskren finished the archery tournament with 10 points! */
