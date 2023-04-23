function modernTimesOfHashTag(input) {
    let text = input.split(" ");
    let buff = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i].startsWith("#") && text[i].length > 1) {
           let isSpecial = true
            let specialWord = text[i].substring(1) // substring(1) || slice(1) премахва първия индекс, в случая #
            // за да е специална една дума, тя трябва да бъде само от малки или големи букви!
            for (let ch of specialWord) {
                if (ch.charCodeAt(0) < 65 || ch.charCodeAt(0) > 90 && ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
                    isSpecial = false;
                    break;
                }
            }
            if (isSpecial) {
                buff.push(specialWord);
            }
        }
    }
    console.log(buff.join("\n"));
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')