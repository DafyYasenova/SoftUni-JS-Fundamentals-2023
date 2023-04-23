function numberModification(number) {
    let num = number.toString();
    // let append = n => (num += n); // create arrow func append 
    let result = 0;
    while (result / num.length <= 5) {
        for (let i = 0; i < num.length; i++) {
            let n = Number(num[i]);
            result += n
        }
        if (result / num.length <= 5) {
            num = num + 9
            // append(9); // paste currNum in append function
            result = 0;
        }
    }
    console.log(num)
}
numberModification(101)  //	1019999
numberModification(5835) // 5835
