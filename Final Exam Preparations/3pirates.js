function pirates(data) {
    let currentLine = data.shift();
    let townObj = {};

    while (currentLine !== "Sail") {
        let [town, population, gold] = currentLine.split("||");
        if (!townObj.hasOwnProperty(town)) {
            townObj[town] = {
                population: Number(population),
                gold: Number(gold),
            }
        } else {
            townObj[town].population += Number(population);
            townObj[town].gold += Number(gold);
        }
        currentLine = data.shift();
        if (currentLine === "Sail") {
            currentLine = data.shift();
            break;
        }
    }

    while (currentLine !== "End") {
        currentLine = currentLine.split("=>");
        let command = currentLine[0];
        let town = currentLine[1];
        if (command === "Plunder") {
            let population = Number(currentLine[2]);
            let gold = Number(currentLine[3]);

            townObj[town].population -= population;
            townObj[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if (townObj[town].population === 0 || townObj[town].gold === 0) {
                console.log(`${town} has been wiped off the map!`);
                delete townObj[town];
            }

        }
        if (command === "Prosper") {
            let gold = Number(currentLine[2]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                townObj[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${townObj[town].gold} gold.`);
            }

        }
        currentLine = data.shift();
    }
    if (currentLine === "End") {

        let countTown = 0;
        for (let town in townObj) {
            countTown++;
        }
        if (countTown > 0) {
            console.log(`Ahoy, Captain! There are ${countTown} wealthy settlements to go to:`);
        } else {
            console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
        }
        for (let town in townObj) {
            console.log(`${town} -> Population: ${townObj[town].population} citizens, Gold: ${townObj[town].gold} kg`)
        }
    }
}

// https://pastebin.com/VYqPgpNr
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
/* Tortuga plundered! 380 gold stolen, 75000 citizens killed.
180 gold added to the city treasury. Santo Domingo now has 810 gold.
Ahoy, Captain! There are 3 wealthy settlements to go to:
Tortuga -> Population: 270000 citizens, Gold: 870 kg
Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
Havana -> Population: 410000 citizens, Gold: 1100 kg */
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
/* Gold added cannot be a negative number!
Nassau plundered! 750 gold stolen, 94000 citizens killed.
Nassau plundered! 150 gold stolen, 1000 citizens killed.
Nassau has been wiped off the map!
Campeche plundered! 690 gold stolen, 150000 citizens killed.
Campeche has been wiped off the map!
Ahoy, Captain! There are 2 wealthy settlements to go to:
San Juan -> Population: 930000 citizens, Gold: 1250 kg
Port Royal -> Population: 420000 citizens, Gold: 3000 kg
*/
