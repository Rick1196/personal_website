import { getMonth, getYear, parse } from "date-fns";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getStringDate = (date: string): string =>
  `${months[getMonth(new Date(`${date}T00:00:00`))]} ${getYear(
    new Date(`${date}T00:00:00`)
  )}`;

export { getStringDate };
