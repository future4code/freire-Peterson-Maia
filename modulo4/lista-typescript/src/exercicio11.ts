// Exercício 11
console.log("\n--------------------------------------")
console.log("Exercício 11\n")

type Comparador = {
    valorRomano: string,
    valorDecimal: number
}

const tabelaConversao: Array<Comparador> = [
    {valorRomano: "M", valorDecimal: 1000},
    {valorRomano: "CM", valorDecimal: 900},
    {valorRomano: "D", valorDecimal: 500},
    {valorRomano: "CD", valorDecimal: 400},
    {valorRomano: "C", valorDecimal: 100},
    {valorRomano: "XC", valorDecimal: 90},
    {valorRomano: "L", valorDecimal: 50},
    {valorRomano: "XL", valorDecimal: 40},
    {valorRomano: "X", valorDecimal: 10},
    {valorRomano: "IX", valorDecimal: 9},
    {valorRomano: "V", valorDecimal: 5},
    {valorRomano: "IV", valorDecimal: 4},
    {valorRomano: "I", valorDecimal: 1}
]

function converteParaRomanos(numero: number): string {
    let numeroRomano: string = ""
    let i: number = 0
    while(numero > 0) {
        numero -= tabelaConversao[i].valorDecimal
        if (numero < 0) {
            numero += tabelaConversao[i].valorDecimal
            i++
        } else {
            numeroRomano += tabelaConversao[i].valorRomano
        }
    }
    return numeroRomano
}

console.log(converteParaRomanos(1990));