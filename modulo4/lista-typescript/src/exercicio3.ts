console.log("\n--------------------------------------")
console.log("Exercício 3\n")

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

function retornaFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number): Filme {
    const filme = {
        nome: nome,
        ano: ano,
        genero: genero,
        pontuacao: pontuacao
    }

    return filme
}

console.log(retornaFilme("Duna", 2021, GENERO.ACAO, 74))
console.log(retornaFilme("Lightyear", 2022, GENERO.COMEDIA))