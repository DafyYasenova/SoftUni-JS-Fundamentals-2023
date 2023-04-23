function commonElements(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                console.log(firstArray[i]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])

// 2 answer:
function commonElements2(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        let currentWord = firstArray[i];
        if (secondArray.includes(currentWord)) {
            console.log(currentWord);
        }
    }
}
commonElements2(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements2(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])

// 3 answer:
function commonElements3(firstArray, secondArray) {
    for (let el of firstArray) {
        if (secondArray.includes(el)) {
            console.log(el);
        }
    }
}
commonElements3(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements3(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']) 