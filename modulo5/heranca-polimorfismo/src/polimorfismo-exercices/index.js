"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
const Residence_1 = require("./Residence");
const ResidentialClient_1 = require("./ResidentialClient");
console.log("[Polimorfismo]");
const cliente = {
    name: "Peterson",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 10;
    }
};
console.log(cliente.calculateBill());
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
const casa = new Residence_1.Residence(2, "44.222-600");
console.log(casa.getCep());
console.log(casa.getDwellersQuantity());
const residential = new ResidentialClient_1.ResidentialClient("Nome do residencial", 2, 100, "123.123.123-12", 10, "40.555-444");
console.log(residential.getCpf());
console.log(residential.calculateBill());
