const imagemId = document.getElementById('logo')
const listaDeImagens = document.querySelectorAll("#logo img")

const selecao = document.getElementById('selecionado')

let index = 0

function iniciarAnimacaoCarrosel() {
    index++
    index = index > listaDeImagens.length -1 ? 0 : index;
    imagemId.style.transform = `translateX(${-index * 250}px)`
}

setInterval(iniciarAnimacaoCarrosel, 1800)


const exibirImagemSelecionada = (value) => {
    selecao.style.transitionDuration = '1s';
    selecao.innerHTML = listaDeImagens[value].outerHTML.toString()
}