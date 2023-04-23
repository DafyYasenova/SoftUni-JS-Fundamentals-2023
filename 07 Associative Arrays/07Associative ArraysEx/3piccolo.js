function piccolo(input) {
    let myParking = new Map;

    let line = input.map(el => el.split(", "));

    for (let i = 0; i < input.length; i++) {
        let [command, carNumber] = line[i];
        if (command === "IN") {
            myParking.set(carNumber, command);
        } else if (command === "OUT") {
            myParking.delete(carNumber);
        }
    }
    if (myParking.size === 0) {
        console.log("Parking Lot is Empty")
    } else {
        let sorted = Array.from(myParking).sort((a, b) => a[0].localeCompare(b[0]))
        for (let car of sorted) {
            console.log(`${car[0]}`);
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])

// 2 way with SET!
function piccolo2(input) {
    let myParking = new Set;

    let line = input.map(el => el.split(", "));

    for (let i = 0; i < input.length; i++) {
        let [command, carNumber] = line[i];
        if (command === "IN") {
            myParking.add(carNumber);
        } else if (command === "OUT") {
            myParking.delete(carNumber);
        }
    }
    if (myParking.size === 0) {
        console.log("Parking Lot is Empty")
    } else {
        let sorted = Array.from(myParking).sort((a, b) => a.localeCompare(b))
        for (let car of sorted) {
            console.log(`${car}`);
        }
    }
}
piccolo2(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
piccolo2(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])