function triangleOfNumbers(num){
for (let row = 1; row <= num; row++){
    let buff = "";
    for (let col = 0; col < row; col++){
        buff += row + " ";
    }
    console.log(buff);
}

}
triangleOfNumbers(5);
triangleOfNumbers(3);