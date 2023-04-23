function nXnMatrix(num) {
    let array = [];

    for (let row = 0; row < num; row++) {
        let result = '';
        for (let coll = 0; coll < num; coll++) {
            result += `${num} `
        }
        array.push(result);
    }
    console.log(array.join("\n"))
}
nXnMatrix(3)
nXnMatrix(7)
nXnMatrix(2)