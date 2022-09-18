import {Client} from "./Client"
import { Residence } from "./Residence"
import {ResidentialClient} from "./ResidentialClient"

console.log("[Polimorfismo]")

const cliente:Client = {
    name :"Peterson",
    registrationNumber:1,
    consumedEnergy:100,

    calculateBill:()=>{
        return 10
    }

  }
  console.log(cliente.calculateBill())



  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }


  const casa :Residence = new Residence(2,"44.222-600")
  console.log(casa.getCep());
  console.log(casa.getDwellersQuantity())


const residential = new ResidentialClient("Nome do residencial",2,100,"123.123.123-12",10,"40.555-444")
console.log(residential.getCpf())
console.log(residential.calculateBill())


