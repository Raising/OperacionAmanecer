export enum customFieldType {
  NUMERIC = 1,
  TEXT = 2,
  LIST = 3,
  DATE = 4,
  SELECT = 5,
  PHONE = 6,
}

export const customFieldTypeToNumberMap: {
  [index: string]: customFieldType;
} = {
  NUMERIC: customFieldType.NUMERIC,
  TEXT: customFieldType.TEXT,
  LIST: customFieldType.LIST,
  DATE: customFieldType.DATE,
  SELECT: customFieldType.SELECT,
  PHONE: customFieldType.PHONE,
};
