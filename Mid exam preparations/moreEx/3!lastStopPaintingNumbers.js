function paintingsNumbers(array) {
   
    let collections = array.shift().split(" ").map(x => Number(x));
    let newArr = array.slice()
    for (let i = 0; i < newArr.length; i++) {
        let commands = array.shift().split(" ")
        let command = commands[0];
        let firstNum = Number(commands[1]);
        let secondNum = Number(commands[2]);
        if (command === "End") {
            break;
        } else if (command === "Change") {
            if (collections.indexOf(firstNum == -1)) {
                collections[collections.indexOf(firstNum)] = secondNum;
            }
        } else if (command === "Hide") {
            if (collections.indexOf(firstNum) >= 0) {
                collections.splice(collections.indexOf(firstNum), 1);
            }
        } else if (command === "Switch") {
            if ((collections.indexOf(firstNum) >= 0) && (collections.indexOf(secondNum)) >= 0) {
                let firstCount = firstNum;
                let foundIndexOne = collections.indexOf(firstNum);
                let foundIndexTwo = collections.indexOf(secondNum);
                collections[foundIndexOne] = secondNum;
                collections[foundIndexTwo] = firstCount;
            }
        } else if (command === "Insert") {
            if (collections.length + 1 >= firstNum) {
                collections.splice((firstNum + 1), 0, secondNum)
            }
        } else if (command === "Reverse") {
            collections = collections.reverse();
        }
    }
    console.log(collections.join(" "))
}

paintingsNumbers(["115 101 114 73 111 116 75",
    "Insert 5 114",
    "Switch 116 73",
    "Hide 76",
    "END"])
//115 101 114 116 111 73 114 75
paintingsNumbers(["77 120 115 101 97 78 88 112 111 108 110",
    "Switch 97 98",
    "Hide 88",
    "Change 120 117",
    "END"])
// //77 117 115 101 97 78 112 111 108 110
paintingsNumbers(["65 304 97 79 12 659",
    "Reverse",
    "Change 73 70",
    "Insert 10 85",
    "END"])
// //659 12 79 97 304 65

paintingsNumbers(["115 115 101 114 73 111 116 75",
"Insert 5 114",
"Switch 116 73",
"Hide 75",
"Reverse",
"Change 73 70",
"Insert 10 85",
"END"])
// 70 114 111 116 114 101 115 115
paintingsNumbers(["77 120 115 101 101 97 78 88 112 111 108 101 111 110",
"Insert 5 32",
"Switch 97 78",
"Hide 88",
"Change 120 117",
"END"])
//77 117 115 101 101 78 32 97 112 111 108 101 111 110
