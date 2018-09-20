var result = document.querySelector("#result");

//Diss Track Filter
function dissTrack () {
var filter = data.filter(function (song){
    return song.genre === "Diss Track";
})
.map(function (genre) {
   return  `
   <div>${genre.image}
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
       <div>${genre.image}
       <p>artist:${genre.artist}</p>
       <p>genre:${genre.song}</p>
       `
    }) 
    
    const renderRock = `
    <p>${filterRock}</p>
    `
    result.innerHTML = renderRock;
    }
    