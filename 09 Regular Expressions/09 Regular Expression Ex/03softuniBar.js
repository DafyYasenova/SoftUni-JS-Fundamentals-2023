function softuniBar(data) {
let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/
    // /%(?<customer>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>[\d]+.?\d+)\$/
    // let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[A-Z][a-z]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/;
    let totalIncome = 0;
    for (let line of data) {
        if (line === 'end of shift') {
            break;
        }
        if (pattern.test(line)) {
            let currentCustomer = line.match(pattern);
            let customer = currentCustomer.groups.customer;
            let product = currentCustomer.groups.product;
            let count = currentCustomer.groups.count;
            let price = currentCustomer.groups.price;
            let income = Number(count) * Number(price);

            totalIncome += income;

            console.log(`${customer}: ${product} - ${income.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
softuniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
softuniBar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])