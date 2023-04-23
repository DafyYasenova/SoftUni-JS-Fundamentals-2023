function needForSpeed(data) {
    let carObj = {};
    let currentNum = Number(data.shift());
    for (let i = 0; i < currentNum; i++) {
        let line = data.shift().split("|");
        let [carName, mileage, fuel] = line;
        carObj[carName] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
    }
 
    while (data[0] !== "Stop") {
        let line = data.shift().split(" : ");
        let command = line[0];
        let carName = line[1];
        if (command === "Drive") {
            let distance = Number(line[2]);
            let fuel = Number(line[3]);
            if (fuel > carObj[carName].fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                carObj[carName].mileage += distance;
                carObj[carName].fuel -= fuel;
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                if (carObj[carName].mileage > 100000) {
                    console.log(`Time to sell the ${carName}!`);
                    delete carObj[carName];
                }
            }
        }
        if (command === "Refuel") {
            let currFuel = Number(line[2]);
            let fuel = carObj[carName].fuel;
            if (currFuel + fuel > 75) {
                let missingFuel = 75 - fuel;
                let leftFuel = Math.min(missingFuel, currFuel);
                //carObj[carName].fuel += leftFuel;
                currFuel = leftFuel;
            }
            carObj[carName].fuel += currFuel;
            console.log(`${carName} refueled with ${currFuel} liters`);
        }
        if (command === "Revert") {
            let kilometers = Number(line[2]);
            carObj[carName].mileage -= kilometers;
            if (carObj[carName].mileage < 10000) {
                carObj[carName].mileage = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
    if (data[0] === "Stop") {
        for (let carName in carObj) {
            console.log(`${carName} -> Mileage: ${carObj[carName].mileage} kms, Fuel in the tank: ${carObj[carName].fuel} lt.`)
        }
    }
}

// https://pastebin.com/AhFT7Kx6
// https://pastebin.com/ASpA4pCH

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])
/* Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
Not enough fuel to make that ride
Audi A6 refueled with 50 liters
Mercedes CLS mileage decreased by 500 kilometers
Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
*/
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
/* Not enough fuel to make that ride
Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
Time to sell the Aston Martin Valkryie!
Lamborghini Veneno refueled with 1 liters
Bugatti Veyron mileage decreased by 2000 kilometers
Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
*/