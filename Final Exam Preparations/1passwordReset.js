function passwordReset(array) {
    let password = array.shift();

    while (array[0] !== "Done") {
        let line = array.shift().split(" ");
        let command = line[0];

        switch (command) {
            case "TakeOdd":
                let createPassword = '';
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        createPassword += password[i];
                    }
                }
                password = createPassword;
                console.log(password)
                break;
            case "Cut":
                let startIndex = Number(line[1]);
                let countIndex = Number(line[2]);

                let cut = password.substring(startIndex, startIndex+ countIndex);

                password = password.replace(cut, "");
                console.log(password)
                break;
            case "Substitute":
                let oldSymbol = line[1];
                let newSymbol = line[2];
                if (password.includes(oldSymbol)) {
                    while (password.includes(oldSymbol)) {
                        password = password.replace(oldSymbol, newSymbol);
                    }
                    console.log(password)
                } else {
                    console.log(`Nothing to replace!`)
                }
                break;
        }
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
/* icecream::hot::summer
icecream::hot::mer
icecream-hot-mer
Nothing to replace!
Your password is: icecream-hot-mer
*/
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
/* programming!is!funny
programming!is!fun
programming***is***fun
Nothing to replace!
Your password is: programming***is***fun
*/