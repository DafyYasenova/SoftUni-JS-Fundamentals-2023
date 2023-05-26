function easterCozonacs(input) {
    let budget = Number(input[0]);
    let flourPrice = Number(input[1]);

    let eggsPrice = flourPrice * 0.75;
    let milkPrice = flourPrice * 1.25;
    let milkPriceForOne = milkPrice / 4;
    let priceForOneCozunac = eggsPrice +milkPriceForOne+flourPrice;
    let colorEggs = 0
    let cozunacCount = 0;

    while (budget >= priceForOneCozunac) {
budget -= priceForOneCozunac;
cozunacCount++;
            colorEggs += 3;
        
        if (cozunacCount % 3 === 0) {
            colorEggs -= cozunacCount- 2;

        }
    }
    console.log(`You made ${cozunacCount} cozonacs! Now you have ${colorEggs} eggs and${budget.toFixed(2)}BGN left.`);

}
easterCozonacs(["20.50", "1.25"])
easterCozonacs(["15.75", "1.4"])
