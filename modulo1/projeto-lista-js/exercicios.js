// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
 const altura = prompt('Digite uma mensagem!') 
const largura = prompt('Digite uma mensagem!')
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite uma mensagem!')
  const anoNascimento = prompt('Digite uma mensagem!')
  const idade = anoAtual - anoNascimento
     console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  IMC = peso / (altura * altura)

    return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario( ) {
  // implemente sua lógica aqui
const nome = prompt ('Digite uma mensagem!')
const idade = prompt ('Digite uma mensagem!')
const email = prompt ('Digite uma mensagem!')

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt ('Digite uma mensagem!')
  const cor2 = prompt ('Digite uma mensagem!')
  const cor3 = prompt ('Digite uma mensagem!')
   

   console.log([cor1, cor2,cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()

return string
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
            calculo = custo / valorIngresso
return calculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
string = string1 >= string2

return string
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array = array.shift()
  return array

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array = array.pop()
  return array

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const ultimo = array[array.length-1]
  const primeiro = array[0]
  array[array.length-1] = primeiro
  array[0] = ultimo
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  x = string1.toUpperCase()
  y = string2.toUpperCase()
  return x===y

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
anoatual = prompt('Digite uma mensagem!')
anoatual = prompt('Digite uma mensagem!')
anoatual = prompt('Digite uma mensagem!')




}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}