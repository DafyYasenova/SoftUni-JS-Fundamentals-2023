function destinationMapper(data) {
    let pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
    let points = 0;
    let destination = [];
    const matchEl = data.match(pattern);

    if(matchEl){
        matchEl.forEach((el, i)=>{
        el = el.substring(1, el.length-1);
        points += el.length;
        destination.push(el);
        });
    }
console.log(`Destinations: ${destination.join(", ")}`);
console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
/* Destinations: Hawai, Cyprus
Travel Points: 11 */

destinationMapper("ThisIs some InvalidInput")
/* Destinations:
Travel Points: 0 */


