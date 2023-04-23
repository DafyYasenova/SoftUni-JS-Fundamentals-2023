function triangleArea(a, b, c,) {

    // A={\sqrt  {s(s-a)(s-b)(s-c)}}.
    let s = (a + b + c) / 2;
    let area = s * (s - a) * (s - b) * (s - c);
    console.log(Math.sqrt(area))

}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
