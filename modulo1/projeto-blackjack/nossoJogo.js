function comprarCarta() {
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
   const numero = cartas[Math.floor(Math.random() * 13)]
 
   const naipe = naipes[Math.floor(Math.random() * 4)]
   let valor
 


   if (numero === "A") {
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
     valor = Number(numero)
   }
   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {texto: numero + naipe, valor: valor
   }
 
   return carta
 }
 let usuarioCartas1 = comprarCarta()
 let usuarioCartas2 = comprarCarta()
 let computadorCartas1 = comprarCarta()
 let computadorCartas2 = comprarCarta()


 if(confirm("Aperte confirmar para iniciar o fogo")){
  console.log(`Usuario -  cartas ${usuarioCartas1.texto} - ${usuarioCartas2.texto} = ${usuarioCartas1.valor + usuarioCartas2.valor}`)
  console.log(`Computador -  cartas ${computadorCartas1.texto} - ${computadorCartas2.texto} = ${computadorCartas1.valor + computadorCartas2.valor }`)
  console.log('Obrigado por jogar')
}
else {
   console.log('O jogo foi encerrado')
}

let pontosJogador = usuarioCartas1.valor + usuarioCartas2.valor
let pontosComputador = computadorCartas1.valor + computadorCartas2.valor   

if(pontosComputador > pontosJogador){
   console.log('O computador ganhou')
}
else if(pontosComputador < pontosJogador){
   console.log('O jogador ganhou')
}
else{
   console.log ('Empate!!') 
}








 /* EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */