function integerAndFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;

    sum % 1 === 0 ?sum += ' - Integer': sum += '- Float';
    console.log(sum);
    // 2nd way: 
    
    // let type = 'Float';
    // if (Number.isInteger(sum)){
    //     type = "Integer";
    // }
    // console.log(`${sum} - ${type}`)
}
integerAndFloat (9, 100, 1.1)
integerAndFloat (100, 200, 303)