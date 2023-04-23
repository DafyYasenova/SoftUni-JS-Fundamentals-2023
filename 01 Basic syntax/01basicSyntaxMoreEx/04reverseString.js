function reverseString(inputString){
//    let inputString = input[0]; това при масив!
    let reverseString = "";

    for (let i = inputString.length -1; i >= 0; i--){ // завъртане на дума от масива на обратно!
        reverseString += inputString[i];
    }
    console.log(reverseString)
}
reverseString('Hello')
reverseString('SoftUni')