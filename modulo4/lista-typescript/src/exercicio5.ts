// Exercício 5
console.log("\n--------------------------------------")
console.log("Exercício 5\n")

type Usuario = {
    name: string,
    email: string,
    role: "user" | "admin"
}

const arrayUsuarios: Array<Usuario> = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir",  email: "ademir@email.com", role: "admin"},
	{name: "Aline",  email: "aline@email.com", role: "user"},
	{name: "Jéssica",  email: "jessica@email.com", role: "user"},  
	{name: "Adilson",  email: "adilson@email.com", role: "user"},  
	{name: "Carina",  email: "carina@email.com", role: "admin"}      
]

function buscarEmailAdmin(lista: Array<Usuario>): Array<string> {
    const listaFiltrada = lista.filter((usuario: Usuario) => {
        return usuario.role === "admin"
    }).map((usuario: Usuario) => {
        return usuario.email
    })
    return listaFiltrada
}

const listaEmailsAdmins = buscarEmailAdmin(arrayUsuarios)
console.log(listaEmailsAdmins)