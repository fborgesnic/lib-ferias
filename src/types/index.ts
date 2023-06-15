import { Moment } from "moment";

export type VacationDay = {
  initial_date: Moment | string;
  number_of_days: number;
  selling_days: number;
  end_date?: Moment;
};

export interface VacationOption extends VacationDay {
  type: "integral" | "partial";
}
