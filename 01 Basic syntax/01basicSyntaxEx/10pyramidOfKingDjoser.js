function pyramidOfKingDjoser(base, increment){
    let stone = 0;
    let totalStone = 0;
    let marble = 0;
    let totalMarble = 0;
    let lapisLazuli = 0;
    let totalLapisLazuli = 0;
    let gold = 0;
    

    let heigthPyramid = 0;
    let steps = 0;

    for (let i = base; i > 0; i -=2){
        if (i -2 > 0){
            stone = ((i - 2) * (i - 2)* increment);
            totalStone += stone;
        } else{
            gold = (i * i) * increment;
        }
    steps++;
    if (steps % 5 !== 0 && i - 2 > 0){
        marble = (((2 * i) + (2 * i)) - 4) * increment;
        totalMarble += marble;

    } else if (steps % 5 === 0 && i -2> 0){
        lapisLazuli =  (((2 * i) + (2 * i)) - 4) * increment;
        totalLapisLazuli += lapisLazuli;
    }
    heigthPyramid = steps * increment;

}

console.log(`Stone required: ${Math.ceil(totalStone)}`);
console.log(`Marble required: ${Math.ceil(totalMarble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${Math.floor(heigthPyramid)}`);
}
pyramidOfKingDjoser (11, 1)
pyramidOfKingDjoser (11, 0.75)
pyramidOfKingDjoser (12, 1)