function inventory(array) {
    let heroes = [];

    for (let line of array) {
        let [name, level, items] = line.split(" / ");
        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        };
        heroes.push(currentHero);
    }
    heroes.sort((a, b) => a.level - b.level)
    heroes.forEach((heroes) => {
        console.log(`Hero: ${heroes.name}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items}`)
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
/* Hero: Hes
level => 1
items => Desolator, Sentinel, Antara
Hero: Derek
level => 12
items => BarrelVest, DestructionSword
Hero: Isacc
level => 25
items => Apple, GravityGun
*/ 
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'])
/* [
'Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'
]	Hero: Batman
level => 2
items => Banana, Gun
Hero: Superman
level => 18
items => Sword
Hero: Poppy
level => 28
items => Sentinel, Antara
*/