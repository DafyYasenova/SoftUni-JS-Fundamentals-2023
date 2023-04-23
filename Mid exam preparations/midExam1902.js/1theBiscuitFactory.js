function biscuits(input) {
    let biscuitCount = Number(input.shift())
    let people = Number(input.shift())

    let target = Number(input.shift())
    let dayBisc = 0;
    let daysCount = 0;
    for (let i = 1; i < 30 + 1; i++) {
        dayBisc = (biscuitCount * people);
        if (i % 3 === 0) {
            dayBisc *= 0.75;
        }
        daysCount += Math.floor(dayBisc);
    }

    let procentBig = 0;
    let procentSmall = 0;

    console.log(`You have produced ${Math.floor(daysCount)} biscuits for the past month.`);
    if (daysCount > target) {
        total = daysCount - target
        procentBig = (total / target) * 100


        console.log(`You produce ${procentBig.toFixed(2)} percent more biscuits.`);
    } else {
        total = target - daysCount
        procentSmall = (total / target) * 100
        console.log(`You produce ${procentSmall.toFixed(2)} percent less biscuits.`)
    }
}
biscuits(["78",
    "8",
    "16000"])
/*	You have produced 17160 biscuits for the past month.
You produce 7.25 percent more biscuits. */

biscuits(["65",
    "12",
    "26000"])
