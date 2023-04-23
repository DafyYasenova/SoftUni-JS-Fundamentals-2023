function carWash(input) {

    function soap(value) {
        return value += 10;
    }
    function water(value) {
        return value * 0.20;
    }
    function vacuumCleaner(value) {
        return value * 0.25;
    }
    function mud(value) {
        return value * 0.1;
    }
    let carCount = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command === 'soap') {
            carCount += 10;
        } else {
            switch (command) {
                case 'soap': carCount += soap(carCount); break;
                case 'water': carCount += water(carCount); break;
                case 'vacuum cleaner': carCount += vacuumCleaner(carCount); break;
                case 'mud': carCount -= mud(carCount); break;
            }
        }
    }
    console.log(`The car is ${carCount.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
// The car is 39.00% clean.

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
// The car is 13.12% clean.


// 2 way: simple
function carWash(input) {
    let value = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'soap') {
            value += 10;
        }
        if (input[i] === 'water') {
            value *= 1.20;
        }
        if (input[i] === 'vacuum cleaner') {
            value *= 1.25;
        }
        if (input[i] === 'mud') {
            value *= 0.90;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
// The car is 39.00% clean.

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
// The car is 13.12% clean.