enum PalleteOptions {
  DEFAULT = 'DEFAULT',
  HORIZONTAL_CHART_CREDIT_LIMIT_BORDER = 'HORIZONTAL_CHART_CREDIT_LIMIT_BORDER',
  HORIZONTAL_CHART_CREDIT_LIMIT_BACKGROUND = 'HORIZONTAL_CHART_CREDIT_LIMIT_BACKGROUND',
  DANGER_BACKGROUND = 'DANGER_BACKGROUND',
  DANGER_BORDER = 'DANGER_BORDER',
  SUCCESS_BACKGROUND = 'SUCCESS_BACKGROUND',
  SUCCESS_BORDER = 'SUCCESS_BORDER',
  OUTSTANDING_RISK = 'OUTSTANDING_RISK',
  ICOME_STATEMENTS = 'ICOME_STATEMENTS',
  NEGATIVE_COLOR = 'NEGATIVE_COLOR',
  PUBLIC_RECORDS_SUMMARY = 'PUBLIC_RECORDS_SUMMARY',
  SBS_MICROFINANCE_QUALIFICATION = 'SBS_MICROFINANCE_QUALIFICATION',
  SBS_MICROFINANCE = 'SBS_MICROFINANCE',
  BAINKING_INFORMATION = 'BAINKING_INFORMATION',
  ACTIVELEFT = 'ACTIVELEFT',
  ACTIVERIGHT = 'ACTIVERIGHT',
  STATEMENTS_CHANGES = 'STATEMENTS_CHANGES',
  ASNEF_COMPANIES = 'ASNEF_COMPANIES',
}

export enum ThemeColors {
  White = '#FFFFFF',
  Black = '#000000',
  Primary = '#4cc1a1',
  Secondary = '#777777',
  Error = '#ed696b',
  Default = '#b7b7b7',
  Warning = '#FFC557',
  Success = '#1eb53a',
  Info = '#51b5e0',
  Detail = '#8a8989',
}

export enum Indicators {
  Minimum = '#1eb53a',
  Moderated = '#c5d65c',
  High = '#ebe35b',
  Maximum = '#fba13f',
  Default = '#ed696b',

  CreditLimit = '#8a8989', // ThemeColors.Detail,
  CreditLimitLight = '#c1c1c1', // ThemeColorsTinted.DetailLighter,
}

export enum ThemeColorsTinted {
  PrimaryLight = '#A2E8D1',
  PrimaryLighter = '#CDF2E5',
  PrimaryDark = '#2ac39d',
  PrimaryDarker = '#27b18f',

  SecondaryLightest = '#eaeaea',
  SecondaryLighter = '#dddddd',
  SecondaryLight = '#b7b7b7',
  SecondaryMiddleLight = '#8b8b8b',
  SecondaryMiddleDark = '#636363',
  SecondaryDark = '#373737',
  ColorBody = SecondaryDark,
  SecondaryDarker = '#1e1e1e',
  SmartGray = '#3d4548',

  ErrorLight = '#ff925c',
  ErrorLighter = '#ff9866',
  ErrorDark = '#ff5e10',
  ErrorDarker = '#ef4e00',

  WarningLight = '#FFDFA4',
  WarningLighter = '#ffd381',
  WarningDark = '#feb934',
  WarningDarker = '#ffad12',

  SuccessLight = '#60c659',
  SuccessLighter = '#4DDC43',
  SuccessDark = '#339e35',
  SuccessDarker = '#3d8e33',

  DetailDarker = '#313131',
  DetailDark = '#5b5b5b',
  DetailLight = '#a2a2a2',
  DetailLighter = '#c1c1c1',

  InfoDark = '#00a3dd',
  InfoDarker = '#0072c6',
  InfoLight = '#82c6e2',
  InfoLighter = '#d3ecf7',
}

enum FontSize {
  HORIZONTAL_CHART_CREDIT_LIMIT = 15,
  HORIZONTAL_CHART_ICOME_STATEMENTS = 12,
}

interface RiimEvolutionScales {
  minimum: string;
  moderate: string;
  elevated: string;
  maximum: string;
  default: string;
  fontSize: number;
  isBold: boolean;
}

interface outstandingRiskVsCreditLimit {
  CreditLimit: string;
  RealRisk: string;
  Credit: string;
  negativeColor: string;
  barHeight: number;
}

const pallete: {
  [index: string]: Array<string> | any;
} = {
  [PalleteOptions.DEFAULT]: [
    ThemeColors.Primary,
    ThemeColors.Detail,
    ThemeColors.Secondary,
    ThemeColors.Success,
    ThemeColors.Info,
    ThemeColors.Error,
  ],
  [PalleteOptions.HORIZONTAL_CHART_CREDIT_LIMIT_BORDER]: [ThemeColors.Primary, ThemeColorsTinted.DetailLight],
  [PalleteOptions.HORIZONTAL_CHART_CREDIT_LIMIT_BACKGROUND]: [
    ThemeColorsTinted.PrimaryLight,
    ThemeColorsTinted.DetailLight,
  ],
  [PalleteOptions.DANGER_BACKGROUND]: [ThemeColorsTinted.ErrorLighter],
  [PalleteOptions.DANGER_BORDER]: [ThemeColors.Error],
  [PalleteOptions.SUCCESS_BACKGROUND]: [ThemeColorsTinted.SuccessLighter],
  [PalleteOptions.SUCCESS_BORDER]: [ThemeColors.Success],
  [PalleteOptions.OUTSTANDING_RISK]: [
    ThemeColors.Success,
    ThemeColorsTinted.SuccessLight,
    ThemeColors.Warning,
    ThemeColorsTinted.ErrorLighter,
    ThemeColorsTinted.ErrorLight,
    ThemeColors.Error,
  ],
  [PalleteOptions.ICOME_STATEMENTS]: [
    ThemeColorsTinted.DetailLight,
    ThemeColors.Detail,
    ThemeColors.Primary,
    ThemeColors.Success,
    ThemeColors.Info,
    ThemeColors.Error,
  ],
  [PalleteOptions.NEGATIVE_COLOR]: ThemeColorsTinted.ErrorDark,
  [PalleteOptions.PUBLIC_RECORDS_SUMMARY]: [
    ThemeColorsTinted.DetailLight,
    ThemeColorsTinted.SuccessLight,
    ThemeColorsTinted.PrimaryLight,
    ThemeColors.Success,
    ThemeColors.Info,
    ThemeColorsTinted.ErrorLight,
  ],
  [PalleteOptions.SBS_MICROFINANCE_QUALIFICATION]: {
    'Con Problemas Potenciales': ThemeColorsTinted.SuccessLight,
    Deficiente: ThemeColorsTinted.WarningDark,
    Dudoso: ThemeColorsTinted.PrimaryDark,
    Normal: ThemeColorsTinted.SuccessDark,
    Perdida: ThemeColors.Error,
  },
  [PalleteOptions.SBS_MICROFINANCE]: {
    'Créditos Vigentes': ThemeColorsTinted.SuccessDarker,
    'Créditos Judiciales y Castigados': ThemeColorsTinted.WarningDark,
    'Créditos Refinanciados': ThemeColorsTinted.PrimaryDark,
    Responsabilidades: ThemeColorsTinted.PrimaryLighter,
    'Créditos Vencidos': ThemeColors.Error,
    'Créditos Indirectos': ThemeColors.Primary,
    'Créditos Reestructurados': ThemeColorsTinted.DetailLight,
    'Créditos Judiciales ': ThemeColorsTinted.PrimaryLight,
    'Créditos Castigados': ThemeColorsTinted.SuccessDark,
    '% Vencido': ThemeColorsTinted.SuccessDark,
    'Días Vencidos': ThemeColors.Primary,
  },
  [PalleteOptions.BAINKING_INFORMATION]: [
    ThemeColorsTinted.DetailLighter,
    ThemeColorsTinted.SuccessLight,
    ThemeColorsTinted.PrimaryLight,
    ThemeColorsTinted.SuccessDark,
    ThemeColors.Info,
    ThemeColorsTinted.ErrorDark,
    ThemeColors.Detail,
    ThemeColorsTinted.DetailLight,
    ThemeColorsTinted.PrimaryLight,
    ThemeColorsTinted.SuccessDark,
    ThemeColors.Info,
    ThemeColorsTinted.ErrorDark,
  ],
  [PalleteOptions.ACTIVELEFT]: [ThemeColors.Detail, ThemeColorsTinted.DetailLighter],
  [PalleteOptions.ACTIVERIGHT]: [
    ThemeColors.Secondary,
    ThemeColorsTinted.SecondaryLight,
    ThemeColorsTinted.SecondaryMiddleLight,
  ],
  [PalleteOptions.STATEMENTS_CHANGES]: [
    ThemeColorsTinted.SecondaryLighter,
    ThemeColorsTinted.SecondaryMiddleLight,
    ThemeColors.Primary,
    '#ff30ce',
    ThemeColors.Error,
  ],
  [PalleteOptions.ASNEF_COMPANIES]: [
    ThemeColorsTinted.DetailLight,
    ThemeColorsTinted.SuccessLight,
    ThemeColorsTinted.PrimaryLight,
    ThemeColorsTinted.SuccessDark,
    ThemeColors.Info,
    ThemeColorsTinted.ErrorDark,
  ],
};

const palleteRiimEvolutionGraph: RiimEvolutionScales = {
  minimum: Indicators.Minimum,
  moderate: Indicators.Moderated,
  elevated: Indicators.High,
  maximum: Indicators.Maximum,
  default: Indicators.Default,
  fontSize: 14,
  isBold: true,
};

const palleteOutstandingRiskVsCreditLimit: outstandingRiskVsCreditLimit = {
  CreditLimit: ThemeColors.Detail,
  RealRisk: ThemeColorsTinted.DetailLighter,
  Credit: ThemeColors.Success,
  negativeColor: ThemeColors.Error,
  barHeight: 24,
};

const palleteAssetVsLiability: any = {
  nonCurrentAssets: ThemeColorsTinted.SecondaryMiddleLight,
  currentAssets: ThemeColorsTinted.SuccessLight,
  liability: ThemeColors.Success,
  nonCurrentLiability: ThemeColorsTinted.ErrorLight,
  netWorth: ThemeColorsTinted.SecondaryLight,
  maneuverFund: ThemeColorsTinted.SuccessLighter,
  negative: ThemeColorsTinted.ErrorLight,
  fontColor: 'white',
  fontSize: '1.2em',
  fontLabelSizeXL: '1.4em',
  fontLabelSizeMD: '1.1em',
  fontLabelSizeSM: '.8em',
};

const fontSizePerScale: any = {
  fontLabelSizeXL: 16,
  fontLabelSizeMD: 12,
  fontLabelSizeSM: 10,
};

export enum PERIODS {
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  SIX_MONTHLY = 'SIX_MONTHLY',
  YEARLY = 'YEARLY',
  BIANNUAL = 'BIANNUAL',
  QUADRENNIAL = 'QUADRENNIAL',
}

const PeriodMap: { [index: string]: PERIODS } = {
  [PERIODS.MONTHLY]: PERIODS.MONTHLY,
  [PERIODS.QUARTERLY]: PERIODS.QUARTERLY,
  [PERIODS.SIX_MONTHLY]: PERIODS.SIX_MONTHLY,
  [PERIODS.YEARLY]: PERIODS.YEARLY,
  [PERIODS.BIANNUAL]: PERIODS.BIANNUAL,
  [PERIODS.QUADRENNIAL]: PERIODS.QUADRENNIAL,
};

export interface PeriodDefinition {
  periods: number;
  middle: number;
  divider: number;
}

const periodTypeByYears: { [period in PERIODS]: number } = {
  MONTHLY: 2,
  QUARTERLY: 4,
  SIX_MONTHLY: 8,
  YEARLY: 16,
  BIANNUAL: 30,
  QUADRENNIAL: 40,
};

const groupingPeriodsDefinition: { [period in PERIODS]: PeriodDefinition } = {
  MONTHLY: {
    periods: 12,
    middle: 5,
    divider: 1,
  },
  QUARTERLY: {
    periods: 3,
    middle: 1,
    divider: 4,
  },
  SIX_MONTHLY: {
    periods: 2,
    middle: 1,
    divider: 6,
  },
  YEARLY: {
    periods: 1,
    middle: 0,
    divider: 12,
  },
  BIANNUAL: {
    periods: 0.5,
    middle: 0,
    divider: 24,
  },
  QUADRENNIAL: {
    periods: 0.25,
    middle: 0,
    divider: 48,
  },
};

const graphSizeMap: { [index: string]: number } = {
  L: 12,
  M: 8,
  S: 4,
};

export {
  pallete,
  PalleteOptions,
  FontSize,
  palleteRiimEvolutionGraph,
  palleteAssetVsLiability,
  fontSizePerScale,
  periodTypeByYears,
  groupingPeriodsDefinition,
  PeriodMap,
  graphSizeMap,
  palleteOutstandingRiskVsCreditLimit,
};
