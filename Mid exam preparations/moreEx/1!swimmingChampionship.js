function swimmingChampionship(input) {
    let daysofTheChampionship = Number(input.shift());
    let pointsNeededToBeCovered = Number(input.shift());
    let countSwimmers = Number(input.shift());
    let hotelRoomPriceForDayForOne = Number(input.shift());
    let participationFeePerSwimmer = Number(input.shift());
    let pointForDay = 0;
    let pointCount = 0;

    for (let i = 0; i < daysofTheChampionship; i++) {
        let previosPoints = pointForDay * 0.95;
        pointForDay = Number(input[i]);
        pointCount += pointForDay + previosPoints
    }

    let expenses = (countSwimmers * participationFeePerSwimmer) +
        (countSwimmers * daysofTheChampionship * hotelRoomPriceForDayForOne);

    if (pointCount >= pointsNeededToBeCovered) {
        expenses = expenses * 0.75;
        console.log(`Money left to pay: ${expenses.toFixed(2)} BGN.`)
        console.log(`The championship was successful!`);
    } else {
        expenses = expenses * 0.90;
        console.log(`Money left to pay: ${expenses.toFixed(2)} BGN.`);
        console.log(`The championship was not successful.`)
    }

}
swimmingChampionship((["3",
    "400",
    "5",
    "70.6",
    "15.0",
    "100.6",
    "300.59",
    "250.9"]))
swimmingChampionship((["2",
    "600",
    "3",
    "100.8",
    "50.5",
    "100.68",
    "80.1"]))
swimmingChampionship((["3",
    "500",
    "5",
    "100.9",
    "50.1",
    "100.5",
    "301.0",
    "80.0"]))