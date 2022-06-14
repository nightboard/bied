export const isNumber = (input: string): boolean => {
  if (input.match(/^-?\d+$/)) {
    return true;
  }
  return false;
};

export const getRawBytes = (n: number, width: number, z: string): string[] => {
  let nS = n.toString(2);

  z = z || "0";
  nS = nS + "";
  return (
    nS.length >= width ? nS : new Array(width - nS.length + 1).join(z) + nS
  ).split("");
};

export const complementBytes = (bytes: string[]): string[] => {
  return bytes.map((val) => {
    if (val === "1") return "0";
    return "1";
  });
};

export const getDecimal = (bytes: string[]): number => {
  const binaryString = bytes.join("");
  return parseInt(binaryString, 2);
};

export * from "./shift-bits";
export * from "./rotate-bits";
export * from "./binary-ops";
