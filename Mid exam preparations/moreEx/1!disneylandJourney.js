function disneylandJourney(input) {
    let budget = input[0];
    let months = input[1];
    let spendMoney = 0;
    for (let i = 1; i < months + 1; i++) {
        if (i % 4 === 0) {
            spendMoney *= 1.25;
        }
        if (i % 3 === 0 && i !== 1) {
            spendMoney *= 0.84;
        }
        spendMoney += budget * 0.25;
        
    }

    if (spendMoney >= budget) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(spendMoney - budget).toFixed(2)}lv. for souvenirs.`)
    } else {
        console.log(`Sorry. You need ${(budget - spendMoney).toFixed(2)}lv. more.`)
    }
}
disneylandJourney([1000, 4]);
// Bravo! You can go to Disneyland and you will have 87.50lv. for souvenirs.
disneylandJourney([3265, 3])
// Sorry. You need 1077.45lv. more.
