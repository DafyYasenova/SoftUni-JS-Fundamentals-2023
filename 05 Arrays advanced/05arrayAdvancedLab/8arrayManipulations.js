function arrayManipulations(input) {
    let array = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands[0];
        let firstEl = commands[1];
        let secondEl = commands[2];

        firstEl = Number(firstEl)
        secondEl = Number(secondEl)
        switch (command) {
            case "Add": array.push(firstEl);
                break;
            case "Remove": 
            /*let index = array.indexOf(firstEl)
                array.splice(index,1);
            граничен случай - с индексОф намира само по първо съвпадение
            а филтър премахва всички такива */
        array = array.filter((el) => el !== firstEl);
                break;
            case "RemoveAt": 
                 array.splice(firstEl, 1);
                break;
            case "Insert": array.splice(secondEl, 0, firstEl)
                break;
        }
    }
console.log(array.join(" "))
    return array.join(' ');

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']) //4 53 6 8 43 3
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])// 6 2 6 65 42 8

// 2 way whith functions:

function arrayManipulations(input) {
    let array = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands[0];
        let firstEl = commands[1];
        let secondEl = commands[2];

        firstEl = Number(firstEl)
        secondEl = Number(secondEl)
        switch (command) {
            case "Add": add(firstEl)
                break;
            case "Remove": remove(firstEl) 
                break;
            case "RemoveAt": removeAt(firstEl)
                break;
            case "Insert": insert(firstEl,secondEl)
                break;
        }
    }

    function add(el){
        array.push(el);
    }

    function remove(num){
       array = array.filter((el) => el !== num);
    }

    function removeAt (index){
        array.splice(index, 1);
    }
    function insert(num, index){
        array.splice(index, 0, num);
    }
    console.log(array.join(' '))
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']) //4 53 6 8 43 3
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])// 6 2 6 65 42 8                    