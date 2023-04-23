function secretChat(data) { 
    let myMessage = data.shift();
    let line = data.shift();

    while (line !== "Reveal") {
        line = line.split(":|:");
        let command = line[0];

        if (command === "ChangeAll") {
            let removeChar = line[1];
            let pasteChar = line[2];
                while (myMessage.includes(removeChar)) {
                    myMessage = myMessage.replace(removeChar, pasteChar);
                }
            console.log(myMessage);
        }

        if (command === "Reverse") {
            let string = line[1];
            
            if (myMessage.includes(string)) {
                myMessage = myMessage.replace(string, "");
                 let cut = string.split("").reverse().join("");
                myMessage += cut;
                console.log(myMessage);
            } else {
                console.log("error");
            }
        }
        if (command === "InsertSpace") {
            let index = Number(line[1]);
            let fisrtHalf = myMessage.substring(0, index) + " ";
            let lastHalf = myMessage.substring(index);
            myMessage = fisrtHalf.concat(lastHalf);
            console.log(myMessage);
        }
        line = data.shift();
    }
    if (line === "Reveal") {
        console.log(`You have a new text message: ${myMessage}`);
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])
/* hellodar!gnil
hellodarling!
hello darling!
You have a new text message: hello darling! */
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])
/* Howare?uoy
Howareyou?
error
How areyou?
How are you?
You have a new text message: How are you? */