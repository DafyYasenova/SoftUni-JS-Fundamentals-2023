function catalogue(array) {
  let catalogueObj = {};

  for (let line of array) {
    let [product, price] = line.split(" : ");
    catalogueObj[product] = price;
  }
  let sortedKeys = Object.keys(catalogueObj).sort((a, b) => a.localeCompare(b))

  let currentChar = "";
  for (let key of sortedKeys) {
    let nameProduct = key;
    if (currentChar !== nameProduct[0]) {
      currentChar = nameProduct[0];
      console.log(currentChar);
    }
    let price = catalogueObj[key];
    console.log(`  ${nameProduct}: ${price}`);
  }

}
catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
])
/* A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/
catalogue([
  'Omlet : 5.4',
  'Shirt : 15',
  'Cake : 59'
])
/* 
C
  Cake: 59
O
  Omlet: 5.4
S
  Shirt: 15
*/