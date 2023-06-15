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
    this.assertType(type);

    number_of_days = type === "integral" ? 30 : number_of_days;
    selling_days = type === "integral" ? 0 : selling_days;

    this.periods.push({
      type: type,
      initial_date: moment(initial_date),
      number_of_days,
      selling_days,
      end_date: moment(initial_date).add(number_of_days, "days"),
    });
  }

  assertType(type: string) {
    if (!type) {
      throw new TypeError("type must be specified");
    }

    if (type !== "integral" && type !== "partial") {
      throw new TypeError("type must be integral or partial");
    }
  }
}

export { Vacation };
