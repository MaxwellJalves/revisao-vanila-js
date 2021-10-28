const imagemId = document.getElementById('logo')
const listaDeImagens = document.querySelectorAll("#logo img")

const selecao = document.getElementById('selecionado')

let index = 0

function iniciarAnimacaoCarrosel() {
    index++
    index = index > listaDeImagens.length -1 ? 0 : index;
    imagemId.style.transform = `translateX(${-index * 250}px)`
}

setInterval(iniciarAnimacaoCarrosel, 1000)