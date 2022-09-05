import { Response, Request } from "express";
import { productsInser } from "../Types/typesProducts";
import { productsData } from "../Types/typesProducts";

export default async function createProducts(req:Request, res: Response) {
    try{
        const {name, price, image_url}:productsInser = req.body
        if(!name || !price || image_url){
            throw new Error("os valores de name, price e imagem devem ser passados")

        }
        const productsData:productsData={
            id:Date.now().toString(),
            name,
            price,
            image_url

        }

        const anwser = await insertProducts(productsData)
        res.status(500).send({message:anwser})

    }catch(error:any){
        res.status(500).send({message: error.message})
    }
}