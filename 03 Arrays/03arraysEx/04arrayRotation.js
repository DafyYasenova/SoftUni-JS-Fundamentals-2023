function arrayRotacion(array, rotacion) {
    let newArray = [];
    for (let i = 0; i < rotacion; i++) {
        let currentNumber = array[0];
        for (let j = 1; j < array.length; j++) {
            newArray.push(array[j]);
        }
        newArray.push(currentNumber);
        array = newArray;
        newArray = [];
    }
    console.log(array.join(" "));
}
arrayRotacion([51, 47, 32, 61, 21], 2)	//32 61 21 51 47
arrayRotacion([32, 21, 61, 1], 4)	//32 21 61 1
arrayRotacion([2, 4, 15, 31], 5)	//4 15 31 2

//2 answer: 
function arrayRotacion2(array, rotacion) {
    for (let i = 0; i < rotacion; i++) {
        array.push(array.shift());
    }

    console.log(array.join(" "));
}
arrayRotacion2([51, 47, 32, 61, 21], 2)	//32 61 21 51 47
arrayRotacion2([32, 21, 61, 1], 4)	//32 21 61 1
arrayRotacion2([2, 4, 15, 31], 5)	//4 15 31 2


// 3 answer: 
// за да избегнем въртене на цикъла, когато след завъртане
// цикъла ще е същия (rotacion = array.length)
function arrayRotacion3(array, rotacion){
    let rotacionTime = rotacion % array.length;
    for( let i = 0; i < rotacionTime; i++){
        let numberToMove = array.shift();
        array.push(numberToMove);
    }
console.log(array.join(' '));
}
arrayRotacion3 ([51, 47, 32, 61, 21], 2)	//32 61 21 51 47
arrayRotacion3 ([32, 21, 61, 1], 4)	//32 21 61 1
arrayRotacion3 ([2, 4, 15, 31], 5)  