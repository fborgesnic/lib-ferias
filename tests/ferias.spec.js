"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const main_1 = require("../src/main");
describe("#Vacation()", function () {
    context("with arguments", function () {
        it("should return an instance of Vacation with a type property", function () {
            const vacation = new main_1.Vacation("integral");
            (0, chai_1.expect)(vacation.type).to.equal("integral");
        });
        it("should Vacation with a type=integral", function () {
            const vacation = new main_1.Vacation("integral");
            (0, chai_1.expect)(vacation.type).to.equal("integral");
        });
        it("should Vacation with a type=partial", function () {
            const vacation = new main_1.Vacation("partial");
            (0, chai_1.expect)(vacation.type).to.equal("partial");
        });
        it("should throw an exception if type was not partial or integral", function () {
            const vacation = function () {
                new main_1.Vacation("other");
            };
            (0, chai_1.expect)(vacation).to.throw("type must be integral or partial");
        });
    });
});
