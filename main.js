function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; //guarda quais são as teclas que podem ser clicadas
    const instrumento = tecla.classList[1];//guarda quais são os adios disponiveis, usando o classe unica de cada tag audio
    const idAudio = `#som_${instrumento}`;//guarda o ID necessario pra acessar cada audio

    tecla.onclick = function() { // função Anonima
        tocaSom(idAudio);
    }
}
