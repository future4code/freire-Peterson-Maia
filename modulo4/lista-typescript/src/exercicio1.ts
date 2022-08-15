console.log("Exercício 1\n")

function saudacao(nome: string, dataNascimento: string): string {

    const arrayData: Array<string> = dataNascimento.split('/')
    const dia: string = arrayData[0]
    const mes: string = arrayData[1]
    const ano: string = arrayData[2]
    return `Olá, me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
}
console.log(saudacao("Peterson", "21/04/1989"))
