////////////Exercícios de interpretação de código/////////////

//---> DEVER 1 <---//
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)  

// RESULTADO 10, PORQUE ELE SOMOU O VALOR COM 5

//---> DEVER 2 <--//

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// ELE VAI LER TODOS OS NUMEROS A CIMA DE 18
// PRECISARIA COLOCAR let i = 0; i < array.length; i++



//---> DEVER 3 <---//

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//      linha += "*"
//    }
//    console.log(linha)
//   quantidadeAtual++

// }


///////////////Exercícios de escrita de código///////////


//---> DEVER 1 <--//

// let bichoEstimacao = Number(prompt('Quantos animais de estimação voce tem?'))
// let nomeDosPets = []

// if(bichoEstimacao === 0){
//     let seuAnimal = prompt("escreva o nome dos seus animais")
//     console.log('Voce pode adotar um Pet')  
// }
// else{
//    for( let quantidadeDePets = 0; quantidadeDePets < bichoEstimacao; quantidadeDePets++) {
//        let nomes = prompt("Digite o nome dos seus Pets")
//        nomeDosPets.push(nomes)  
//    }
// }
// console.log(nomeDosPets)  

//---> DEVER 2 <---//

let arrayPrincipal = [80, 30, 130, 40, 60, 70, 120, 90, 110, 55]
   
//---> A <---//

const imprimir = (array) => {
       for (i = 0; i < array.length; i++){
           console.log(array[i])
       }
    }
imprimir(arrayPrincipal)

// ---> B <---//

const imprimirDividido = (array) => {
    for (i = 0; i < array.length; i++){
     
     console.log(array[i]/10)
     }
    }
 imprimirDividido(arrayPrincipal)


//---> C < ---//

    const imprimirModulo = (array) => {
       for (i = 0; i < array.length; i++){
        if (array[i] %2===0){
        console.log(array[i])
        }
       }
    }
imprimirModulo(arrayPrincipal)

//---> D <---//

const imprimirIndex = (array) => {
    for (i = 0; i < array.length; i++){
     console.log(`O elemento index ${i} é ${array[i]}`)
     }
    }
 
imprimirIndex(arrayPrincipal)

//--> E <--//
let maior = 0
let menor = 0

const imprimirMaioreMenor = (array) => {
    for (i = 0; i < array.length; i++){
      if(array[i]>maior){
          maior=menor[i]
          menor=maior
      }
     
      else if (array[i]<menor){
          menor = array[i]
          
      }
             
     }

    console.log(`o maior numero é ${maior} e o menor é o ${menor}`)

    }
imprimirMaioreMenor(arrayPrincipal)


