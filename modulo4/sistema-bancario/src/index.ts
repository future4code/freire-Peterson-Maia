import express, { Express, Response, Request } from "express";
import cors from "cors";
import { accounts } from "./users";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users", (req: Request, res: Response) => {

    try {
        const { name, CPF, dateOfBirthAsString } = req.body

        const [day, month, year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        
        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()
        
        const ageInYaers: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if(ageInYaers < 18){
            res.statusCode = 406
            throw new Error("Usuario deve ter no menimo 18 anos")
        }
        accounts.push({
            name: name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })
        res.status(201).send("Conta criada com sucesso")


    } catch (error) {
        console.log("error")
        res.send(error.message)

    }
})

app.get("/users/all", ( req: Request, res: Response) => {

    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)

    } catch (error) {
        console.log(error)
        res.send(error.message)

    }
})

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});