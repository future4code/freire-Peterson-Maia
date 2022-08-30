import express,{Request, Response} from "express"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())

type user = {
    id: number
    name:string
    type:string
    email:string
    age:number
}

let users: user[] = [

    {
        id: 1,
        name:"Peterson",
        email:"peterson@gmail.com",
        type:"ADMIN",
        age: 33
    },
    {
        id: 2,
        name:"Marcio",
        email:"peterson@gmail.com",
        type:"NORMAL",
        age: 33
    },
    {
        id: 3,
        name:"Carlos",
        email:"peterson@gmail.com",
        type:"NORMAL",
        age: 33
    },
    {
        id: 3,
        name:"Cris",
        email:"peterson@gmail.com",
        type:"NORMAL",
        age: 33
    }

]


app.get('/user', (req:Request, res: Response)=>{
    let codeError:number = 400
    
    try{
        const name:string = req.query.name as string
        const user: user | undefined = users.find((user)=> user.name === name)
        if(!user) {
            codeError = 404
            throw new Error('User not found')
        }
        }catch(error){
            res.status(codeError).send({message: error.message})

        }
})






app.listen(3003, ()=>{
    console.log("servidor rodando na porta 3003")
})