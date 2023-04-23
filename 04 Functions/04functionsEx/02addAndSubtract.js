function addAndSubtract(a, b, c) {
    let add = addTwoNumbers(a, b);
    let substract = substractTwoNumbers(add, c);
    return substract;

    function addTwoNumbers(a, b) {
        return a + b;
    }
    function substractTwoNumbers(a, b) {
        return a - b;
    }
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));

//2 way:
function addAndSubtract(a, b, c) {
    let sumTwoNumbers = (a, b) => a + b;
    let substractTwoNumbers = (a, b) => a - b;

    let sum = sumTwoNumbers(a, b);
    let substract = substractTwoNumbers(sum, c);
    return substract;
}