function race(data) {

    let racersName = data.shift().split(", ");
    let patternName = /[A-Za-z]+/g;
    let paternDistance = /[\d+]/g;

    let raceObject = {};

    for (let racerName of racersName) {
        raceObject[racerName] = 0;
    }
    for (let line of data) {
        if (line === 'end of race') {
            break;
        }
        let name = line.match(patternName).join("");
        let distance = line.match(paternDistance);
        let tempDistance = 0;
        for (let el of distance) {
            tempDistance += Number(el);
        }
        if (raceObject.hasOwnProperty(name)) {
            raceObject[name] += tempDistance;
        }
    }
    let sortRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortRacers[0][0]}`);
    console.log(`2nd place: ${sortRacers[1][0]}`);
    console.log(`3rd place: ${sortRacers[2][0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])
/* 1st place: George
2nd place: Peter
3rd place: Tom */
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])
/* 1st place: Michonne
2nd place: Ronald
3rd place: Bill */