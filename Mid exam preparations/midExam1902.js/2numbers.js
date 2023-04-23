function numbers(input) {
    let collections = input.shift().split(" ").map(Number);

    while (input[0] !== "Finish") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        switch (command) {
            case "Add":
                let value = Number(tokens[1]);
                collections.push(value);
                break;
            case "Remove":
                let index = Number(tokens[1]);
                if (collections.indexOf(index) >= 0) {
                    if (index !== undefined) {
                        collections.splice(collections.indexOf(index), 1);
                    }
                }
                break;
            case "Collapse":
                let deleteIndex = Number(tokens[1]);
                collections = collections.filter((el) => el > deleteIndex);
                break;
            case "Replace":
                let firstIndex = Number(tokens[1]); //9
                let secondIndex = Number(tokens[2]); //10            
                if (collections.indexOf(firstIndex)) {
                    if (firstIndex !== undefined) {
                        let index = collections.indexOf(firstIndex);
                        collections.splice(index, 1, secondIndex);
                    }
                }
                break;
        }
        if (input[0] === "Finish") {
            break;
        }
    }
    console.log(collections.join(" "))
}
numbers(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])
// 1 5 19 1
numbers(["1 20 -1 10",
    "Collapse 8",
    "Finish"])
//20 10
numbers(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"])
//5 10 70 -56 9
