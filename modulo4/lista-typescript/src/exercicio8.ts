// Exercício 8
console.log("\n--------------------------------------")
console.log("Exercício 8\n")

function formataData(data: string): number {
    const arrayDataString = data.split('/')
    const arrayDataNumber = [Number(arrayDataString[2]), Number(arrayDataString[1]), Number(arrayDataString[0])]
    const dataFormatada = new Date(arrayDataNumber[0], arrayDataNumber[1], arrayDataNumber[2])
    return dataFormatada.getTime()
}

function verificaRenovacaoRG(dataNascimento: string, dataEmissaoRG: string ): boolean {
    const dataAtual = new Date().getTime()
    const dataNascimentoFormatada = formataData(dataNascimento)
    const dataEmissaoRGFormatada = formataData(dataEmissaoRG)

    const idade = dataAtual - dataNascimentoFormatada
    const tempoCarteira = dataAtual - dataEmissaoRGFormatada

    if(idade <= 630720000000 ) {
        return tempoCarteira >= 157680000000

    } else if(idade >= 630720000000 || idade <= 1576800000000) {
        return tempoCarteira >= 315360000000

    } else if(idade > 1576800000000) {
        return tempoCarteira >= 473040000000
    }
}

console.log(verificaRenovacaoRG("21/04/1989", "10/05/2010"))