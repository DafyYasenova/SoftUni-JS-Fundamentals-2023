function manOWar(input) {
    let pirateShip = input.shift().split(">").map(x => Number(x));
    let warShip = input.shift().split(">").map(x => Number(x));
    let maxHealthCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ");
        let command = commands[0];
        let value = commands.splice(1).map(x => Number(x));
        
         switch (command) {
            case "Fire": fire(warShip, value[0], value[1]); break;
            case "Defend": defend(pirateShip, value[0], value[1], value[2]); break;
            case "Repair": repair(pirateShip, value[0], value[1], maxHealthCapacity); break;
            case "Status": status(pirateShip, maxHealthCapacity); break;
            case "Retire": {
                console.log(`Pirate ship status: ${pirateShip.reduce((a, c) => a + c, 0)}`);
                console.log(`Warship status: ${warShip.reduce((a, c) => a + c, 0)}`);
                break;
            }
        }
        if (isShipIsDead(warShip)) {
            console.log(`You won! The enemy ship has sunken.`);
            return;
        }
        if (isShipIsDead(pirateShip)) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
        }
    }

    function isShipIsDead(ship) {
        let deadList = ship.filter(x => x <= 0);
        return deadList.length > 0;
    }

    function fire(warShip, index, damage) {
        if (index >= 0 && index < warShip.length) {
            warShip[index] -= damage;
        }
    }
    function defend(pirateShip, startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
            }
        }
    }
    function repair(ship, index, health, maxHealthCapacity) {
        if (index >= 0 && index < ship.length) {
            let missingHealth = maxHealthCapacity - ship[index];
            ship[index] += Math.min(missingHealth, health)
        }
    }
    function status(ship, maxHealthCapacity) {
        let damageList = ship.filter(x => x < (maxHealthCapacity * 0.20));
        console.log(`${damageList.length} sections need repair.`)
    }
}
manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]))
/* 2 sections need repair.
Pirate ship status: 135
Warship status: 205 */

manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]))
/*	3 sections need repair.
You lost! The pirate ship has sunken. */