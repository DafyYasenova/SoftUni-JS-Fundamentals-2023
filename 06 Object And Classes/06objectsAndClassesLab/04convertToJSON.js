function convertToJSON(firstName, lastName, color) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: color
    }

    console.log(JSON.stringify(person))
}

convertToJSON('George', 'Jones', 'Brown')
convertToJSON('Peter', 'Smith', 'Blond')