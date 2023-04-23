function fancyBarcodes(array) {
  let numberIteration = Number(array.shift());

  let pattern = /(@#{1,})(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;
  for (let i = 0; i < numberIteration; i++) {
    let barcode = array[i];
    let lineMatch = pattern.exec(barcode);

    let concatenateDigit = "";
    let isValid = false;

    while (lineMatch !== null) {
      isValid = true;
      let validMatch = lineMatch.groups.word;

      for (let ch of validMatch) {
        if (!isNaN(Number(ch))) {
          concatenateDigit += ch;
        }
      }
      lineMatch = pattern.exec(barcode);
    }

    if (isValid) {
      concatenateDigit = concatenateDigit !== "" ? concatenateDigit : "00";
      console.log(`Product group: ${concatenateDigit}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}

fancyBarcodes(["3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"])
/* Product group: 00
Product group: 0
Product group: 46
*/
fancyBarcodes(["6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#"])
/* Product group: 11
Product group: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group: 00
*/