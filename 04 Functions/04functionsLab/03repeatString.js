function repeatString(string, counter) {
    let result = '';
    for (let i = 0; i < counter; i++) {
        result += string;
    }
    return result;

}
repeatString("abc", 3);
repeatString("String", 2);
