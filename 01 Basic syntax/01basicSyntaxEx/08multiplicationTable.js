function multiplicationTable(num) {
    let buff = "";
    let times = 0;
    for (let i = 0; i < 10; i++) {
        buff += num + "";
        times++;
        console.log(`${num} X ${times} = ${num * times}`)
    }

}
multiplicationTable(5)