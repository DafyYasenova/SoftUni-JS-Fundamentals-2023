function lowerOrUppes(cases) {

    if (cases === cases.toUpperCase()) {
        console.log("upper-case")
    } else if (cases === cases.toLowerCase()) {
        console.log('lower-case')
    }

    //2way:
    
    if (cases.charCodeAt(0) >= 65 && cases.charCodeAt(0) <= 90){
        console.log("upper-case");
    } else if (cases.charCodeAt(0) >= 97 && cases.charCodeAt(0) <= 122){
        console.log('lower-case');
    }
}
lowerOrUppes('L')
lowerOrUppes('d')

