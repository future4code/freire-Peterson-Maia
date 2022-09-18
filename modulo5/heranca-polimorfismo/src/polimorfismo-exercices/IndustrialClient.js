"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrialClient = void 0;
const Industry_1 = require("./Industry");
class IndustrialClient extends Industry_1.Industry {
    constructor(name, registrationNumber, consumedEnergy, industryNumber, machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industryNumber = industryNumber;
    }
    getIndutryNumber() {
        return this.industryNumber;
    }
}
exports.IndustrialClient = IndustrialClient;
