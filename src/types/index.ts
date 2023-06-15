import { Moment } from "moment";

export type VacationDay = {
  initial_date: Moment;
  number_of_days: number;
  selling_days: number;
  end_date: Moment;
};

export type VacationOption = {
  type: "integral" | "partial";
  periods: VacationDay[];
};
