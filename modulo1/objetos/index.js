/////////////__Exercícios de interpretação de código__/////////////////////

// ---> DEVER 1 <---//

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// VAI IMPRIMIR  Matheus Nachtergaele, Virginia Cavendish E CANAL GLOBO, HORARIO 14H

// -->DEVER 2 <--//

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// PRIMEIRO VAI ACRESCENTAR GATO E SEU NOME DEPOIS VAI ACRESCENTAR TARTARUGA MUDANDO A LETRA A POR O DO GATO 
// OS TRES PONTOS SERVE PARA ACRENCENTAR UMA NOVA COLUNA DE NOMES


//--> DEVER 3 <--//

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// BACKENDER: FALSE
// ALTURA : UNDEFINED
//ELE IMPRIMIU AS COISAS QUE ESTA DENTRO min

/////////////////---Exercícios de escrita de código---////////////////////

//---> DEVER 1 <--//

let apelido ={

    nome: "Paulo",
    meuApelido: ["paulinho", 'Paulao', 'Pauleta']

}

console.log(`Ola meu nome é ${apelido.nome}, mas pode me char de ${apelido.meuApelido[0]}, ${apelido.meuApelido[1]}, ${apelido.meuApelido[2]}`)


let novosApelidos = { ...apelido, 
   
    meuApelido: ['Casqueta', 'cascão', 'casquinha']
}

console.log(novosApelidos)


//--> DEVER 2 <--//

let pessoa1 = {    
    nome: 'paulo',
    idade: 45,
    profissao: 'artesão'
}

let pessoa2 = {

    nome: 'marcio',
    idade: 38,
    profissao: 'engenheiro'
}
function minhaVida() {
    const tamanhoNome = pessoa1.nome.length     
return tamanhoNome

}
function minhaVida2() {
    const tamanhoNome2 = pessoa1.profissao.length     
return tamanhoNome2

}

console.log(`nome:${pessoa1.nome} - ${minhaVida()}, tenho ${pessoa1.idade} e minha frofissão é ${pessoa1.profissao}, ${minhaVida2()}`)


function minhaVida3() {
    const tamanhoNome = pessoa2.nome.length     
return tamanhoNome
}

function minhaVida4() {
    const tamanhoNome4 = pessoa2.profissao.length     
return tamanhoNome4

}
console.log(`nome:${pessoa2.nome} - ${minhaVida3()}, tenho ${pessoa2.idade} e minha frofissão é ${pessoa2.profissao} - ${minhaVida4()}`)

// ---> DEVER 3 < ---

carrinho = []

const fruta1 = {
    nome: "laranja",
    disponibilidade: true 
}
    
const fruta2 = { 
    nome: "manga",
    disponibilidade: true
}
   
const fruta3 = {
    nome: "pera",
    disponibilidade: true

}

function sacolao(fruta){
    const novasFrutas = {
        ...fruta1,
        ...fruta2,
        ...fruta3
    }
    carrinho = [fruta1, fruta2, fruta3]

    return carrinho
}


console.log(sacolao(carrinho.fruta1))













