export const mapObjectToArray = (obj: Record<string, any>) => Object.keys(obj).map(k => obj[k]);
export const stringifyNumber = (val: number) => `${val}`;
export const isValueTruthy = (val: number) => !!val;
