function charactersInRange(charA, charB) {
   
    let numFromCharA = charA.charCodeAt(0);
    let numFromCharB = charB.charCodeAt(0);
    let firstIndex = numFromCharA > numFromCharB ? numFromCharB : numFromCharA;
    let secondIndex = numFromCharA > numFromCharB ? numFromCharA : numFromCharB;
    let buff = ""
    for (let i = firstIndex + 1; i < secondIndex; i++) {
        buff += String.fromCharCode(i) + " ";
    }
    console.log(buff)

}
charactersInRange('a', 'd') // b c
charactersInRange('#', ':')
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
charactersInRange('C', '#')
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
