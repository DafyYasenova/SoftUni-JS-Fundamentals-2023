function listOfProducts(array) {
    let arraySorted = array.sort();
    for (let i = 0; i < arraySorted.length; i++) {
        console.log(` ${i + 1}.${arraySorted[i]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
/*
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
*/
listOfProducts(['Watermelon', 'Banana', 'Apples'])
/*
1.Apples
2.Banana
3.Watermelon
*/