var result = document.querySelector("#result");




// //Diss Track Filter
 function dissTrack () {
 var filter = data.filter(function (song){
     return song.genre === "Diss Track";
 })
 .map(function (genre) {
    return  `
    <div id="songFeatContainer" onclick="selectDissTrack(this)">
        <img class="songFeat image" src=${genre.image}>
        <div id="minorContainer">
        <p class="songFeat">Song: ${genre.song}</p>
        <p class="songFeat">Artist: ${genre.artist}</p>
        <p class="songFeat">Genre: ${genre.genre}</p>
        <p id="ghost" class="songFeat"> ${genre.music} </p>
      
        </div>
     </div>
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
       <div id="songFeatContainer" onclick="selectRock(this)">
       <img class="songFeat image" src=${genre.image}>
       <div id="minorContainer">
       <p class="songFeat">Song: ${genre.song}</p>
       <p class="songFeat">Artist: ${genre.artist}</p>
       <p class="songFeat">Genre: ${genre.genre}</p>
       <p class="ghost" class="songFeat"> ${genre.music} </p>
       
       </div>
       </div>
       `
        
    }) 



    const renderRock = `
    <p>${filterRock}</p>
    `
    result.innerHTML = renderRock;
    }

///////////////////////////////////////////////////////////////////////////

   

//Meme Dream 
function memeDream (){
    var filterMemeDream = data.filter(function (song) {
        return song.genre === "Meme Dream";
    })
    .map(function (genre) {
        return `
        <div id="songFeatContainer" onclick="selectMeme(this)">
        <img class="image" src=${genre.image}>
        <div id="minorContainer">
        <p class="songFeat">Song: ${genre.song}</p>
        <p class="songFeat">Artist: ${genre.artist}</p>
        <p class="songFeat">Genre: ${genre.genre}</p>
        <p class="ghost" class="songFeat"> ${genre.music} </p>
        </div>
        </div>
        `
    })

    const renderedMemeDream = `
    <p>${filterMemeDream}</p>
    `

    result.innerHTML = renderedMemeDream;
}
    

////////////////////////////////////////////////////////////////////////////////


var audio = new Audio();
audio.controls = true;
audio.loop = true;

// Establish all variables that your Analyser will use
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
// Initialize the MP3 player after the page loads all of its HTML into the window
window.addEventListener("load", initMp3Player, false);
function initMp3Player(){
    document.getElementById('audio_box').appendChild(audio);
    context = new AudioContext(); // AudioContext object instance
    analyser = context.createAnalyser(); // AnalyserNode method
    canvas = document.getElementById('analyser_render');
    ctx = canvas.getContext('2d');
    // Re-route audio playback into the processing graph of the AudioContext
    source = context.createMediaElementSource(audio); 
    source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
}
// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function frameLooper(){
    window.webkitRequestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = '#00CCFF'; // Color of the bars
    bars = 100;
    for (var i = 0; i < bars; i++) {
        bar_x = i * 3;
        bar_width = 2;
        bar_height = -(fbc_array[i] / 2);
        //  fillRect( x, y, width, height ) // Explanation of the parameters below
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
    
}

//Rock
function selectRock(ex) {
    var songName = ex.children[1].children[0].innerHTML;
    var songArtist = ex.children[1].children[1].innerHTML;
    var songGenre = ex.children[1].children[2].innerHTML;
    var songMusic = ex.children[1].children[3].innerHTML;
    //var songImage = ex.children[1].children[4].innerHTML;
    audio.src = songMusic;

   document.querySelector("#selectedSongContainer").innerHTML = 
   `
   <p>${songName}</p>
   <p>${songArtist}</>
   <p>${songGenre}</>
   </div>
   </div>
  `
  //document.querySelector(".ghost").display = "intial";
    

    //songMusic.push(audio);
}   


//Diss Track
function selectDissTrack(ex) {
     var songName = ex.children[1].children[0].innerHTML;
     var songArtist = ex.children[1].children[1].innerHTML;
     var songGenre = ex.children[1].children[2].innerHTML;
     var songMusic = ex.children[1].children[3].innerHTML;
     audio.src = songMusic;
 
    document.querySelector("#selectedSongContainer").innerHTML = 
    `
    <p>${songName}</p>
    <p>${songArtist}</>
    <p>${songGenre}</>
   `
     
 
     //songMusic.push(audio);
 }   


 //Meme
 function selectMeme(ex) {
    var songName = ex.children[1].children[0].innerHTML;
    var songArtist = ex.children[1].children[1].innerHTML;
    var songGenre = ex.children[1].children[2].innerHTML;
    var songMusic = ex.children[1].children[3].innerHTML;
    audio.src = songMusic;

   document.querySelector("#selectedSongContainer").innerHTML = 
   `
   <p>${songName}</p>
   <p>${songArtist}</>
   <p>${songGenre}</>
  `
    

    //songMusic.push(audio);
}   





