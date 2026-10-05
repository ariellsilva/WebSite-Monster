
let passos = 0;
function mudarImagem() {

const img = document.getElementById('logo-imagem');

if(passos == 0){
img.src="img/header monster.jpg";
passos = 1;
}else if (passos == 1){
img.src="img/header 1.jpg";
passos = 2;
}else if (passos == 2){
img.src="img/header 2.jpg";
passos = 0;
}
}

let passosVoltar = 0;

function voltarImagem() {
    const img = document.getElementById('logo-imagem');

    if (passosVoltar == 0) {
        img.src = "img/header 2.jpg";
        passosVoltar = 2;
    } else if (passosVoltar == 1) {
        img.src = "img/header 1.jpg";
        passosVoltar = 0;
    }else if(passosVoltar == 2){
        img.src = "img/header monster.jpg";
        passosVoltar = 1;
    }
}



const video = document.getElementById('meuVideo');
const btnPlay = document.getElementById('btnSom');

btnPlay.addEventListener('click', () => {
    video.muted = false;
    video.play();
    btnPlay.style.display = 'none';
})