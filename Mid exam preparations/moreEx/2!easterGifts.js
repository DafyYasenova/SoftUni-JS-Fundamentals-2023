function easterGifts(input) {
    let collections = input.shift().split(" ");
    let tokens = input.shift()

    while (tokens !== "No Money") {
        let command = tokens.split(" ")
        if (command[0] === "OutOfStock") {
            for (let i = 0; i < collections.length; i++) {
                if (command[1] === collections[i]) {
                    collections[i] = "None"
                }
            }
        } else if (command[0] === "Required") {
            if (command[2] >= 0 && command[2] < collections.length) {
                collections.splice(command[2], 1, command[1])
            }
        } else if (command[0] === "JustInCase") {
            collections.pop();
            collections.push(command[1])
        }
        tokens = input.shift()
    }
    collections = collections.filter((el) => el !== "None");
    console.log(collections.join(" "))
}
easterGifts(["Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes",
    "OutOfStock Eggs",
    "Required Spoon 2",
    "JustInCase ChocolateEgg",
    "No Money"])
// StuffedAnimal Spoon Sweets EasterBunny ChocolateEgg 

easterGifts(["Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes",
    "Required Paper 8",
    "OutOfStock Clothes",
    "Required Chocolate 2",
    "JustInCase Hat",
    "OutOfStock Cable",
    "No Money"])
// Sweets Cozonac Chocolate Flowers Wine Eggs Hat