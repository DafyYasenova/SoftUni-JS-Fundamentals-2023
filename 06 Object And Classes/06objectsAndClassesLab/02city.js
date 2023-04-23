function city(cityInfo) {
    let entries = Object.entries(cityInfo);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }

}
// 2 way:
function city(obj){
    for(let key of Object.keys(obj)){
        console.log(`${key} -> ${obj[key]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})