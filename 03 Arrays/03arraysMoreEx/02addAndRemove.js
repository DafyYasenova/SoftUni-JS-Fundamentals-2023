function addAndRemove(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === 'add') {
            newArray.push(i + 1);
        } else if (command === 'remove') {
            newArray.pop();
        }
    }
    if (newArray.length > 0) {
        console.log(newArray.join(' '));
    } else{
        console.log('Empty');
    }
}
addAndRemove(['add', 'add', 'add', 'add']) //	1 2 3 4
addAndRemove(['add', 'add', 'remove', 'add', 'add']) //	1 4 5
addAndRemove(['remove', 'remove', 'remove'])	//Empty