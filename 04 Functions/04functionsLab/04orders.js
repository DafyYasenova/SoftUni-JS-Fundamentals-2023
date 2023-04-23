function orders(product, piece){
    
    let price = 0;
    switch(product){
        case 'coffee': price = 1.50; break;
        case 'water': price = 1.00; break;
        case 'coke': price = 1.40; break;
        case 'snacks': price = 2.00; break;    
    }
let totalPrice = price * piece;

console.log(totalPrice.toFixed(2));
// return totalPrice;

}
orders("water", 5) //5.00
orders("coffee", 2) //	3.00
