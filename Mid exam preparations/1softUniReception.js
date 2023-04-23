function softUniReceptions(input) {
    let firstElement = Number(input[0]);
    let secondElement = Number(input[1]);
    let thirdElement = Number(input[2]);
    let students = Number(input[3]);

    let effectives = firstElement + secondElement + thirdElement;
    let time = 0;
    while (students > 0) {
        time++;
        if (time % 4 !== 0) {
            students -= effectives;
        }
    }
    console.log(`Time needed: ${time}h.`)
}
softUniReceptions(['5', '6', '4', '20']) //	Time needed: 2h.
softUniReceptions(['1', '2', '3', '45'])	//Time needed: 10h.	
softUniReceptions(['3', '2', '5', '40']) //Time needed: 5h.