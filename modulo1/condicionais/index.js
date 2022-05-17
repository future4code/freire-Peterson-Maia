///////////Exercícios de interpretação de código/////////

//---> DEVER 1 <--- //
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }    // A ) se o numero for divisivel por 2 possou no teste se nao for, nao passou
    //  B) para nomeros Par ele imprime passou no teste
    //  C) para numeros impar ele  imprime nao passou no teste



//---> DEVER 2 <--- //

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//      //break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A) para mostrar o valor de uma fruta
// B) O valor sera 2.25
// C) Sera impreco o valor de 5 que e o valor do default 


// --> DEVER 3 <-- //

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
// A) esta recebendo um numero
// B) nao vai ter retorno porque nao tem mensagem para se por menor que 0
// C) hevera erro na linha do console.log na linha 54 porque nao tem nem um valor atribuido a mensagem 


//////////////Exercícios de escrita de código/////////////

//---> DEVER 1 <---

// const  idadeDirigir = Number(prompt ("DIGITE SUA IDADE"))

// function VaiDirigir(idade) {
    
// if(idade >= 18){
//     console.log('Você pode Dirigir')
// } else {
//     console.log('Você nao pode dirigir')
// }
// }
// VaiDirigir(idadeDirigir)


//--->DEVER 2 <--//

// let horarioEstudo = prompt('Digite qual seu horario de estudo Digite M / V /ou N')

// function estudo(letra1) {

// if (letra1 === 'm') {  
//     console.log('Bom dia!')
// }
// else if (letra1 === 'v') {  
//     console.log('Boa tarde!')
// }    
// else if (letra1 === 'n') {  
//         console.log('Boa noite!') 
// }
// }
// estudo(horarioEstudo)



//---> DEVER 4 <---//
// let letraEstudo = prompt('Digite a letra do horario que voce estuda')
// switch (letraEstudo) {
//     case 'm':
//         console.log('Bom dia!')
//         break;
//     case 'v':
//         console.log('Boa tarde!')
//         break;
//     case 'n':
//         console.log('Boa noite!')
//         break;
//     default:
//         console.log('Você digitou uma letra invalido')
//         break;
// }

     
//---> DEVER 4 <---//  

// let generoFilme = prompt ('Digite o genero do filme')
// let ingressoFilme = prompt ('Digite o valor do ingresso')

// function assistirFilme(genero, ingresso) {
//     if(genero === "fantasia" && ingresso < 15 ){
//         console.log('Bom filme!')
//     }
//     else {
//         console.log('Escolha outro filme!')
//     }

// }
// assistirFilme(generoFilme, ingressoFilme)








