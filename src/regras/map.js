const exibirAlerta = () => alert('Iniciando rotina de estudo.')

/**============================================================*=
 * Utilizando o Map podemos percorrer todos os itens e retornar
 * todos os produtos com o preço promocional.
 *==============================================================*/

const produtos = [
    { descricao: 'FILÉ DE FRANGO - SADIA', preco: 24.0 },
    { descricao: 'CAFÉ PILÃO', preco: 10.0 },
    { descricao: 'LEITE NINHO 800g', preco: 24.9 },
    { descricao: 'DANONE', preco: 10.0 },
    { descricao: 'PÃO DE QUEIJO', preco: 10.0 },
    { descricao: 'QUEIJO TIPO A 500g ', preco: 24.0 },
    { descricao: 'FARINHA', preco: 7.5 },
    { descricao: 'DETERGENTE', preco: 3.24 },
    { descricao: 'PIZZA DA HORA - SADIA', preco: 26.5 },
    { descricao: 'CAMARÃO - 700KG', preco: 57.5 },
]

let filtro = produtos.map((produto) => {
    if (produto.preco < 25) {
        return {
            descricao: produto.descricao,
            preco: Number.parseFloat(
                produto.preco - (produto.preco * 20) / 100
            ).toFixed(2),
        }
    }
    return produto
})

const obterItensPromocionais = ()=>{
    const elementoHTML = document.querySelector("#promocao")
    filtro.map(value => value)
    .forEach(({descricao,preco}) =>{
         elementoHTML.innerHTML += `
        <li>${descricao} R$ ${preco}</li>
        
        
        `
    })
}

