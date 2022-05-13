// Exercicio de interpretação

function minhaFuncao(variavel) {
	return variavel * 5
}                                           // A) vai imprimir uma multiplicação
                                             // B) nao iria imprimir nada!
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


// ____________________________________________________________________________________


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")   // A) determina se e verdadeiro ou falso, se tem a palavra "cenoura"
}                                                     // B) todas sao true

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// _________________________________________________________________________________________________

//////////////////// 1 ////////////////////
// A
function sobreMim() {
        console.log("Eu sou Peterson, tenho 33 anos, moro em Carmo - RJ e sou estudante.")

}
sobreMim()

// B
function dadosPessoais(){
    let nome = ('Peterson')
    let idade = ('33')
    let endereco = ('Carmo-rj')
    let profissao = ('Estudante')

    return `Eu sou ${nome}, tenho ${idade}, Moro em ${endereco} e minha profissao é ${profissao}!`
 
}
console.log(dadosPessoais())


//////////////////// 2 ///////////////////////

// A

function numeros(num1, num2) {
const soma = num1+num2

return soma

}

console.log(numeros(20,5))

// B

function somaboolen(num1, num2){

const comparar = num1 === num2

return comparar

}
console.log(somaboolen(5,5))

// C

function maiorIgual(num1, num2){

     const comparacao = num1 % num2

    return comparacao
}

console.log(maiorIgual(5,5))




let mensagem1 = prompt ("Escreva uma Menasagem")

function mensagemString(mensagem){


return mensagem
}

console.log(mensagemString(mensagem1))



////////////// 3 ///////////////////////


const somar = (num1, num2) => {

    return num1 + num2
}

const diminuir = (num1, num2) => {

    return num1 - num2
}

const multiplicar = (num1, num2) => {

    return num1 * num2
}

const dividir = (num1, num2) => {

    return num1 / num2
}


const primeiroNumero = Number(prompt("DIGITE O PRIMEIRO NUMERO"))
const segundoNumero = Number(prompt("DIGITE O SEGUNDO NUMERO"))

console.log(`Numero Inseridos no Comando: ${primeiroNumero} e ${segundoNumero} 
soma: ${somar(primeiroNumero, segundoNumero)}
diminuir: ${diminuir(primeiroNumero, segundoNumero)}
Multiplicar: ${multiplicar(primeiroNumero, segundoNumero)}
Dividir: ${dividir(primeiroNumero, segundoNumero)}
`)