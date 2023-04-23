function worldTour(input) {
    let currentLine = input.shift();
    let line = input.shift();

    while (line !== "Travel") {
        line = line.split(":");
        let command = line[0];

        switch (command) {
            case "Add Stop":
                currentLine = addStop(line[1], line[2], currentLine);
                console.log(currentLine);
                break;

            case "Remove Stop":
                currentLine = removeStop(line[1], line[2], currentLine);
                console.log(currentLine);
                break;

            case "Switch":
                currentLine = switchStr(line[1], line[2], currentLine);
                console.log(currentLine);
                break;
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${currentLine}`);

    function addStop(index, pushStr, currentLine) {
        index = Number(index);
        if (index < 0 || index >= currentLine.length) {
            return currentLine;
        }
        let fisrtHalf = currentLine.substring(0, index);
        let lastHalf = currentLine.substring(index);
        //currentLine = fisrtHalf.concat(pushStr, lastHalf);
        currentLine = fisrtHalf + pushStr + lastHalf;
        return currentLine;
    }

    function removeStop(startIndex, endIndex, currentLine) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if (!currentLine[startIndex] || !currentLine[endIndex]) {
            return currentLine;
        }
        let cut = currentLine.substring(startIndex, endIndex + 1);
        //currentLine = currentLine.replace(cut, '');
        return currentLine.replace(cut, '');
    }

    function switchStr(oldString, newString, currentLine) {

        if (currentLine.includes(oldString)) {
            return currentLine.replace(oldString, newString);
        }
        // let pattern = new RegExp(oldString, 'g');
        // return currentLine.replace(pattern, newString);
        return currentLine;
    }
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