function matchDates(input) {
    // simple pattern: \b\d{2}([\/.-])[A-Z][a-z]{2}\1\d{4}\b
    
    let dates = input.shift();
    let pattern = /\b(?<day>\d{2})(?<sep>[\/.-])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})\b/g;
    let validDate = dates.matchAll(pattern);

    for (let match of validDate) {
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`)
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
/* Day: 13, Month: Jul, Year: 1928
Day: 10, Month: Nov, Year: 1934
Day: 25, Month: Dec, Year: 1937
*/
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);
/* Day: 11, Month: Dec, Year: 2010
Day: 18, Month: Jan, Year: 2014
*/

//2 way with EXEC:
function matchDatesExec(input) {
    let dates = input.shift();
    let pattern = /\b(?<day>\d{2})(?<sep>[\/.-])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})\b/g;
    
    while((validDate = pattern.exec(dates)) !== null){
         console.log(`Day: ${validDate.groups.day}, Month: ${validDate.groups.month}, Year: ${validDate.groups.year}`)
    } 
    // разширен запис:
    // while((validDate = pattern.exec(dates))!== null){
    //     let day = validDate.groups[`day`];
    //     let month = validDate.groups[`month`];
    //     let year = validDate.groups[`year`];
    //     console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    // }
}
matchDatesExec(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
/* Day: 13, Month: Jul, Year: 1928
Day: 10, Month: Nov, Year: 1934
Day: 25, Month: Dec, Year: 1937
*/
matchDatesExec(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);
/* Day: 11, Month: Dec, Year: 2010
Day: 18, Month: Jan, Year: 2014
*/