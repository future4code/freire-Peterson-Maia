import { Request } from "express";
import { Response } from "express";
import express,{ Express } from "express";
import cors from "cors";
import { getUserById } from "../data/User";
import { getData } from "../services/services";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/profile", async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await getUserById (authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });