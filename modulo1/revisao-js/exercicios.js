// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let array1 = array.length

    return(array1)
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    array.reverse()

    return(array)
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 array.sort((a,b) => a - b)
    return(array)  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for (i = 0; i < array.length; i++){
        if(array[i] %2===0){
            numerosPares.push(array[i])
        }

    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosElevados = []
    for (i = 0; i < array.length; i++){
        if(array[i] %2===0){
         let numElevados =  array[i] ** 2
            numerosElevados.push(numElevados)
        }
    }
    return numerosElevados
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i < array.length; i++){ 
        if(array[i]>maior){
           maior = array[i]
        }
    }
 return maior
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let objetoDosNumeros = {}
   let maiorNumero = 0
   let menorNumero = 0
   let maiorDivisivelPorMenor = 0
   let diferenca = 0


if (num1 > num2){

menorNumero = num2
maiorNumero = num1
}
else {
    menorNumero = num1
    maiorNumero = num2
}
if (maiorNumero % menorNumero === 0){
    maiorDivisivelPorMenor = true
}

else{
   maiorDivisivelPorMenor = false
}

diferenca = maiorNumero - menorNumero
objetoDosNumeros.maiorNumero = maiorNumero
objetoDosNumeros.maiorDivisivelPorMenor = maiorDivisivelPorMenor
objetoDosNumeros.diferenca = diferenca


return objetoDosNumeros
 }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayPares = []
   for(let i = 0; i<n; i++){
       arrayPares[i] = i * 2
   }

return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
    triangulo = "Equilátero"
}
if (ladoA == ladoB && ladoA != ladoC && ladoB != ladoC){
    triangulo = "Isósceles"
}
if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
    triangulo = "Escaleno"
}
return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a,b) => a-b)
  let primeiro = array[array.length - 2]
  let segundo = array[1]
  return [primeiro, segundo]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const usuarioAnonimo = {
       ...pessoa,
       nome: 'ANÔNIMO'
   }
   return usuarioAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const autorizados = pessoas.filter((pessoa) => {
       if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
       return pessoa
   }
   
})
return autorizados
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
     const naoAutorizados = pessoas.filter((pessoaNao) => {
       if (pessoaNao.altura < 1.5 && pessoaNao.idade <= 14 && pessoaNao.idade >= 60){
       return pessoaNao
   }
   
})
return naoAutorizados
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 return contas.map((cliente) => {
     cliente.compras.map((compra) => {
         cliente.saldoTotal = cliente.saldoTotal - compra
     })
     cliente.compras = []
     return cliente
 })

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
     
    consultas.sort(function(a,b){
       if(a.nome > b.nome){
        return -1
       }
       else if (a.nome < b.nome){
        return 1
       }
       else {
        return 0
       }
     })
    
 return ordemAlfabetica

}
   


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}