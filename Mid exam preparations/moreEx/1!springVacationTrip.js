function springVacationTrip(input) {
    let daysOfTrip = input.shift();
    let budget = input.shift();
    let peopleOfGroup = input.shift();
    let fuelPriceForKm = input.shift();
    let foodExpensesForDay = input.shift();
    let priceForRoom = input.shift();


    let foodExpCount = daysOfTrip * peopleOfGroup * foodExpensesForDay;
    let hotelExpCount = daysOfTrip * peopleOfGroup * priceForRoom;

    if (peopleOfGroup > 10) {
        hotelExpCount *= 0.75;
    }
    let expensesCount = foodExpCount + hotelExpCount;

    let dayCount = 0;

    for (let i = 0; i < daysOfTrip; i++) {
        let travelledDistance = input[i];

        expensesCount += travelledDistance * fuelPriceForKm;

        dayCount++;
        if (dayCount % 7 === 0) {
            let receiveMoney = expensesCount / peopleOfGroup;
            expensesCount -= receiveMoney;
        }
        if (budget < expensesCount) {
            console.log(`Not enough money to continue the trip. You need ${(expensesCount - budget).toFixed(2)}$ more.`)
            break;
        }

        if (dayCount % 3 === 0 || dayCount % 5 === 0 && dayCount % 7 !== 0) {
            expensesCount += expensesCount * 0.40;

            if (budget < expensesCount) {
                console.log(`Not enough money to continue the trip. You need ${(expensesCount - budget).toFixed(2)}$ more.`)
                break;
            }

        }
    }

    if (budget >= expensesCount) {
        console.log(`You have reached the destination. You have ${(budget - expensesCount).toFixed(2)}$ budget left.`)

    }
}
springVacationTrip([7,
    12000,
    5,
    1.5,
    10,
    20,
    512,
    318,
    202,
    154,
    222,
    108,
    123])
    /* You have reached the destination. You have 5083.48$ budget left. */
springVacationTrip([10,
    20500,
    11,
    1.2,
    8,
    13,
    100,
    150,
    500,
    400,
    600,
    130,
    300,
    350,
    200,
    300,])
    /* 	Not enough money to continue the trip. You need 465.79$ more.*/