function treasureHunt(input) {
    let treasureChest = input.shift().split("|")
    let commands = input.shift()

    while (commands !== "Yohoho!") {
        let tokens = commands.split(" ");
        let currentCommand = tokens.shift();

        switch (currentCommand) {
             case "Loot": // loot(tokens,treasureChest);
                for (let i = 0; i < tokens.length; i++) {
                    if (!treasureChest.includes(tokens[i])) {
                        treasureChest.unshift(tokens[i]);
                    }
                }
                break;

            case "Drop":  // drop(tokens,treasureChest);
                let index = Number(tokens[0]);
                if (index < 0 || index > treasureChest.length - 1) {
                    commands = input.shift();
                    continue;
                }
                let currentIndex = treasureChest.splice(index, 1);
                treasureChest.push(currentIndex);
                break;

            case "Steal": //steal(tokens,treasureChest);
                let count = Number(tokens[0]);
                let removeElements = treasureChest.splice(- count);
                console.log(removeElements.join(', '));
                break;
        }
        commands = input.shift();
    }
    if (treasureChest.length == 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let sumOfTresuarelength = 0;
        for (let i = 0; i < treasureChest.length; i++) {
            sumOfTresuarelength += treasureChest[i].length;
        }
        let averageGain = sumOfTresuarelength / treasureChest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)
    }
    function loot(tokens,treasureChest){
        for (let i = 0; i < tokens.length; i++) {
            if (!treasureChest.includes(tokens[i])) {
                treasureChest.unshift(tokens[i]);
            }else{
                continue;
            }
        }
    }
    // function drop(tokens, treasureChest){
    //     let index = Number(tokens[0]);
    //     if (index < 0 || index > treasureChest.length - 1) {
    //         commands = input.shift();
    //         return;
    //     }
    //     let currentIndex = treasureChest.splice(index, 1);
    //     treasureChest.push(currentIndex);
    // }

    // function steal(tokens, treasureChest){
    //     let count = Number(tokens[0]);
    //     let removeElements = treasureChest.splice(- count);
    //     console.log(removeElements.join(', '));
       
    // }

}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
/* Medallion, Cup, Gold
Average treasure gain: 5.40 pirate credits. */

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
/* Coal, Diamonds, Silver, Shotgun, Gold, Medals
Failed treasure hunt. */
