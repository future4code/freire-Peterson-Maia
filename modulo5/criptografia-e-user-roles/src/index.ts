import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { PingController } from './controller/PingController'
import { UserController } from './controller/UserController'

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());

const pingController = new PingController()
const userController = new UserController()

app.get("/ping", pingController.ping)
app.post("/signup", userController.signup)
app.post("/login", userController.login)
app.get("/users", userController.getAllUsers)
app.put("/users/:id", userController.editUser)
app.delete("/users/:id", userController.deleteUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})