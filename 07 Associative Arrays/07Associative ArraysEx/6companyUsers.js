function companyUsers(input) {
    let companyList = {};

    for (let line of input) {
        // input.forEach(line => {
        let [company, personalID] = line.split(" -> ");
        if (!companyList.hasOwnProperty(company)) {
            companyList[company] = [];
        }
        companyList[company].push(personalID);
        // });
    }
    let sorted = Object.entries(companyList).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [kvp, values] of sorted) {
        console.log(`${kvp}`);
        let uniqueID = new Set(values); // чрез СЕТ ще намерим само уникалните ИД!
        for (let value of uniqueID) {
            console.log(`-- ${value}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
/*	HP
-- BB12345
Microsoft
-- CC12345
SoftUni
-- AA12345
-- BB12345	*/
companyUsers(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111',])
    /* Lenovo
-- XX23456
Movement
-- DD11111
SoftUni
-- AA12345
-- CC12344 */