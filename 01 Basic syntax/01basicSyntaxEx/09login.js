function login(input){
    let username = input[0];
    let password = "";

    for (let i = username.length -1; i >= 0; i--){ 
        password += username[i];
    }
    let incorrectPasswordCount = 0;

    for(let i = 1; i < input.length; i++){
        let tempPassword = input[i];
        
        if (tempPassword === password){
            console.log (`User ${username} logged in.`);
        } else {
            incorrectPasswordCount++;
            if (incorrectPasswordCount === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);

        }
    }
}
login(['Acer','login','go','let me in','recA'])
login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])

// for (let i =0; i < username.length; i++){
//     console.log (username[i])} -за четене на дума от масива