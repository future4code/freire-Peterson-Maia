import { AddressInfo } from "net";
import express, {Express} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});