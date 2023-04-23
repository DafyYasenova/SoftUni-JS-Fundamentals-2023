function shootForTheWin(array) {
    let target = array.shift().split(" ").map(x => Number(x));
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "End") {
            console.log(`Shot targets: ${counter} -> ${target.join(" ")}`);
            break;
        }
        let targetIndex = Number(array[i]);

        if (target[targetIndex] !== undefined) {
            let currentShoot = target[targetIndex];
         
            target[targetIndex] = -1;
            counter++;
            for (let j = 0; j < target.length; j++) {
            if(target[j] !== -1){
                if (target[j] <= currentShoot) {
                    target[j] += currentShoot;
                } else {
                    target[j] -= currentShoot;
                }
            }
        }
    }
}
}
shootForTheWin((["24 50 36 70",
        "0",
        "4",
        "3",
        "1",
        "End"]))
// Shot targets: 3 -> -1 -1 130 -1
shootForTheWin((["30 30 12 60 54 66",
        "5",
        "2",
        "4",
        "0",
        "End"]))
 //Shot targets: 4 -> -1 120 -1 66 -1 -1