function arrayManipulator(firstArray, secondArray) {
  
    for (let i = 0; i < secondArray.length; i++) {
        let commands = secondArray[i].split(' ');
        let command = commands.shift();
        commands = commands.map(Number);
        let newArray = [];
    let sumToPairs = 0;

        switch (command) {
            case 'add':
                let index = commands[0];
                let element = commands[1];
                firstArray.splice(index, 0, element);
                break;

            case 'addMany':
                let indexFound = commands.shift();
                // for (let i = 0; i < commands.length; i++) {
                    for(let i = commands.length - 1; i >= 0; i--){
                    firstArray.splice(indexFound, 0, commands[i]);
                }
                break;

            case 'contains':
                console.log(firstArray.indexOf(commands[0]));
                break;

            case 'remove':
                let indexToRemove = commands[0];
                firstArray.splice(indexToRemove, 1);
                break;

            case 'shift':
                let position = commands[0];
                for (let i = 0; i < position; i++) {
                    let num = firstArray.shift();
                    firstArray.push(num);
                }
                break;

            case 'sumPairs':
                if (firstArray.length % 2 !== 0){
                    firstArray.push(0);
                }
                for (let i = 0; i < firstArray.length; i+=2) {
                    sumToPairs = firstArray[i] + firstArray[i+1];
                    newArray.push(sumToPairs);   
                }
                firstArray = newArray;
                newArray = 0;
                break;

            case 'print':
                    console.log(`[ ${firstArray.join(', ')} ]`);
                    break;
        }
    }
    
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
// [ -1, -2, -3, 6, 6, 6 ]

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])
/*  0
    -1
    [ 1, 8, 2, 4, 5, 6, 7 ] */
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
/*  -1
     [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ] */