function generatingNumbers(input) {
    let array = input.shift().split(' ');
    let newArray = array.splice();
    for (let i = 0; i < input.length; i++) {
        let commands = input[i];
        if (commands.includes('add to start')) {
            commands = commands.split(' ');
            commands.splice(0, 3);
            for (let i = commands.length - 1; i >= 0; i--) {
                array.unshift(commands[i]);
            }
        } else if (commands.includes('remove greater than')) {
            commands = commands.split(' ');
            commands.splice(0, 3);

            for (let i = 0; i < array.length; i++) {

                if (Number(array[i]) < commands) {
                    newArray.splice(i, 0, array[i])
                }
            }
            array = newArray;

        } else if (commands.includes('replace')) {
            commands = commands.split(' ');
            let value = (commands[1]);
            let replacement = Number(commands[2]);
            if (array.indexOf(value)) {
                let index = array.indexOf(value)
                array.splice(Number(index), 1, replacement);
            }
        } else if (commands.includes('remove at index')) {
            commands = commands.split(' ');
            commands.splice(0, 3);
            let indexToRemove = Number(commands[0]);
            if (indexToRemove >= 0) {
                array.splice(indexToRemove, 1);
            }
        } else if (commands.includes('find even')) {
            let findEven = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    findEven.push(array[i]);
                }
            } console.log(findEven.join(' '));

        } else if (commands.includes('find odd')) {
            let findOdd = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 !== 0) {
                    findOdd.push(array[i]);
                }
            } console.log(findOdd.join(' '));

        } else if(commands.includes('END')){
            console.log(array.join(', '));
        }
    }
}


generatingNumbers((["1 2 3 10 10 6 4 10",
    "add to start 1 2 3",
    "remove greater than 5",
    "find even",
    "END"]))
// 2 2 4
// 1, 2, 3, 1, 2, 3, 4

generatingNumbers((["1 2 3 10 10 6 4 10",
    "replace 10 1",
    "remove at index 0",
    "add to start 4 2",
    "END"]))
// 4, 2, 2, 3, 1, 10, 6, 4, 10

generatingNumbers((["1 2 3 10 10 6 4 10",
    "find odd",
    "replace 4 1",
    "remove greater than 5",
    "END"]))
//1 3
//1, 2, 3, 1
