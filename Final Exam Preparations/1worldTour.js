function worldTour(input) {
    let currentLine = input.shift()
    let line = input.shift();

    while (line !== "Travel") {
        line = line.split(":");
        let command = line[0];

        switch (command) {
            case "Add Stop":
                let index = Number(line[1]);
                if (index < 0 || index >= currentLine.length) {
                    console.log(currentLine);
                    break;
                }
                let pushStr = line[2];
                let fisrtHalf = currentLine.substring(0, index);
                let lastHalf = currentLine.substring(index)
                currentLine = fisrtHalf.concat(pushStr, lastHalf);
                console.log(currentLine);
                break;

            case "Remove Stop":
                let startIndex = Number(line[1]);
                let endIndex = Number(line[2]);
                    if(!currentLine[startIndex] || !currentLine[endIndex]){
                        console.log(currentLine);
                        break;
                    }
                let cut = currentLine.substring(startIndex, endIndex + 1);
                currentLine = currentLine.replace(cut, '');
                console.log(currentLine);
                break;

            case "Switch":
                let oldString = line[1];
                let newString = line[2];
                if (currentLine.includes(oldString)) {
                    currentLine = currentLine.replace(oldString, newString);
                }
                console.log(currentLine);
                break;
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${currentLine}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
/* Hawai::RomeCyprys-Greece
Hawai::Rome-Greece
Bulgaria::Rome-Greece
Ready for world tour! Planned stops: Bulgaria::Rome-Greece
*/
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
/* AlbNigeriaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
Ready for world tour! Planned stops: AlbNaania:Bulgaria:Cyprus:Deuchland
*/