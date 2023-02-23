// Esta função recebe um seletor de áudio e tenta tocar o áudio correspondente.
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // Verifica se o elemento existe e é um elemento de áudio. Se sim, toca o áudio.
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        // Retorna uma mensagem de erro se o elemento não for encontrado ou o seletor for inválido.
        return ('Elemento não encontrado ou seletor inválido.');
    }
}

// Seleciona todas as teclas com a classe "tecla".
const listaDeTeclas = document.querySelectorAll('.tecla');

// Itera sobre todas as teclas na lista de teclas.
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // Seleciona a tecla atual na lista de teclas.
    const tecla = listaDeTeclas[contador];

    // Obtém a classe do instrumento da tecla atual.
    const instrument = listaDeTeclas[contador].classList[1];

    // Cria um seletor de áudio com base no ID do instrumento.
    const idAudio = `#som_${instrument}`;

    // Adiciona um evento onclick à tecla atual que toca o som do instrumento.
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // Adiciona um evento onkeydown à tecla atual que adiciona a classe "ativa" à tecla quando a tecla Space ou Enter é pressionada.
    tecla.onkeydown = function (event) {
        if (event.code == 'Space' || event.code == 'Enter') {
            tecla.classList.add('ativa');
        } else {
            // Retorna 0 se a tecla pressionada não for a tecla Space ou Enter.
            return 0;
        }
    }

    // Adiciona um evento onkeyup à tecla atual que remove a classe "ativa" da tecla quando a tecla é liberada.
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
