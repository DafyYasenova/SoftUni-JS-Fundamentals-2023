function schoolGrades(input) {
    let studentsInfo = {};
    for (let line of input) {
        let newArr = line.split(" ")
        let nameStudent = newArr.shift();
        let grades = newArr.map(Number);

        if (!studentsInfo.hasOwnProperty(nameStudent)) {
            studentsInfo[nameStudent] = []; // запазваме оценките в масив, за да може да се събират!
        }
        studentsInfo[nameStudent] = studentsInfo[nameStudent].concat(grades);
        // конкатенираме 2 масива с КОНКАТ, оценките до момента + новите оценки!
    }
    let studentsEntries = Object.entries(studentsInfo);
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, grades] of sortedStudents) {
        let sum = 0;
        for (let grade of grades) {
            sum += grade;
        }
        let averageGrade = sum / grades.length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`)
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])
/* Lilly: 5.25
Tammy: 3.00
Tim: 5.75 */
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])
/* George: 5.00
Steven: 4.50
Tammy: 3.33 */