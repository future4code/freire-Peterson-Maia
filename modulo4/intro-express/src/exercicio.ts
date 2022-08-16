// exercicio1
import express, {Request, Response} from "express";
import cors from 'cors'

import { AddressInfo } from "net";

type Dados ={
    id: number 
    nome: string,
    phone: string,
    email: string
}

let usuarios: Dados[] = [
    {
        id:   1,
        nome: "Cristiano",
        phone: "66666-7777",
        email: "email@email.com"
    },
    {
        id:   2,
        nome: "Carlos",
        phone: "77777-8888",
        email: "carlos@email.com"
    },
    {
        id:   3,
        nome: "Wilian",
        phone: "88888-9999",
        email: "wilian@email.com"
    }
]


const app = express();
app.use(express.json());


app.get('/',(req: Request, res: Response) =>{
    const resultado = "Servidor Funcionando"

    res.status(200).send(resultado)
    console.log(resultado)
})


app.get('/users', (req: Request, res: Response) =>{
    res.status(200).send(usuarios)
    console.log(usuarios)
})

app.get('/users/:id', (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const user = usuarios.filter(user => user.id === id)
    res.status(200).send(user)
    console.log(user)
})

app.put('/users/:id', (req: Request, res: Response) =>{
    const {id,nome} = req.body

     usuarios.forEach(item =>{
        item.phone = "815552-3332"
     })

     console.log(usuarios)
     res.status(200).send(usuarios[0])

})

app.delete('/users/:id', (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const use = usuarios.findIndex(user => user.id ===id)
    usuarios.splice(use, 3)
    res.status(200).send(usuarios)
    console.log(usuarios)

})



const server = app.listen(process.env.PORT || 3003, ( ) => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }


});;