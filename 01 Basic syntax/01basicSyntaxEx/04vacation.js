function vacantion(group, type, day) {
    let price = 0;
    if (type == 'Students') {
        if (day == 'Friday') {
            price = 8.45;
        } else if (day == 'Saturday') {
            price = 9.80;
        } else if (day == 'Sunday') {
            price = 10.46;
        }
    } else if (type == 'Business') {
        if (day == 'Friday') {
            price = 10.90;
        } else if (day == 'Saturday') {
            price = 15.60;
        } else if (day == 'Sunday') {
            price = 16.00;
        }
    } else if (type == 'Regular') {
        if (day == 'Friday') {
            price = 15.00;
        } else if (day == 'Saturday') {
            price = 20.00;
        } else if (day == 'Sunday') {
            price = 22.50;
        }
    }
    let totalPrice = price * group;
    if (group >= 30 && type == 'Students') {
        totalPrice *= 0.85;
    }
    if (group >= 100 && type == "Business") {
        totalPrice = price * (group - 10);
    }
    if (group >= 10 && group <= 20 && type == 'Regular') {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacantion(30, "Students", "Sunday")
vacantion(40, "Regular", "Saturday")

// switch(day){
//     case "Friday":
//         switch (type){
//             case "Students":
//                 totalPrice = price * 8.45;
//                 if(group >= 30){
//                     totalPrice *= 0.85;
//             }
//             break;
//             case "Business":
//                 totalPrice = price * 10.90;
//                 if (group >= 100){
//                     totalPrice -= 10 * 10.90;
//                 }

//         }
// }