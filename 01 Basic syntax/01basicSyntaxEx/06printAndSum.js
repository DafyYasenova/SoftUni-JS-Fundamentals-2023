function printAndSum(startNum, endNum){
    let sum = 0;
    let counter = '';
for (let i = startNum; i <= endNum; i++){
    sum += i;
    counter += `${i} `;
    startNum++;
}
console.log(counter);
console.log(`Sum: ${sum}`)
}
printAndSum (5, 10)
printAndSum (0, 26)
printAndSum (50,60)