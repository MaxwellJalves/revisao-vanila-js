const promocaoClienteFidelidade = [
    { cliente: 'joao', pontos: 10 },
    { cliente: 'maria', pontos: 30 },
    { cliente: 'joao', pontos: 5 },
    { cliente: 'maria', pontos: 10 },
    { cliente: 'joao', pontos: 40 },
    { cliente: 'marcos', pontos: 10 },
]



const consultarPontuacao = (usuario) => {
 return   promocaoClienteFidelidade.reduce((acc, { cliente, pontos }) => {
        if (cliente === usuario) {
            acc += pontos
        }
        return acc
    }, 0)
}

function pesquisar(){
    const cliente = document.querySelector('#cliente').value  
    document.querySelector('.pontos').innerHTML = `<h1>${consultarPontuacao(cliente)}</h1>`
 // alert( `Consumidor ${cliente.toUpperCase()} pontuação atual : ${consultarPontuacao(cliente)}`)
}

