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

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}