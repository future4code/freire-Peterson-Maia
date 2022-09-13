import { Request } from "express"
import { Response } from "express"
import { generateToken } from "../services/services";
import express,{ Express } from "express";
import cors from "cors";
import { getUserByEmail } from "../data/User";


const app: Express = express();
app.use(express.json());
app.use(cors());


app.post("/user/login", async (req: Request, res: Response) => {
    try {
      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
  
      const user = await getUserByEmail(userData.email);
  
      if (user.password !== userData.password) {
        throw new Error("Invalid password");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });