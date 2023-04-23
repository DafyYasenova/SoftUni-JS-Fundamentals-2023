function muOnline(input) {
    let commands = input.split('|');
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < commands.length; i++) {
        let currentCommands = commands[i].split(' ')
        let command = currentCommands[0];
        let value = Number(currentCommands[1]);
        if (command === 'potion') {
            // let healthAmount =0;
            // if(health + value > 100){
            //     healthAmount = (health + value) - 100 - health;
            //     health = 100;
            let missingHealth = 100 - health;
            let leftHealth = Math.min(missingHealth, value);
                health += leftHealth;
            console.log(`You healed for ${leftHealth} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (command === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`)
        } else {
            health -= value;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${command}.`)
            }
        }
    }
    console.log(`You've made it!`)
    console.log(`Bitcoins: ${bitcoins}`)
    console.log(`Health: ${health}`)
    
}
//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")