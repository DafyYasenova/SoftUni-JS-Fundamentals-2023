function decryptingCommands(input) {
    let currentString = input.shift();
    let sumFromAscii = 0;
    let line = input.shift();
    while (line !== "Finish") {
        line = line.split(" ");

        let command = line[0];
        switch (command) {
            case "Replace":
                let currentChar = line[1];
                let newChar = line[2];
                while (currentString.includes(currentChar)) {
                    currentString = currentString.replace(currentChar, newChar);
                }
                console.log(currentString);
                break;
            case "Cut":
                let startIndex = Number(line[1]);
                let endIndex = Number(line[2]);
                
                if (startIndex >= 0 && startIndex <= currentString.length && endIndex >= 0 && endIndex <= currentString.length) {
                    let cut = currentString.substring(startIndex, endIndex + 1);
                    currentString = currentString.replace(cut, "");
                    console.log(currentString)
                } else {
                    console.log("Invalid indices!");
                }
                break;
            case "Make": 
                let caseCommand = line[1];
                if (caseCommand === "Upper") {
                    currentString = currentString.toUpperCase();
                } else {
                    currentString = currentString.toLowerCase();
                }
                console.log(currentString);
                break;
            case "Check": //string
                let string = line[1];
                if (currentString.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }
                break;
            case "Sum":
                let start = Number(line[1]);
                let end = Number(line[2]);
                if (start >= 0 && start < currentString.length && end >= 0 && end < currentString.length) {
                    let chars = currentString.substring(start, end +1);
                    for (let i = 0; i < chars.length; i++) {
                        let currentIndex = chars.charCodeAt(i);
                        sumFromAscii += currentIndex;
                    }
                    console.log(sumFromAscii);
                } else {
                    console.log("Invalid indices!")
                }
                break;
        }
        line = input.shift();
    }
}

decryptingCommands(["DinnerIsServed",
"Make Upper",
"Check Dinner",
"Replace N M",
"Finish"])
/* DINNERISSERVED
Message doesn't contain Dinner
DIMMERISSERVED*/

decryptingCommands(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])
/* HarryNameDay
harrynameday
Invalid indices!
Invalid indices!
*/

decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])
/* 	WeLikeSoftUni
WELIKESOFTUNI
Message doesn't contain SoftUni
293
WESOFTUNI
*/
decryptingCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])
/* HarryNameDay
harrynameday
Invalid indices!
Invalid indices!
*/