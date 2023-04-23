function inventory(array) {
    let collections = array.shift().split(", ");
    let commands = array.shift();

    while (commands !== "Craft!") {

        let tokens = commands.split(" - ");
        let currentCommand = tokens.shift();
        let item = tokens[0]
        switch (currentCommand) {
            case "Collect":
                if (!collections.includes(item)){
                    collections.push(item);
                }
                break;

            case "Drop":
                if (collections.includes(item)){
                        collections.splice(collections.indexOf(item), 1);
                    }
                break;

            case "Combine Items":
                let splitItem = item.split(":");
                let oldItem = splitItem[0];
                let newItem = splitItem[1];
               
                if(collections.includes(oldItem)){
                let index = collections.indexOf(oldItem);

                if(index >= 0) {
                   collections.splice(index +1, 0, newItem);
                }
            }
                break;
            case "Renew":
                // if (collections.includes(item)){
                    if(collections.indexOf(item) >= 0){
                    collections.splice(collections.indexOf(item), 1);
                    collections.push(item);
                    }
                //}
        }
        commands = array.shift();
    }
    console.log(collections.join(", "))
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'])
//Iron, Sword, Gold 
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'])
    //Sword, Bow, Iron