import { Request, Response } from "express"
import selectUserId from "../data/selectUserId"

export default async function getUserById(
    req:Request,
    res:Response
) {

    try{

        const user = await selectUserId(req.params.id)
        if(!user){
            res.status(404).send({
                message:'Usuario não encontrado'
            })
        }
        res.status(200).send({
            massage:"Sucesso!",
            id:user.id,
            nickname:user.nickname
        })




    }catch(error){
        res.status(400).send({


        })
    }
 
}