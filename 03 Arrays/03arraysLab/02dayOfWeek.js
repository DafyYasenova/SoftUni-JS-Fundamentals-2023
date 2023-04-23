function dayOfWeek(day) {
    let days = ['Monday', 
                'Tuesday', 
                'Wednesday', 
                'Thursday', 
                'Friday', 
                'Saturday', 
                'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]);  
     } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(-1);
dayOfWeek(8);

