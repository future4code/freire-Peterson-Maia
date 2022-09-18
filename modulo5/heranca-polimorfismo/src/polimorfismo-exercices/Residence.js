"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residence = void 0;
const Place_1 = require("./Place");
class Residence extends Place_1.Place {
    constructor(dwellersQuantity, cep) {
        super(cep);
        this.dwellersQuantity = dwellersQuantity;
    }
    getDwellersQuantity() {
        return this.dwellersQuantity;
    }
}
exports.Residence = Residence;
