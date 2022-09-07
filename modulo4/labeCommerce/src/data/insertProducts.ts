import { productsData } from "../Types/typesProducts";
import { connection } from "./connection";

export default async function insertProducts(product:productsData):Promise<string> {
    const {id, name, price, image_url} = product
    await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        image_url
    })
    return `poduto ${name} criado com sucesso`
}