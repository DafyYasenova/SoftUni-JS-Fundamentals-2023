function magicMatrices(arr1, arr2, arr3){
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
let isMagicMatrics = false;
    for (let i = 0; i < arr1.length; i++){
        result1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++){
        result2 += arr2[i];
    }
    for (let i = 0; i < arr3.length; i++){
        result3 += arr3[i];
       
    if ((arr1[i] + arr2[i] + arr3[i]) === result1 && 
        (arr1[i] + arr2[i] + arr3[i]) === result2 &&
        (arr1[i] + arr2[i] + arr3[i]) === result3 ){
            isMagicMatrics === true;
        }}
        
console.log(isMagicMatrics)


}
magicMatrices ([4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]); // true
// magicMatrices ([11, 32, 45],
//                 [21, 0, 1],
//                 [21, 1, 1])	//false		
// magicMatrices ([1, 0, 0],
//                 [0, 0, 1],
//                 [0, 1, 0]); //true

