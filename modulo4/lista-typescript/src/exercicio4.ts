// Exercício 4
console.log("\n--------------------------------------")
console.log("Exercício 4\n")

enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Pessoa = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const arrayPessoas: Array<Pessoa> = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" , salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function buscarMarketingPresencial(lista: Array<Pessoa>): Array<Pessoa> {
    const listaFiltrada = lista.filter((pessoa: Pessoa) => {
        return pessoa.setor === SETOR.MARKETING && pessoa.presencial === true
    })
    return listaFiltrada
}

const arrayMarketingPresencial = buscarMarketingPresencial(arrayPessoas)
console.log(arrayMarketingPresencial)