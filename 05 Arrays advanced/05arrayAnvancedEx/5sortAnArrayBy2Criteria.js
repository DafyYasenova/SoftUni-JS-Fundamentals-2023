function sortAnArrayBy2Criteria(array){
    array.sort((a, b) => {
        if(a.length - b.length == 0){
    return a.localeCompare(b);
        }
        return a.length - b.length
    });

    console.log(array.join("\n"))
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])