// Exercício 10
console.log("\n--------------------------------------")
console.log("Exercício 10\n")

function validaCPF(cpf: string): boolean {
    const cpfFormatado: string = cpf.replace('.','').replace('.','').replace('-','')
    if (
        cpfFormatado === "00000000000" ||
        cpfFormatado === "11111111111" ||
        cpfFormatado === "22222222222" ||
        cpfFormatado === "33333333333" ||
        cpfFormatado === "44444444444" ||
        cpfFormatado === "55555555555" ||
        cpfFormatado === "66666666666" ||
        cpfFormatado === "77777777777" ||
        cpfFormatado === "88888888888" ||
        cpfFormatado === "99999999999"
    ) {
        return false
    } else {
        let D1: number = 0
        for(let i = 0, j = 10; i < cpfFormatado.length - 2; i++, j--) {
            D1 += Number(cpfFormatado[i]) * j        
        }
        D1 = D1 % 11
        D1 = 11 - D1
        if (D1 >= 10) {
            D1 = 0
        }
        if (D1 !== Number(cpfFormatado[9])) {
            return false
        } else {
            let D2: number = 0
            for(let i = 0, j = 11; i < cpfFormatado.length - 1; i++, j--) {
                D2 += Number(cpfFormatado[i]) * j
            }
            D2 = D2 % 11
            D2 = 11 - D2
            if (D2 >= 10) {
                D2 = 0
            }
            if (D2 !== Number(cpfFormatado[10])) {
                return false
            } else {
                return true
            }
        }
    }

}
console.log(validaCPF("111.111.111-11"))
console.log(validaCPF("145.382.206-20"))