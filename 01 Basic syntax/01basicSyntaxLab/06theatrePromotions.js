function theatrePromotions(day, age) {
    let priceTicket = 0;

    if (day == "Weekday") {
        if (age >= 0 && age <= 18) {
            priceTicket = 12;
        } else if (age > 18 && age <= 64) {
            priceTicket = 18;
        } else if (age > 64 && age <= 122) {
            priceTicket = 12;
        }
    } else if (day == "Weekend") {
        if (age >= 0 && age <= 18) {
            priceTicket = 15;
        } else if (age > 18 && age <= 64) {
            priceTicket = 20;
        } else if (age > 64 && age <= 122) {
            priceTicket = 15;
        }
    } else if (day == "Holiday") {
        if (age >= 0 && age <= 18) {
            priceTicket = 5;
        } else if (age > 18 && age <= 64) {
            priceTicket = 12;
        } else if (age > 64 && age <= 122) {
            priceTicket = 10;
        }
    }

    if (priceTicket == 0) {
        console.log("Error!");
    } else {
        console.log(`${priceTicket}$`);
    }
}
theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)
