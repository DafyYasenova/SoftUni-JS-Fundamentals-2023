function printNElement(array) {
    let steps = Number(array[array.length - 1]);
    let newArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i])
        i += steps - 1;
    }
    console.log(newArray.join(' '));
}

printNElement(['5', '20', '31', '4', '20', '2'])//	5 31 20
printNElement(['dsa', 'asd', 'test', 'test', '2'])
printNElement(['1', '2', '3', '4', '5', '6'])