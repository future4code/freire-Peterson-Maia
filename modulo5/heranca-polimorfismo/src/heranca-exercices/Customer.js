"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const User_1 = require("./User");
class Customer extends User_1.User {
    constructor(id, email, name, password, creditCard, purchaseTotal) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
        this.purchaseTotal;
    }
    getPurchaseTotal() {
        return this.purchaseTotal;
    }
    setPurchaseTotal(newPuchase) {
        this.purchaseTotal = newPuchase;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
exports.Customer = Customer;
