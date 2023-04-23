function adAstra(input) {
    let pattern = /([#|])(?<product>[A-Z][a-z]+[ A-Za-z]*)\1(?<date>\d{2}?\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
    let totalCal = 0;
    let myProductList = [];

    let currentProduct = pattern.exec(input);
    while (currentProduct) {
        let product = currentProduct.groups[`product`];
        let date = currentProduct.groups[`date`];
        let callories = currentProduct.groups[`cal`];

        totalCal += Number(callories);
    
        let productData = (`Item: ${product}, Best before: ${date}, Nutrition: ${callories}`);
        myProductList.push(productData);
         
        currentProduct = pattern.exec(input)
    }
    let days = Math.floor(totalCal / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    for (let el of myProductList) {
        console.log(el)
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
/* You have food to last you for: 2 days!
Item: Bread, Best before: 19/03/21, Nutrition: 4000
Item: Apples, Best before: 08/10/20, Nutrition: 200
Item: Carrots, Best before: 06/08/20, Nutrition: 500	
*/
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
/* */

function adAstra(input) {
    let pattern = /([#|])(?<product>[A-Z][a-z]+[ A-Za-z]*)\1(?<date>\d{2}?\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
    let totalCal = 0;
    let myProductList = [];

    let currentProduct = pattern.exec(input);
    while (currentProduct) {
        let product = currentProduct.groups[`product`];
        let date = currentProduct.groups[`date`];
        let callories = currentProduct.groups[`cal`];

        totalCal += Number(callories);
        let productData = [];
        productData.push(product, date, callories)
        myProductList.push(productData);
        
        currentProduct = pattern.exec(input)
        
    }
    let days = Math.floor(totalCal / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    for (let productData of myProductList) {
        console.log((`Item: ${productData[0]}, Best before: ${productData[1]}, Nutrition: ${productData[2]}`))
    }

}