function seizeTheFire(input) {
    let collections = input.shift().split("#");
    let waterCount = Number(input.shift());

    let effortCount = 0;
    let totalFire = 0;
    let isTrue = false
    console.log("Cells:");

    for (let i = 0; i < collections.length; i++) {
        let steps = collections[i].split(" = ");
        let level = steps[0];
        let value = Number(steps[1]);

        if (waterCount < value) {
            continue;
        }
        if (level === "High") {
            if (value > 81 && value < 125) {
                isTrue= true;
            }
        }
        if (level === "Medium") {
            if (value > 51 && value < 80) {
                isTrue= true; 
            }
        }
        if (level === "Low") {
            if (value > 1 && value < 50) {
                isTrue= true;
            }
        }
        if(isTrue){
            effortCount += value * 0.25;
            totalFire += value;
            waterCount -= value;
            console.log(` - ${value}`) 
        }
        isTrue = false;
    }
        console.log(`Effort: ${effortCount.toFixed(2)}`)
        console.log(`Total Fire: ${totalFire}`);
}
seizeTheFire(["High = 89#Low = 28#Medium = 77#Low = 23",
    "1250"])
/* Cells:
 - 89
 - 28
 - 77
 - 23
Effort: 54.25
Total Fire: 217
*/
seizeTheFire(["High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77",
    "220"])
/* Cells:
 - 40
 - 110
Effort: 37.50
Total Fire: 150 */