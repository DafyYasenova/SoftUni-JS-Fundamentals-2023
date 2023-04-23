function employees(arr) {
    let obj = {};
    for (let name of arr) {
        obj[name] = name.length;
    }

    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])

// 2 way:
function employees2(arr) {
    let result = [];

    for (let name of arr) {
        let myInfo = {
            name: name,
            personalNumber: name.length
        }
        result.push(myInfo);
    }
    for (let obj of result) {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`)
    }
}
employees2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
employees2([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])

// 3 way:
function employees3(list){
    let employeesList = {};
    list.forEach(person => {
        employeesList[person] = person.length;
    })
    for(const key in employeesList){
        console.log(`Name: ${key} -- Personal Number: ${employeesList[key]}`)
    }
}
employees3([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
employees3([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])