// Exercício 7
console.log("\n--------------------------------------")
console.log("Exercício 7\n")

type Produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

function ajustaPreco(preco :number): string {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const estoqueEmpresa: Array<Produto> = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function convertePrecosEstoque(lista: Array<Produto>): Array<Produto> {
    const listaConvertida = lista.map((produto: Produto) => {
        return {
            ...produto,
            valorUnitario: ajustaPreco(produto.valorUnitario as number)
        }
    }).sort((a, b) => {
        return a.quantidade - b.quantidade
    })

    return listaConvertida
}

console.log(convertePrecosEstoque(estoqueEmpresa))