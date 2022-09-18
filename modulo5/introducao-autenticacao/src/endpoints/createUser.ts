import { Request } from "express"
import { Response } from "express"
import { createUser } from "../data/connection";
import { generateId, generateToken } from "../services/services";
import express,{ Express } from "express";
import cors from "cors";


const app: Express = express();
app.use(express.json());
app.use(cors());


app.post("/user/signup", async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const id = generateId();

        await createUser(id, userData.email, userData.password);

        const token = generateToken({
            id,
        });

        res.status(200).send({
            token,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});



