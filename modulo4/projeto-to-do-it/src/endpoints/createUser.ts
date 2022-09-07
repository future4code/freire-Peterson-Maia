import { Request, Response } from "express"
import insertUser from "../data/insertUser"

export default async function createUser(
    req:Request,
    res:Response
) {
    try{
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email

        ){
            res.status(400)
            .send('Prencha os campos "name", "nickname" e "email"')
        }

        const id:string = Date.now() + Math.random().toString()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email

        )
        
        res.status(200).send("Usuario Criado com sucesso")

    }catch(error){
        res.status(400).send({
        })
    }
}
   
