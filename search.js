
function playRandom() {
    var randomSong = data[Math.floor(data.length * Math.random())];
    document.getElementById("randomImage").innerHTML = `<img class="image" src=${randomSong.image}>`
    document.getElementById("randomSong").innerHTML = "Song: " + randomSong.song;
    document.getElementById("randomArtist").innerHTML = "Artist: " + randomSong.artist;
    document.getElementById("randomGenre").innerHTML = "Genre " + randomSong.genre;
console.log(randomSong);
}


