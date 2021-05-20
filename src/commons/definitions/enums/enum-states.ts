export enum qualityTypes {
  POSITIVE = 'POSITIVE',
  NEGATINE = 'NEGATIVE',
  NEUTRAL = 'NEUTRAL',
  RECOMMENDATION = 'RECOMMENDATION',
}

export const qualityTypesToNumberMap: {
  [index: string]: qualityTypes;
} = {
  [qualityTypes.POSITIVE]: qualityTypes.POSITIVE,
  [qualityTypes.NEGATINE]: qualityTypes.NEGATINE,
  [qualityTypes.NEUTRAL]: qualityTypes.NEUTRAL,
  [qualityTypes.RECOMMENDATION]: qualityTypes.RECOMMENDATION,
};
