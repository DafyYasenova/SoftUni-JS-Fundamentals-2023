function storeProvision(storeList, updateList) {
    let newStoreList = {};

    for (let i = 0; i < storeList.length; i += 2) {
        let product = storeList[i];
        let price = Number(storeList[i + 1]);
        newStoreList[product] = price;
    }
    for (let i = 0; i < updateList.length; i += 2) {
        let product = updateList[i];
        let price = Number(updateList[i + 1]);
        if (!newStoreList.hasOwnProperty(product)) {
            newStoreList[product] = price
        } else {
            newStoreList[product] += price
        }
    }
    for (let product of Object.keys(newStoreList)) {
        console.log(`${product} -> ${newStoreList[product]}`)
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])

// 2 way with function:

function storeProvision(storeList, updateList) {
    let newStoreList = {};
    addProduct(storeList);
    addProduct(updateList);

    function addProduct(data) {
        for (let i = 0; i < data.length; i += 2) {
            let product = data[i];
            let price = Number(data[i + 1]);
            if (!newStoreList.hasOwnProperty(product)) {
                newStoreList[product] = price;
            } else {
                newStoreList[product] += price;
            }
        }
    }
    for (let product of Object.keys(newStoreList)) {
        console.log(`${product} -> ${newStoreList[product]}`)
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])