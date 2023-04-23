function formatGrade(grade) {
    let gradeText = ''
    if (grade < 3.00) {
        gradeText = 'Fail';
    } else if (grade < 3.50) {
        gradeText = 'Poor';
    } else if (grade < 4.50){
        gradeText = 'Good';
    } else if(grade < 5.50){
        gradeText = 'Very good';
    } else {
        gradeText = 'Excellent';
    }

    if (grade < 3){
        console.log(`${gradeText} (${grade})`);
    } else{
        console.log(`${gradeText} (${grade.toFixed(2)})`);
    }
}
formatGrade(3.33);