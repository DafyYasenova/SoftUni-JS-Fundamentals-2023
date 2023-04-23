function storage(input) {
    let map = new Map();

    for (let line of input) {
        let currentLine = line.split(" ");
        let product = currentLine[0];
        let quantity = Number(currentLine[1]);

        if (!map.has(product)) {
            map.set(product, quantity)
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity + quantity;
            map.set(product, newQuantity)
        }
    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
/* tomatoes -> 10
coffee -> 45
olives -> 100 */
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])
/* apple -> 111
coffee -> 155 */

// with Object!
function storage(input) {
   let myStorage = {};

    for (let line of input) {
        let currentLine = line.split(" ");
        let product = currentLine[0];
        let quantity = Number(currentLine[1]);

        if (!myStorage.hasOwnProperty(product)) {
           myStorage[product] = quantity;
        } else {
            let oldQ = quantity
            let newQ = myStorage[product] += quantity;
        }
    }
    for (let key in myStorage) {
        console.log(`${key} -> ${myStorage[key]}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
/* tomatoes -> 10
coffee -> 45
olives -> 100 */
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])
/* apple -> 111
coffee -> 155 */