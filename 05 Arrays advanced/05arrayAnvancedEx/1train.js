function train (input){
let wagons = input.shift().split(" ").map(Number);

let maxCapacity = Number(input.shift());

for(let i = 0; i < input.length; i++){
    let commands = input[i].split(' ');
    let command = commands[0].split(" ");
    if(commands[0] === "Add"){
        let newWagons = commands[1];
        wagons.push(Number(newWagons));
    } else{
        for(let i = 0; i < wagons.length; i++){
            let newWagons =  Number(command);
        if(wagons[i] + newWagons <= maxCapacity){
            wagons[i] += newWagons;
            break;
        }
    }
    }
}
console.log(wagons.join(' '))
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])