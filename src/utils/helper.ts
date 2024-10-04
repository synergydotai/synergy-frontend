import { TWClassNames } from "./types";

export function cls(
  ...classNames: (TWClassNames | string | null | undefined | false)[]
) {
  const validClasses = classNames.filter(className => !!className) as string[];
  return validClasses.join(" ");
}

export const formatWithSeparator = (
    num: number | string,
    separator: string = ","
  ) => {
    if (!num) return num;
    const [integer, decimal] = num.toString().split(".");
    const numArray = integer.split("");
    let strVal = "";
    while (numArray.length) {
      const threeVal = numArray.splice(-3).join("");
      strVal = (numArray.length ? separator : "") + threeVal + strVal;
    }
    return decimal ? `${strVal}.${decimal}` : strVal;
  };
  