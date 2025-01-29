import { differenceInYears } from "date-fns";

export const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

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