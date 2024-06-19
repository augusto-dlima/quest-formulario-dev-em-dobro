let botao = document.getElementsByClassName('enviar')[0];
let input = document.querySelectorAll('.input')
let validacao = document.getElementsByClassName('resposta-invalida')

botao.addEventListener('click', function () {

    input.forEach((campo, indice) => { campo.value === '' ? validacaoReprovada(campo, indice) : validacaoAprovada(campo, indice); })
})

function validacaoAprovada(campo, indice) {

    validacao[indice].classList.add('esconder')
    campo.classList.add('borda-verde')
    campo.classList.remove('borda-vermelha')

}

function validacaoReprovada(campo, indice) {

    validacao[indice].classList.remove('esconder')
    campo.classList.add('borda-vermelha')
    campo.classList.remove('borda-verde')
}



















