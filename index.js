// function playMusic(){
//     var music = new Audio('media/song.mp3');
//     music.play();
//}


var myAudio = document.getElementById("myAudio");
var isPlaying = false;
function togglePlay(){
    isPlaying? myAudio.pause(): myAudio.play();
};
myAudio.onplaying = function(){
    isPlaying = true;
};
myAudio.onpause = function(){
    isPlaying = false;
}