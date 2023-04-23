function reverseAnArrayOfNumbers(n, array){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(array[i]); 
    }
    let output = '';
    for (let i = arr.length -1; i >= 0; i--){
        output += arr[i];
        if (i <= arr.length - 1){
            output += ' ';
        }
    }
    console.log(output);
   
}
reverseAnArrayOfNumbers (3, [10, 20, 30, 40, 50])	//30 20 10
reverseAnArrayOfNumbers (4, [-1, 20, 99, 5]) // 5 99 20 -1
reverseAnArrayOfNumbers (2, [66, 43, 75, 89, 47])  //43 66