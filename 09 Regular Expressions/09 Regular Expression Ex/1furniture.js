function furniture(input) {
    let index = 0;
    console.log('Bought furniture:')
    let pattern = />{2}(?<furniture>[A-Z][A-Za-z]+)<{2}(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)\b/g;
 // let pattern =  /[>]{2}(?<furniture>[A-Z][A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantityy>[\d]+)/g;
    let allPrice = 0;
    while (input[index] !== "Purchase") {

        let productLine = input[index];
        let validProduct = pattern.exec(productLine);

        while ((validProduct !== null)) {
            let furniture = validProduct.groups[`furniture`];
            console.log(`${furniture}`)
            let price = validProduct.groups[`price`];
            let quantity = validProduct.groups[`quantity`];

            allPrice += Number(price) * Number(quantity);
            validProduct = pattern.exec(productLine);
        }
        index++;
    }
    console.log(`Total money spend: ${allPrice.toFixed(2)}`)

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
/* Bought furniture:
Sofa
TV
Total money spend: 2436.69 */
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])
/* Bought furniture:
Laptop
TV
TV
TV
Total money spend: 8593.09 */
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'])
/* 	Bought furniture:
Total money spend: 0.00 */

//2 way with test(), matchAll:
function furniture(input) {

    let pattern = />{2}(?<furniture>[A-Z][A-Za-z]+)<{2}(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)\b/;
    let allPrice = 0;
    console.log('Bought furniture:');

    for (let line of input){
         if(line === "Purchase") {
            break;
         }

        if (pattern.test(line)) {
            let product = pattern.exec(line);
            let price = Number(product.groups.price) * Number(product.groups.quantity);
            console.log(product.groups.furniture);
            allPrice += price;
        }
    }
    console.log(`Total money spend: ${allPrice.toFixed(2)}`)

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
/* Bought furniture:
Sofa
TV
Total money spend: 2436.69 */
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])
/* Bought furniture:
Laptop
TV
TV
TV
Total money spend: 8593.09 */
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'])
/* 	Bought furniture:
Total money spend: 0.00 */
