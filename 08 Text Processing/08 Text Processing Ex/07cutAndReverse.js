function cutAndReverse(text) {
    let middleText = text.length / 2;
    let leftSide = text.substring(0, middleText).split("").reverse().join("");
    let rightSide = text.substring(middleText).split("").reverse().join("");

    console.log(leftSide);
    console.log(rightSide);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');