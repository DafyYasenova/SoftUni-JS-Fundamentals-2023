function gramophone(albumName, bandName, songName) {

    let time = (albumName.length * bandName.length) * songName.length / 2;
    let rotacions = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotacions} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')