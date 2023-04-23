function meetings(input) {
    let meetingsList = {};

    for (let line of input) {
        let [day, name] = line.split(" ");

        if (meetingsList.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)

        } else {
            meetingsList[day] = name;
            console.log(`Scheduled for ${day}`);

        }
    }
    for (let day in meetingsList) {
        console.log(`${day} -> ${meetingsList[day]}`)
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
/* Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday -> Peter
Wednesday -> Bill
Friday -> Tim */
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])
/* Scheduled for Friday
Scheduled for Saturday
Scheduled for Monday
Conflict on Monday!
Scheduled for Wednesday
Friday -> Bob
Saturday -> Ted
Monday -> Bill
Wednesday -> George */