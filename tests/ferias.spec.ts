import { expect } from "chai";
import moment from "moment";
import { Vacation } from "../src/main";

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

  context("with vacation type=integral", function () {
    it("should have a 30 days of vacation", function () {
      const vacation = new Vacation("integral");
      vacation.startVacationPeriod("2023-06-15", "integral", 30, 0);
      expect(vacation.options.length).to.equal(1);
      expect(vacation.options[0].periods[0].number_of_days).to.equal(30);
    });

    it("should have a 0 selling days of vacation", function () {
      const vacation = new Vacation("integral");
      vacation.startVacationPeriod("2023-06-15", "integral", 30, 0);
      expect(vacation.options[0].periods[0].selling_days).to.equal(0);
    });

    it("should have an end_date equals today plus 30 days", function () {
      const vacation = new Vacation("integral");
      vacation.startVacationPeriod("2023-06-15", "integral", 30, 0);
      expect(vacation.options[0].periods[0].end_date.format()).to.equal(
        moment("2023-06-15").add(30, "days").format()
      );
    });
  });

  context.skip("with vacation and two periods", function () {
    it("should have a single period of 15 days of vacation", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-06-15", "partial", 15, 0);
    });

    it("should have two periods of 15 days of vacation", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-06-15", "partial", 15, 0);
      vacation.startVacationPeriod("2023-10-15", "partial", 15, 0);
    });

    it("should have a single period of 10 days of vacation", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-06-15", "partial", 10, 0);
    });

    it("should have a single period of 20 days of vacation", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-06-15", "partial", 20, 0);
    });
    it("should have a single period of 10 days of vacation selling 5 days", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-06-15", "partial", 10, 5);
    });

    it("should have two periods of 10 days of vacation selling 5 days each", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-06-15", "partial", 10, 5);
      vacation.startVacationPeriod("2023-10-15", "partial", 10, 5);
    });

    it("should have a single period of 20 days of vacation selling 10 days", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-06-15", "partial", 20, 10);
    });
  });

  context.skip("with vacation and three periods", function () {
    it("should have a three periods with first having 14 days, second 8 days and third 8 days", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-02-15", "partial", 14, 0);
      vacation.startVacationPeriod("2023-06-15", "partial", 8, 0);
      vacation.startVacationPeriod("2023-10-15", "partial", 8, 0);
    });
    it("should have a three periods with first having 16 days, second 7 days and third 7 days", function () {
      const vacation = new Vacation("partial");
      vacation.startVacationPeriod("2023-02-15", "partial", 16, 0);
      vacation.startVacationPeriod("2023-06-15", "partial", 7, 0);
      vacation.startVacationPeriod("2023-10-15", "partial", 7, 0);
      console.log(JSON.stringify(vacation, null, 2));
    });
  });
});
