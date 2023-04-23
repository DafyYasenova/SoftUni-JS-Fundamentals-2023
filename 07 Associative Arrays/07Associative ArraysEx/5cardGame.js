function cardGame(input) {
    let cardPower = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    let cardType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    let playersList = new Map();

    for (let line of input) {
        let [playerName, cards] = line.split(": ");

        if (!playersList.has(playerName)) {
            playersList.set(playerName, new Set());
        }
        let cardsArray = cards.split(", ");
        for (let card of cardsArray) {
            playersList.get(playerName).add(card);
        }
    }
    
    for (let playerInfo of Array.from(playersList)) {
        let sum = 0;
        for (let card of Array.from(playerInfo[1])) {
            let cardInfo = card.split("");
            let powerAsString = cardInfo.splice(0, cardInfo.length - 1).join("");
            let typeCardAsString =  cardInfo[cardInfo.length - 1];
            let power = cardPower[powerAsString];
            let type = cardType[typeCardAsString];
            sum += power * type;
        } 
        console.log(playerInfo[0] + ": " + sum);
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])
/* Peter: 167
Tomas: 175
Andrea: 197 */

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'])
/* John: 167
Slav: 175
Alex: 115
Thomas: 125 */