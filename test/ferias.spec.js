import { expect } from "chai";
import { Vacation } from "../main";

describe("#Vacation()", function () {
  context("with arguments", function () {
    it("should return an instance of Vacation with a type property", function () {
      const vacation = new Vacation("integral");
      expect(vacation.type).to.equal("integral");
    });

    it("should Vacation with a type=integral", function () {
      const vacation = new Vacation("integral");
      expect(vacation.type).to.equal("integral");
    });

    it("should Vacation with a type=partial", function () {
      const vacation = new Vacation("partial");
      expect(vacation.type).to.equal("partial");
    });

    it("should throw an exception if type was not partial or integral", function () {
      const vacation = function () {
        new Vacation("other");
      };
      expect(vacation).to.throw("type must be integral or partial");
    });
  });
});
