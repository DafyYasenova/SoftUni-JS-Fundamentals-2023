function partyTime(input) {
    let vipList = [];
    let regularList = [];
    let currentGuest = input.shift();

    while (currentGuest !== "PARTY") {
        let isVip = !isNaN(currentGuest[0]);
        if (isVip) {
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }
        currentGuest = input.shift();
    }

    let guestList = vipList.concat(regularList); // правим общ списък, започващ с ВИП
    for (let guest of input) { 
        guestList.splice(guestList.indexOf(guest), 1) //изтриваме всички съвпадения!
    }
    console.log(guestList.length);
    for (let guest of guestList) { // остават в списъка само тези, които не са дошли!
        console.log(`${guest}`)
    }
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])
/* 2
7IK9Yo0h
tSzE5t0p */
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'])
/* 2
xys2FYzn
MDzcM9ZK */