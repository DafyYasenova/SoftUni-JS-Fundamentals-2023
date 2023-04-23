function movies(input) {
    let movies = [];

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];
    // input.forEach(currentLine => {

        if (currentLine.includes("addMovie ")) {
            let name = currentLine.split("addMovie ")[1];
            movies.push({ name }); // в масива създавам обект!
        } else if (currentLine.includes("directedBy")) {
            let [name, director] = currentLine.split(" directedBy ");
            let currentMovie = movies.find(el => el.name === name);

            if (currentMovie) {
                currentMovie.director = director;
            }
        } else if (currentLine.includes("onDate")) {
            let [name, date] = currentLine.split(" onDate ");
            let currentMovie = movies.find(el => el.name === name);

            if (currentMovie) {
                currentMovie.date = date;
            }
        }
    }
    // });

    movies.forEach(currentMovie => {
        if (currentMovie.name && currentMovie.director && currentMovie.date) {
            console.log(JSON.stringify(currentMovie));
        }
    });

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])
/* {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"} */
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'])
/* {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"} */