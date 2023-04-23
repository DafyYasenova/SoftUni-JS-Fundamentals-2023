function santasSecretHelper(data) {
    let currentNum = Number(data.shift());
    let currentLine = '';
    let currentArray = [];
    let pattern = /[@](?<name>[A-Za-z]+)[^\@\-\!\:\>]+[\!](?<behavior>[G])[\!]/g;
    let line = data.shift();
    while (line !== "end") {

        for (let i = 0; i < line.length; i++) {
            let currentChar = line[i].charCodeAt() - currentNum;

            currentChar = String.fromCharCode(currentChar);
            currentLine += currentChar;
        }
        currentArray.push(currentLine);
        currentLine = '';

        line = data.shift();
    }

    let match = pattern.exec(currentArray);

    while (match !== null) {
        console.log(match.groups['name'])
        match = pattern.exec(currentArray)
    }
}
santasSecretHelper(["3",
    "CNdwhamigyenumje$J$",
    "CEreelh-nmguuejn$J$",
    "CVwdq&gnmjkvng$Q$",
    "end",
])
santasSecretHelper(["3",
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
    "ppqmkkkmnolmnnCEhq/vkievk$Q$",
    "yyegiivoguCYdohqwlqh/kguimhk$J$",
    "end"
])