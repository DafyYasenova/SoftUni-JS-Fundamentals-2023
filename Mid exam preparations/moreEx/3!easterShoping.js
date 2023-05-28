function easterShoping(input) {

    let collections = input.shift().split(" ");
    // let collectionsCopyArr = collections.slice()
    let commandCount = Number(input.shift());

    for (let i = 0; i < commandCount; i++) {
        let commands = input[i].split(' ');

        switch (commands[0]) {
            case "Include":
                collections.push(commands[1]);
                break;
            case "Visit":
                let index = Number(commands[2]);
                if (collections.length >= index && index >= 0) {
                    if (commands[1] === "first") {
                        collections.splice(0, index)
                    } else if (commands[1] === "last") {
                        collections.splice((collections.length - index), index);
                    }
                }
                break;
            case "Prefer":
                let firstIndex = commands[1];
                let secondIndex = commands[2];

                if (firstIndex >= 0 && secondIndex >= 0 && collections.length > firstIndex && collections.length > secondIndex) {

                    let tempIndex = collections[firstIndex];
                    collections[firstIndex] = collections[secondIndex]
                    collections[secondIndex] = tempIndex;
                }
                break;

            case "Place":
                let indexFound = Number(commands[2]);
                if (collections.length > indexFound + 1 && indexFound >= 0) {
                    collections.splice(indexFound + 1, 0, commands[1])
                }
                break;
        }
    }
    console.log('Shops left:');
    console.log(collections.join(" "))


}
easterShoping(["Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore",
    5,
    "Include HM",
    "Visit first 2",
    "Visit last 1",
    "Prefer 3 1",
    "Place Library 2"])
/* Shops left:
ThriftShop ToyStore Groceries Library Armani PeakStore*/
easterShoping(["Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore",
    6,
    "Visit first 9",
    "Visit last 4",
    "Prefer 3 8",
    "Prefer 0 1",
    "Place Store 7",
    "Place ShoeAquarium 2"])
/* Shops left:
Flowers Boutique CandyStore ShoeAquarium ThriftShop*/
