function matchFullName(text) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let names = text.match(pattern);
    console.log(names.join(" "));

}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")

// 2 way with EXEC:

function matchFullNameExec(text) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let names = [];

    while ((validName = pattern.exec(text)) !== null) {
        names.push(validName[0])
    }
    console.log(names.join(" "));

}
matchFullNameExec("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
