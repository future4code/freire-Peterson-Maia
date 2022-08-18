// Exercício 6
console.log("\n--------------------------------------")
console.log("Exercício 6\n")

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const listaClientesBanco: Array<Cliente> = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function verificaSaldoNegativo(lista: Array<Cliente>): Array<Cliente> {
    const listaFiltrada = lista.map((cliente: Cliente) => {
        let totalDebitos = 0
        for (let debito of cliente.debitos) {
            totalDebitos += debito
        }
        return {
            cliente: cliente.cliente,
            saldoTotal: cliente.saldoTotal - totalDebitos,
            debitos: []
        }
    }).filter((cliente: Cliente) => {
        return cliente.saldoTotal < 0
    })

    return listaFiltrada
}

const clientesSaldoNegativo = verificaSaldoNegativo(listaClientesBanco)
console.log(clientesSaldoNegativo)