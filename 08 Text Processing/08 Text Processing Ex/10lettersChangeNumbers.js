function lettersChangeNumbers(input) {

    let allPassword = input.split(" ").filter(x => x.length > 1); 
    // филтрирам, защото имам празни места в инпута и скритите тестове гърмят!
    let alphabet = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let sum = 0;
    let numbers = 0;
    let alphabetNum = 0;

    for (let password of allPassword) {
        if (password[0].charCodeAt() >= 65 && password[0].charCodeAt() <= 90) {
            numbers = password.substring(1, password.length - 1)
            alphabetNum = alphabet.indexOf(password[0])
            sum += numbers / alphabetNum;

        } else if(password[0].charCodeAt() >= 97 && password[0].charCodeAt() <= 122){
            numbers = password.substring(1, password.length - 1);
            alphabetNum = alphabet.indexOf(password[0].toUpperCase());
            sum += numbers * alphabetNum;
        }
        if (password[password.length - 1].charCodeAt() >= 65 && password[password.length - 1].charCodeAt() <= 90) {
            
            alphabetNum = alphabet.indexOf(password[password.length - 1]);
            sum -= alphabetNum;
        }  else if(password[password.length -1].charCodeAt() >= 97 && password[password.length - 1].charCodeAt() <= 122){
           
            let alphabetNum = alphabet.indexOf(password[password.length - 1].toUpperCase());
            sum += alphabetNum;
        }
    }
    console.log(sum.toFixed(2))

}
lettersChangeNumbers('A12b s17G')//	330.00	//12/1=12, 12+2=14, 17*19=323, 323-7=316, 14+316=330
lettersChangeNumbers('P34562Z q2576f H456z') // 46015.13
lettersChangeNumbers('a1A') // 0.00