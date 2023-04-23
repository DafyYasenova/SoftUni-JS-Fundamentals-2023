function bitcoinMining(input) {
    let bitcoinPriceInLv = 11949.16;
    let gramOfGoldInLv = 67.51;

    let totalBitcoin = 0;
    let moneyAmount = 0;
    let daysCount = 0;
    let firstDay = 0;
    let dayGoldMined = 0;

    for (let i = 0; i < input.length; i++) {
        dayGoldMined = input[i];
        daysCount++;

        if (daysCount % 3 === 0) {
            dayGoldMined *= 0.70;
        }

        moneyAmount += dayGoldMined * gramOfGoldInLv;


        if (moneyAmount >= bitcoinPriceInLv) {
            totalBitcoin++;
        }

        if (totalBitcoin === 1) {
            firstDay += daysCount;
        }

    }

    let bougthCoins = Math.floor(moneyAmount / bitcoinPriceInLv);

    let leftMoney = moneyAmount - (bougthCoins * bitcoinPriceInLv);

    console.log(`Bought bitcoins: ${Math.floor(bougthCoins)}`);
    
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`)

}
//bitcoinMining([100, 200, 300])
//bitcoinMining([50, 100])
//bitcoinMining ([3124.15, 504.212, 2511.124])