function activationKeys(array) {
    let key = array.shift();

    while (array[0] !== "Generate") {
        let line = array.shift().split(">>>");
        let command = line[0];
        switch (command) {
            case "Slice":
                let startIndex = Number(line[1]);
                let endIndex = Number(line[2]);
                let cut = key.substring(startIndex, endIndex);
                key = key.replace(cut, "")
                console.log(key)

                break;
            case "Flip":
                let char = line[1];
                let stratCh = Number(line[2]);
                let endCh = Number(line[3]);
                let cutCh = key.substring(stratCh, endCh);
                // let changeCh = ''
                // if (char === "Upper") {
                //     changeCh = cutCh.toUpperCase();
                // } else if (char === "Lower") {
                //     changeCh = cutCh.toLowerCase();
                // }
                let changeCh = char === "Upper" ? cutCh.toUpperCase(): cutCh.toLowerCase();

                key = key.replace(cutCh, changeCh);
                console.log(key);
                break;
            case "Contains":
                let foundWord = line[1];
                if (key.includes(foundWord)) {
                    console.log(`${key} contains ${foundWord}`)
                } else {
                    console.log("Substring not found!");
                }
                break;
        }
    }
    if (array[0] === "Generate") {
        console.log(`Your activation key is: ${key}`);
    }
}
// https://pastebin.com/3nWr40QR

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
/* abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz
*/
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
/* 134sf5ftuni2020rockz42
Substring not found!
Substring not found!
Substring not found!
134SF5FTuni2020rockz42
134SF5ftuni2020rockz42
Your activation key is: 134SF5ftuni2020rockz42
*/