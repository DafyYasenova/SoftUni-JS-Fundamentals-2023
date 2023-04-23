function nonDecreasingSubset(array) {
    let newArray = [array[0]];
    let current = array[0];
    for (let i = 1; i < array.length; i++) {
        if (current <= array[i]) {
            newArray.push(array[i]);
            current = array[i];
        }
    }
    console.log(newArray.join(' '))
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]) //	1 3 8 10 12 24
nonDecreasingSubset([1, 2, 3, 4])	 //1 2 3 4
nonDecreasingSubset([20, 3, 2, 15, 6, 1])	//20