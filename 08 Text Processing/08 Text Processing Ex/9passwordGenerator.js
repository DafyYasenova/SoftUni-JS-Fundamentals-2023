function passwordGenerator(input) {
    let password = input[0].concat(input[1]).toLowerCase();

    let currentWord = input[2].toUpperCase();
    let vowelChar = ['a', 'e', 'i', 'o', 'u'];
    let currentIndex = 0;

    for (let char of password) {
        if (vowelChar.includes(char)) {
            password = password.replace(char, currentWord[currentIndex++])
            if (currentWord[currentIndex] === undefined) {
                currentIndex = 0;
            }
        }
    }
    let currentPassword = password.split("").reverse().join("");
    console.log(`Your generated password is ${currentPassword}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])
// Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])
// Your generated password is srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])
// Your generated password is SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD