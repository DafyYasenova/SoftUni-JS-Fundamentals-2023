function reverseInPlace(array) {

    for (let i = 0; i < array.length / 2; i++) {
        let tempElement = array[i];

        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempElement;
    }
    console.log(array.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']) // e d c b a 	
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']) // nop klm hig def abc
// reverseInPlace(['33', '123', '0', 'dd']) // dd 0 123 33	