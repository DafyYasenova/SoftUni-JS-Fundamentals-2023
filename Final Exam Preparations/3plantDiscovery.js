function plantDiscovery(data) {
    let numPlants = Number(data.shift());
    let plantsObj = {};

    for (let i = 0; i < numPlants; i++) {

        let line = data.shift();
        let lineArray = line.split("<->");
        let namePlant = lineArray[0];
        let rarity = Number(lineArray[1]);

        plantsObj[namePlant] = {
            rarity: rarity,
            ratings: [],
        }
    }
    let line = data.shift();
    while (line !== "Exhibition") {
        let lineSplit = line.split(": ");
        let command = lineSplit[0];
        let currentLine = lineSplit[1].split(" - ");
        let namePlant = currentLine[0];
        let arg = currentLine[1];

        if (plantsObj[namePlant]) {
            if (command === "Rate") {
                let rating = Number(arg);
                plantsObj[namePlant].ratings.push(rating)

            }
            if (command === "Update") {
                let rarity = Number(arg)
                plantsObj[namePlant].rarity = rarity;
            }
            if (command === "Reset") {
                plantsObj[namePlant].ratings = [];
            }
        } else {
            console.log(`error`);
        }
        line = data.shift();
    }

    console.log(`Plants for the exhibition:`);
    for (let namePlant in plantsObj) {
        let averageRating = 0;
        let sum = 0;

        for (let rating of plantsObj[namePlant].ratings) {
            sum += rating;

        }
        averageRating = sum / plantsObj[namePlant].ratings.length;
        if (!averageRating) {
            averageRating = 0;
        }
        console.log(`- ${namePlant}; Rarity: ${plantsObj[namePlant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
/* Plants for the exhibition:
- Arnoldii; Rarity: 4; Rating: 0.00
- Woodii; Rarity: 5; Rating: 7.50
- Welwitschia; Rarity: 2; Rating: 7.00 */
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
/* Plants for the exhibition:
- Candelabra; Rarity: 10; Rating: 6.00
- Oahu; Rarity: 10; Rating: 7.00
*/