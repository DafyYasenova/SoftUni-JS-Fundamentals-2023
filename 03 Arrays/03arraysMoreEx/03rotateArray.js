function rotaryArray(array){
    let rotationCount = array[array.length - 1];
    let newArray = [];
    
    for(let i = 0; i < array.length - 1; i++){
        newArray.push(array[i]);
    }
    for(let i = 1; i <= rotationCount; i++){
    let current = newArray.pop()
    newArray.unshift(current);
    }
    
console.log(newArray.join(' '))
}
rotaryArray(['1', '2', '3', '4', '2']) // 3 4 1 2
rotaryArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])	
            //Orange Coconut Apple Banana