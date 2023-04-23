function heroesOfCodeAndLogic(data) {
    let currNumber = Number(data.shift());
    let heroesObj = {};
    for (let i = 0; i < currNumber; i++) {

        let line = data.shift();
        let lineArray = line.split(" ");
        let nameGamer = lineArray[0];
        let hP = Number(lineArray[1]);
        let mP = Number(lineArray[2]);

        heroesObj[nameGamer] = {
            hP: hP,
            mP: mP,
        }
    }
    let line = data.shift();
    while (line !== "End") {
        line = line.split(" - ");
        let command = line[0];
        let nameGamer = line[1];

        if (command === "CastSpell") {
            let neededMp = Number(line[2]);
            let spellName = line[3];
            let mP = heroesObj[nameGamer].mP;
            if (mP >= neededMp) {
                let mP = heroesObj[nameGamer].mP -= neededMp;
                console.log(`${nameGamer} has successfully cast ${spellName} and now has ${mP} MP!`);
            } else {
                console.log(`${nameGamer} does not have enough MP to cast ${spellName}!`);
            }
        }

        if (command === "TakeDamage") {
            let damage = Number(line[2]);
            let attacker = line[3];
            let hP = heroesObj[nameGamer].hP -= damage;
            if (hP > 0) {
                console.log(`${nameGamer} was hit for ${damage} HP by ${attacker} and now has ${hP} HP left!`);
            } else {
                console.log(`${nameGamer} has been killed by ${attacker}!`);
                delete heroesObj[nameGamer];
            }
        }

        if (command === "Recharge") {
            let amount = Number(line[2]);
            let mP = heroesObj[nameGamer].mP;

            if (amount + mP <= 200) {
                heroesObj[nameGamer].mP += amount;
                console.log(`${nameGamer} recharged for ${amount} MP!`);
            } else {
                let missingHealth = 200 - mP;
                let leftHealth = Math.min(missingHealth, amount);
                heroesObj[nameGamer].mP += leftHealth;
                console.log(`${nameGamer} recharged for ${leftHealth} MP!`)
            }
        }
        if (command === "Heal") {
            let amount = Number(line[2]);
            let hP = heroesObj[nameGamer].hP;

            if (amount + hP <= 100) {
                heroesObj[nameGamer].hP += amount;
                console.log(`${nameGamer} healed for ${amount} HP!`)
            } else {
                let missingHealth = 100 - hP;
                let leftHealth = Math.min(missingHealth, amount);
                heroesObj[nameGamer].hP += leftHealth;
                console.log(`${nameGamer} healed for ${leftHealth} HP!`)
            }
        }
        line = data.shift();
    }
    for (let nameGamer in heroesObj) {
        console.log(`${nameGamer}`);
        console.log(`  HP: ${heroesObj[nameGamer].hP}`);
        console.log(`  MP: ${heroesObj[nameGamer].mP}`);
    }
}

heroesOfCodeAndLogic(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]) 
/* Solmyr healed for 10 HP!
Solmyr recharged for 50 MP!
Kyrre was hit for 66 HP by Orc and now has 33 HP left!
Kyrre has successfully cast ViewEarth and now has 35 MP!
Solmyr
  HP: 95
  MP: 170
Kyrre
  HP: 33
  MP: 35
*/
heroesOfCodeAndLogic(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ])
/* SirMullich healed for 30 HP!
Adela recharged for 50 MP!
Tyris does not have enough MP to cast Fireball!
Tyris has been killed by Fireball!
Ivor has been killed by Mosquito!
Adela
  HP: 90
  MP: 200
SirMullich
  HP: 100
  MP: 40

*/