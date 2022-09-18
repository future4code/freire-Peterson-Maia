import {User} from './User'

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal
    }
  
    public getPurchaseTotal():number {
      return this.purchaseTotal
    }
    public setPurchaseTotal(newPuchase:number){
      this.purchaseTotal = newPuchase;
    }


    public getCreditCard(): string {
      return this.creditCard;
    }
  }