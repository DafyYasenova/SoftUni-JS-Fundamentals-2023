function houseParty(array) {
    let newList = [];
    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(" is ");
        let name = commands[0];
        let command = commands[1];

        if (command === "going!") {
            if (!newList.includes(name)) {
                newList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
            
        } else {
            if (!newList.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = newList.indexOf(name);
                newList.splice(index, 1);
            }
        }
    }
    console.log(newList.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])