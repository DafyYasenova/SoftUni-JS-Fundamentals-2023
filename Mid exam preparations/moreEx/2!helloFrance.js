function helloFrance(input) {
    let collections = input.shift().split("|");
    let budget = Number(input.shift());

    let myCollection = [];
    let price = 0;
    let totalPrice = 0;
    let profit = 0;
    let sum = 0;

    for (let i = 0; i < collections.length; i++) {
        let items = collections.shift()
        items = items.split("->");
        let articules = items[0];
        price = Number(items[1]);

        switch (articules) {
            case "Clothes":
                if (price <= 50.00 && budget > price) {
                    budget -= price;
                    profit += price * 0.40;
                    totalPrice = price * 0.4 + price;
                    sum += totalPrice;
                    myCollection.push(totalPrice.toFixed(2));
                }
                break;
            case "Shoes":
                if (price <= 35.00) {
                    budget -= price;
                    profit += price * 0.40;
                    totalPrice = price * 0.4 + price;
                    sum += totalPrice;
                    myCollection.push(totalPrice.toFixed(2));
                }
                break;
            case "Accessories":
                if (price <= 20.50) {
                    budget -= price;
                    profit += price * 0.40;
                    totalPrice = price * 0.4 + price;
                    sum += totalPrice;
                    myCollection.push(totalPrice.toFixed(2));
                }
                break;

        }
        totalPrice = 0;
        items.shift();
    }

    console.log(myCollection.join(" "))
    console.log(`Profit: ${profit.toFixed(2)}`);

    if (budget + sum >= 150) {
        console.log("Hello, France!")
    } else {
        console.log(`Time to go.`);
    }
}
helloFrance(["Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60",
    "120"])
/* 60.62 35.35 51.13
Profit: 42.03
Hello, France!
*/
helloFrance(["Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60",
    "90"])
/* 28.42 21.84 46.62
Profit: 27.68
Time to go.
*/