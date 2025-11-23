import { differenceInYears, getMonth, getYear } from "date-fns";

const tokensValues: { [key: string]: string | number } = {
    age: differenceInYears(new Date(), new Date("11/11/1996"))
}
export const replaceTokens = (text: string) => {
    const tokens = Object.keys(tokensValues);
    for (const token of tokens) {
        const key = `{{${token}}}`
        text = text.replaceAll(key, String(tokensValues[token]));
    }
    return text;
}


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

export const getStringDate = (date: string): string =>
    `${months[getMonth(new Date(`${date}T00:00:00`))]} ${getYear(
        new Date(`${date}T00:00:00`)
    )}`;
