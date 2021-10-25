
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

let {dez,cinquenta} = filtro
const itensTrintaMais = produtos.filter(({descricao, preco},cinquenta) => {
 
    if(preco > 50){
        return `Produto : ${descricao}  R$ ${preco}`
    }
})


console.log(itensTrintaMais)
