function schoolLibrary(input) {
    let array = input.filter(x => x !== '&');
    let library = array.shift().split("&");
    let tokens = array.shift();

    while (tokens !== "Done") {
        tokens = tokens.split(' | ');
        let command = tokens[0];
        
        if (command === "Add Book") {
            if (!library.includes(tokens[1])) {
                library.unshift(tokens[1])
            }
        } else if (command === "Take Book") {
            let index = library.indexOf(tokens[1]);
            if (index <= library.length - 1) {
                library.splice(index, 1);
            }
        } else if (command === "Swap Books") {
            let otherBook = tokens[2];
            if (library.includes(tokens[1]) >= 0 && library.includes(otherBook) >= 0) {
                let firstCount = tokens[1];
                let foundIndexOne = library.indexOf(tokens[1]);
                let foundIndexTwo = library.indexOf(otherBook);
                library[foundIndexOne] = otherBook;
                library[foundIndexTwo] = firstCount;
            }
        } else if (command === "Insert Book") {
            if (!library.includes(tokens[1])) {
                library.push(tokens[1])
            }
        } else if (command === "Check Book") {

            let printIndex = Number(tokens[1]);
            if (printIndex <= library.length - 1 && printIndex !== -1) {
                console.log(library[printIndex]);
            }
        }
        tokens = array.shift();
    }

    console.log(library.join(", "));
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick&Hamlet",
    "Add Book | The Odyssey",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Check Book | 3",
    "Done"])
/* Hamlet
The Odyssey, The Great Gatsby, Moby Dick, Hamlet, Alice's Adventures in Wonderland
*/
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22& The Stranger",
    "Add Book | David Copperfield",
    "Add Book | One Thousand and One Nights",
    "Swap Books | One Thousand and One Nights | Catch-22",
    "Take Book | David Copperfield",
    "Insert Book | The Stories of Anton Chekhov",
    "Check Book | 17",
    "Done"])
/* Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights,  
The Stranger, The Stories of Anton Chekhov
*/