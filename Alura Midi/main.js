function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } 
    else {
        alert('Elemento ou seletor não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //classes dinâmicas
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {  //add uma classe ao elemento após apertar uma tecla no teclado
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }  
    }

    tecla.onkeyup = function () {  //remove uma classe ao elemento após apertar uma tecla no teclado
        tecla.classList.remove('ativa');
    }

}


