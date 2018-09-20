var result = document.querySelector("#result");

//Diss Track Filter
function dissTrack () {
var filter = data.filter(function (song){
    return song.genre === "Diss Track";
})
.map(function (genre) {
   return  `
   <img class="image" src=${genre.image}>
   <p>Artist:${genre.artist}<p>
   <p>Song:${genre.song}</p>
   `
}) 

const renderDissTrack = `
<p>${filter}</p>
`
result.innerHTML = renderDissTrack;
}

//Rock
function rock () {
    var filterRock = data.filter(function (song){
        return song.genre === "Rock";
    })
    .map(function (genre) {
       return  `
       <div id="songFeatContainer">
       <img class="songFeat image" src=${genre.image}>
       <div id="minorContainer">
       <p class="songFeat">Artist: ${genre.artist}</p>
       <p class="songFeat">Genre: ${genre.song}</p>
       <audio controls> <source src=${genre.music} type='audio/mpeg'></audio>
       </div>
       </div>
       `
    }) 
    
    const renderRock = `
    <p>${filterRock}</p>
    `
    result.innerHTML = renderRock;
    }

//Meme Dream 
function memeDream (){
    var filterMemeDream = data.filter(function (song) {
        return song.genre === "Meme Dream";
    })
    .map(function (genre) {
        return `
        <img class="image" src=${genre.image}>
        <p>artist:${genre.artist}</p>
        <p>genre:${genre.song}</p>
        `
    })

    const renderedMemeDream = `
    <p>${filterMemeDream}</p>
    `

    result.innerHTML = renderedMemeDream;
}
    