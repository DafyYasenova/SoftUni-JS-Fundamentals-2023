function sorting(array) {
    let sortArray = []
    array.sort((a, b) => b - a);

    while (array.length !== 0) {
        let currentElement = array.shift();
        sortArray.push(currentElement);

        if (array.length !== 0) {
            currentElement = array.pop();
            sortArray.push(currentElement);
        }
    }
    console.log(sortArray.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])