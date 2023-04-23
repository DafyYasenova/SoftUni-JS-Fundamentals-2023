function computerStore(array) {
    let validPriceWithTaxes = 0;
    let validPrice = 0;
    let taxes = 0.20;
    let i = 0;

    while (array[i] !== 'special') {
        if (array[i] == 'regular') {
            break;
        }
        let price = Number(array[i]);
        i++;
        if (price < 0) {
            console.log('Invalid price!');
            continue;
        }
        validPrice += price;

    }

    if (validPrice === 0) {
        console.log(`Invalid order!`);
    } else {
        taxes = validPrice * taxes;
        validPriceWithTaxes = validPrice + taxes;
        if (array[i] === 'special') {
            validPriceWithTaxes *= 0.90;
        } 
        
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${validPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${validPriceWithTaxes.toFixed(2)}$`)
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'])

computerStore(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular']))

computerStore((['regular']))

//2 way

function computerStore(input) {
    let validPriceWithTaxes = 0;
    let validPrice = 0;
    let command = input.shift();

    while (command !== 'special') {
        if (command === 'regular') {
            break;
        }
        let price = Number(command);
        if (price < 0) {
            console.log('Invalid price!');
            command = input.shift();
            continue;
        }
        validPrice += price;
        command = input.shift();
    }

    if (validPrice === 0) {
        console.log(`Invalid order!`);
    } else {
        let taxes = validPrice * 0.20;
        validPriceWithTaxes = validPrice * 1.2;
        if (command === 'special') {
            validPriceWithTaxes *= 0.90;
        }
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${validPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${validPriceWithTaxes.toFixed(2)}$`)
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'])

computerStore(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular']))

computerStore((['regular']))