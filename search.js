
function playRandom() {
    var randomSong = data[Math.floor(data.length * Math.random())];
    document.getElementById("randomImage").innerHTML = randomSong.image;
    document.getElementById("randomSong").innerHTML = randomSong.song;
    document.getElementById("randomArtist").innerHTML = randomSong.artist;
    document.getElementById("randomGenre").innerHTML = randomSong.genre;
console.log(randomSong);
}


