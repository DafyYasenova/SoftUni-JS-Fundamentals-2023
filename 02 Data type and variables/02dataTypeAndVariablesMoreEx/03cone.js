function cone(r, h) {
    // V = (1/3)πr2h
    // A =  πr(r + √(r2 + h2))
    let volume = Math.PI * (1 / 3) * (r * r) * h;
    let area = Math.PI * r * (r + Math.sqrt((r * r) + (h * h)));
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)
}
cone(3, 5);
cone(3.3, 7.8)