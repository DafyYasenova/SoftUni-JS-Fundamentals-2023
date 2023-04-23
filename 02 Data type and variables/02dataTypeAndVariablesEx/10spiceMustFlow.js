function spiceMustFlow(yield) {
    let daysCount = 0;
    let spiceConsum = 26;
    let totalYield = 0;
    let yieldCount = 0;

    while (yield >= 100) {
        daysCount++;
        yieldCount = yield;
        totalYield += yieldCount - spiceConsum;
        yield -= 10;
        if (yield < 100) {
            totalYield -= spiceConsum;
        }
    }

    console.log(daysCount);
    console.log(totalYield);
}
spiceMustFlow(111)
spiceMustFlow(450)