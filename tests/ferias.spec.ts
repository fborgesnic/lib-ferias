import { expect } from "chai";
import moment from "moment";
import { Vacation } from "../src/main";

describe("#Vacation()", function () {
  context("with vacation type=integral", function () {
    it("should have a 30 days of vacation", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "integral",
        number_of_days: 30,
        selling_days: 0,
      });
      expect(vacation.periods.length).to.equal(1);
      expect(vacation.periods[0].number_of_days).to.equal(30);
    });

    it("should have a 0 selling days of vacation", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "integral",
        number_of_days: 30,
        selling_days: 0,
      });
      expect(vacation.periods[0].selling_days).to.equal(0);
    });

    it("should have an end_date equals today plus 30 days", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "integral",
        number_of_days: 30,
        selling_days: 0,
      });

      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-07-15").format()
      );
    });
  });

  context("with vacation and two periods", function () {
    it("should have a single period of 15 days of vacation", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 15,
        selling_days: 0,
      });

      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-06-30").format()
      );
    });

    it("should have two periods of 15 days of vacation", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 15,
        selling_days: 0,
      });
      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-06-30").format()
      );

      vacation.startVacationPeriod({
        initial_date: "2023-10-15",
        type: "partial",
        number_of_days: 15,
        selling_days: 0,
      });
      expect(vacation.periods[1].end_date?.format()).to.equal(
        moment("2023-10-30").format()
      );
    });

    it("should have a single period of 10 days of vacation", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 10,
        selling_days: 0,
      });
      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-06-25").format()
      );
    });

    it("should have a single period of 20 days of vacation", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 20,
        selling_days: 0,
      });
      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-07-05").format()
      );
    });
    it("should have a single period of 10 days of vacation selling 5 days", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 10,
        selling_days: 5,
      });

      expect(vacation.periods[0].selling_days).to.equal(5);
    });

    it("should have two periods of 10 days of vacation selling 5 days each", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 10,
        selling_days: 5,
      });
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 10,
        selling_days: 5,
      });

      expect(vacation.periods[0].selling_days).to.equal(5);
      expect(vacation.periods[1].selling_days).to.equal(5);
    });

    it("should have a single period of 20 days of vacation selling 10 days", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 20,
        selling_days: 10,
      });

      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-07-05").format()
      );
      expect(vacation.periods[0].selling_days).to.equal(10);
    });
  });

  context("with vacation and three periods", function () {
    it("should have a three periods with: first having 14 days, second 8 days and third 8 days", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-02-15",
        type: "partial",
        number_of_days: 14,
        selling_days: 0,
      });
      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-03-01").format()
      );

      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 8,
        selling_days: 0,
      });
      expect(vacation.periods[1].end_date?.format()).to.equal(
        moment("2023-06-23").format()
      );

      vacation.startVacationPeriod({
        initial_date: "2023-10-15",
        type: "partial",
        number_of_days: 8,
        selling_days: 0,
      });
      expect(vacation.periods[2].end_date?.format()).to.equal(
        moment("2023-10-23").format()
      );
    });
    it("should have a three periods with: first having 16 days, second 7 days and third 7 days", function () {
      const vacation = new Vacation();
      vacation.startVacationPeriod({
        initial_date: "2023-02-15",
        type: "partial",
        number_of_days: 16,
        selling_days: 0,
      });

      expect(vacation.periods[0].end_date?.format()).to.equal(
        moment("2023-03-03").format()
      );

      vacation.startVacationPeriod({
        initial_date: "2023-06-15",
        type: "partial",
        number_of_days: 7,
        selling_days: 0,
      });

      expect(vacation.periods[1].end_date?.format()).to.equal(
        moment("2023-06-22").format()
      );

      vacation.startVacationPeriod({
        initial_date: "2023-10-15",
        type: "partial",
        number_of_days: 7,
        selling_days: 0,
      });

      expect(vacation.periods[2].end_date?.format()).to.equal(
        moment("2023-10-22").format()
      );
    });
  });

  context("with invalid days", function () {
    it("should throw an error with invalid type", function () {
      const vacation = new Vacation();
      const fn = function () {
        vacation.startVacationPeriod({
          initial_date: "2023-06-15",
          type: "integral",
          number_of_days: 6,
          selling_days: 0,
        });
      };

      expect(fn).to.throw(
        "vacation type needs to be partial with number of days less than 30 days"
      );
    });

    it("should throw an error with invalid number of days", function () {
      const vacation = new Vacation();
      const fn = function () {
        vacation.startVacationPeriod({
          initial_date: "2023-06-15",
          type: "partial",
          number_of_days: 9,
          selling_days: 0,
        });
      };

      expect(fn).to.throw(
        "you must pass a valid number of days: 7, 8, 10, 14, 15, 16, 20 or 30"
      );
    });

    it("should throw an error with 30 days and type partial", function () {
      const vacation = new Vacation();
      const fn = function () {
        vacation.startVacationPeriod({
          initial_date: "2023-06-15",
          type: "partial",
          number_of_days: 30,
          selling_days: 0,
        });
      };

      expect(fn).to.throw("vacation with 30 days needs to be integral");
    });
  });
});
