 const audio = document.getElementById("audioPlayer");

const playBtn = document.getElementById("playBtn");

let playing = false;

playBtn.addEventListener("click",()=>{

if(!playing){

audio.play();

playBtn.innerHTML='<i class="fas fa-pause"></i>';

playing=true;

}else{

audio.pause();

playBtn.innerHTML='<i class="fas fa-play"></i>';

playing=false;

}

});