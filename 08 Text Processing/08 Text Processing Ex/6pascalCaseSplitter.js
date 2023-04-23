function pascalCaseSplitter(input) {
    let newArr = input[0];
    let lowerString = input.toLowerCase();

    for (let i = 1; i < input.length; i++) {
        if (input[i] !== lowerString[i]) {
            newArr += ", ";
        }
        newArr += input[i];
    }
    console.log(newArr);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')