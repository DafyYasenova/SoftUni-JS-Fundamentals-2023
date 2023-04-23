function aMinerTask(input) {

    let lineObject = {};

    for (let i = 0; i < input.length; i += 2) {
        let item = input[i];
        let value = Number(input[i + 1]);
        if (!lineObject.hasOwnProperty(item)) {
            lineObject[item] = value;
        } else {
            lineObject[item] += value;
        }
    }
    for (let item in lineObject) {
        console.table(`${item} -> ${lineObject[item]}`)
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)