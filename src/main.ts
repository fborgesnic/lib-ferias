import moment, { Moment } from "moment";
import { VacationOption } from "./types";

class Vacation {
  periods: VacationOption[];

  constructor() {
    this.periods = [];
  }

  startVacationPeriod({
    initial_date,
    type,
    number_of_days,
    selling_days,
  }: VacationOption) {
    this.#assertType(type, number_of_days);
    this.#assertNumberOfDays(number_of_days);

    number_of_days = type === "integral" ? 30 : number_of_days;
    selling_days = type === "integral" ? 0 : selling_days;
    type = number_of_days < 30 ? "partial" : "integral";

    this.periods.push({
      type: type,
      initial_date: moment(initial_date),
      number_of_days,
      selling_days,
      end_date: moment(initial_date).add(number_of_days, "days"),
    });
  }

  #assertType(type: string, number_of_days: number) {
    if (!type) {
      throw new TypeError("type must be specified");
    }

    if (type !== "integral" && type !== "partial") {
      throw new TypeError("type must be integral or partial");
    }

    if (number_of_days < 30 && type !== "partial") {
      throw new TypeError(
        "vacation type needs to be partial with number of days less than 30 days"
      );
    }

    if (number_of_days === 30 && type === "partial") {
      throw new TypeError("vacation with 30 days needs to be integral");
    }
  }

  #assertNumberOfDays(number_of_days: number) {
    if (
      number_of_days !== 30 &&
      number_of_days !== 20 &&
      number_of_days !== 16 &&
      number_of_days !== 15 &&
      number_of_days !== 14 &&
      number_of_days !== 10 &&
      number_of_days !== 8 &&
      number_of_days !== 7
    ) {
      throw new TypeError(
        "you must pass a valid number of days: 7, 8, 10, 14, 15, 16, 20 or 30"
      );
    }
  }
}

export { Vacation };
