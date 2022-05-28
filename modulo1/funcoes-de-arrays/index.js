//////////Exercícios de interpretação de código///////

//---> DEVER 1 <---//
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  // vai imprimir os nomes que estao no array, o index de cada um e o array total

//---> DEVER 2 <---//

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// vai ser impresso o nome

//---> DEVER 3 <---//

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  //vai imprimir todos os nomes que nao tenha o apelido "Chijo"


///////////Exercícios de escrita de código////////////

//---> DEVER 1 <---//

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 // A)
 const nomeDiguinhos = pets.map((item, index, array) => {
          console.log(item.nome)

 })
 // B)

 const nomeSalsicha = pets.filter((pet) => {
    if(pet.raca === "Salsicha"){
        return true
    }
})
console.log(nomeSalsicha)

 // C)

 const nomePoodle = pets.filter((pet) => {
    if(pet.raca === "Poodle"){
        return true
    }

})
console.log('voce ganhou um cupom de 10% para o banho do ', nomePoodle)


//---> DEVER 2 <---//

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
   
   // A)
    const nomesDosProdutos = produtos.map((produto) => {
    console.log(produto.nome)
})

    // B)
    const nomePreco = produtos.map((item) => {
        
        let precoComDesconto = item.preco * 0.05
        let desconto = item.preco - precoComDesconto

        return `${item.nome} ${desconto}`
        
    
    })
    console.log(nomePreco)

    // C)
    const listaDeItensBebidas = produtos.filter((produto) => {
        
        if(produto.categoria === "Bebidas"){
              console.log(produto.categoria)
            return true
         }
     })

      console.log(listaDeItensBebidas)

     // D)

     const listaDeItensYpê = produtos.filter((item) => {
        if(item.nome.includes('Ypê')){
            return item
         }
     })
      console.log(listaDeItensYpê)

    // E)
   
    const listaDeNomePreco = listaDeItensYpê.map((item) => {
         
    return `Compre ${item.nome} por ${item.preco}`
    }) 

    console.log(listaDeNomePreco)
