function rightPlace(string, char, res) {
    
    let newString = "";
    for (let i = 0; i < string.length; i++){
        if (string[i] === '_'){
            newString += char;
        } else {
            newString += string[i]
        }
    }
    console.log (newString === res ? "Matched": "Not Matched");

    // 2 way: 
    // let result = string.replace('_', char);
    // let output = res === result ? "Matched" : "Not Matched";
    // console.log(output)
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')
