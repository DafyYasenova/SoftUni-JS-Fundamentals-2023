function addressBook(input) {
    let addressList = {};

    for (let line of input) {
        let [name, address] = line.split(":");
        addressList[name] = address;
    }
    let sortedList = Object.entries(addressList);
    sortedList.sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]));
// ако искам да ги сортитам по адреса - entryA[1].localeCompare(entryB[1])
    for (let [name, address] of sortedList) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])
/* Bill -> Ornery Rd
Peter -> Carlyle Ave
Tim -> Doe Crossing */
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])
/* 	Bill -> Gateway Way
Bob -> Redwing Ave
George -> Mesta Crossing
Jeff -> Huxley Rd
John -> Grover Rd
Peter -> Huxley Rd
Ted -> Gateway Way */