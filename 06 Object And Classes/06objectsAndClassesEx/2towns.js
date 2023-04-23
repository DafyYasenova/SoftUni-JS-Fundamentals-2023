function towns(arr) {
    let obj = {};
    for (let line of arr) {
        //    let[town, latitude, longitude] = line.split(" | ")  използва се, само когато знаем колко на брой елемента имаме!
        let townsInfo = line.split(" | ");
        let town = townsInfo[0];
        let latitude = Number(townsInfo[1]);
        let longitude = Number(townsInfo[2]);


        obj.town = town;
        obj.latitude = latitude.toFixed(2);
        obj.longitude = longitude.toFixed(2);

        console.log(obj)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])
towns(['Plovdiv | 136.45 | 812.575'])

// 2 way:
function towns(arr) {

    for (let line of arr) {
        //    let[town, latitude, longitude] = line.split(" | ")  използва се, само когато знаем колко на брой елемента имаме!
        let townsInfo = line.split(" | ");
        let town = townsInfo[0];
        let latitude = Number(townsInfo[1]);
        let longitude = Number(townsInfo[2]);

        let obj = {
            town: town,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2),
        }
        console.log(obj)
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])
towns(['Plovdiv | 136.45 | 812.575'])