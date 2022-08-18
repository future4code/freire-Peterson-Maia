// Exercício 9
console.log("\n--------------------------------------")
console.log("Exercício 9\n")

function contaAnagramas(palavra: string): number {
    let resultado: number = 1
    if (palavra.length === 0) {
        return resultado
    } else {
        for (let i = 1; i <= palavra.length; i++) {
            resultado *= i
        }
        return resultado
    }    
}

console.log(contaAnagramas("mesa"))