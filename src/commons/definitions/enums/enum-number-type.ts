export enum numberType {
  PERCENTAGE = 'PERCENTAGE',
  RATIO = 'RATIO',
  CURRENCY = 'CURRENCY',
  DAY = 'DAY',
  DAYS = 'DAYS',
}

export const unitTypeToNumberMap: {
  [index: string]: numberType;
} = {
  PERCENTAGE: numberType.PERCENTAGE,
  Percent: numberType.PERCENTAGE,
  RATIO: numberType.RATIO,
  Ratio: numberType.RATIO,
  CURRENCY: numberType.CURRENCY,
  Currency: numberType.CURRENCY,
  DAY: numberType.DAY,
  Day: numberType.DAY,
  DAYS: numberType.DAYS,
  Days: numberType.DAYS,
};
