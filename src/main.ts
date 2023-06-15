import moment, { Moment } from "moment";
import { VacationOption } from "./types";

class Vacation {
  type: string;
  options: VacationOption[];

  constructor(type: string) {
    this.assertType(type);
    this.type = type;
    this.options = [];
  }

  startVacationPeriod(
    startDate: string,
    type: "integral" | "partial",
    numberOfDays: number,
    sellingDays: number
  ) {
    this.assertType(type);

    numberOfDays = type === "integral" ? 30 : numberOfDays;
    sellingDays = type === "integral" ? 0 : sellingDays;

    this.options.push({
      type: type,
      periods: [
        {
          initial_date: moment(startDate),
          number_of_days: numberOfDays,
          selling_days: sellingDays,
          end_date: moment(startDate).add(numberOfDays, "days"),
        },
      ],
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
