import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from "knex";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

export const connection = knex({
    client:"mysql",
    connection:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port:3306
    }
})



app.put("/user", createUser)
app.get('/user/:id', getUserById)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});