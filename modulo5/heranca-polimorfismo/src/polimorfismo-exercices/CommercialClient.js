"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialClient = void 0;
const Commerce_1 = require("./Commerce");
class CommercialClient extends Commerce_1.Commerce {
    constructor(name, registrationNumber, consumedEnergy, cnpj, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
    getCnpj() {
        return this.cnpj;
    }
}
exports.CommercialClient = CommercialClient;
