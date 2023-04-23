function thePianist(input) {
    let numberPieces = input.shift();
    let myObj = {};
    let myList = input.splice(0, numberPieces);

    for (let line of myList) {
        let [pieces, composer, key] = line.split("|");
        if (!pieces.hasOwnProperty(myObj)) {
            myObj[pieces] = [];
        }
        myObj[pieces].push(composer, key);
    }

    for (let line of input) {
        line = line.split("|");
        if (line[0] === "Stop") {
            break;
        }

        if (line[0] === "Add") {
            let pieces = line[1];
            let composer = line[2];
            let key = line[3];
            if (!myObj.hasOwnProperty(pieces)) {
                myObj[pieces] = [];
                myObj[pieces].push(composer, key);
                console.log(`${pieces} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${pieces} is already in the collection!`)
            }
        }
        if (line[0] === "Remove") {
            let pieces = line[1];
            if (myObj.hasOwnProperty(pieces)) {
                console.log(`Successfully removed ${pieces}!`);
                delete myObj[pieces];
            } else {
                console.log(`Invalid operation! ${pieces} does not exist in the collection.`);
            }
        }
        if (line[0] === "ChangeKey") {
            let pieces = line[1];
            let key = line[2];
            if (myObj.hasOwnProperty(pieces)) {
                myObj[pieces].pop();

                myObj[pieces].push(key)
                console.log(`Changed the key of ${pieces} to ${key}!`)
            } else {
                console.log(`Invalid operation! ${pieces} does not exist in the collection.`);
            }
        }
    }
    let newArr = Array.from(Object.entries(myObj))

    for (let entry of newArr) {
        for (let el of entry) {
        }
        console.log(`${entry[0]} -> Composer: ${entry[1][0]}, Key: ${entry[1][1]}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )