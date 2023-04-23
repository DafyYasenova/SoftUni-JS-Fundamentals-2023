function pyramidOfKingDjoser(base, increment) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;
    let row = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let marbel = currentBase * 4 - 4;
        let stone = currentBase * currentBase - marbel;
        totalStone += stone;

        row++;
        if (row % 5 === 0) {
            totalLapisLazuli += marbel;
        } else {
            totalMarble += marbel;
        }
        currentBase -= 2;
    }
    row++;
    let gold = currentBase * currentBase;

    stone = Math.ceil(totalStone * increment);
    marble = Math.ceil(totalMarble * increment);
    lapis = Math.ceil(totalLapisLazuli * increment);
    totalGold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);

}
pyramidOfKingDjoser(11, 1)
// pyramidOfKingDjoser(11, 0.75)
// pyramidOfKingDjoser(12, 1)