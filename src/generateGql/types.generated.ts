/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Map: { input: any; output: any; }
  Metadata: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export enum AccountErrorCode {
  ACCOUNT_NOT_CONFIRMED = 'ACCOUNT_NOT_CONFIRMED',
  ACTIVATE_OWN_ACCOUNT = 'ACTIVATE_OWN_ACCOUNT',
  ACTIVATE_SUPERUSER_ACCOUNT = 'ACTIVATE_SUPERUSER_ACCOUNT',
  CHANNEL_INACTIVE = 'CHANNEL_INACTIVE',
  DEACTIVATE_OWN_ACCOUNT = 'DEACTIVATE_OWN_ACCOUNT',
  DEACTIVATE_SUPERUSER_ACCOUNT = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DELETE_NON_STAFF_USER = 'DELETE_NON_STAFF_USER',
  DELETE_OWN_ACCOUNT = 'DELETE_OWN_ACCOUNT',
  DELETE_STAFF_ACCOUNT = 'DELETE_STAFF_ACCOUNT',
  DELETE_SUPERUSER_ACCOUNT = 'DELETE_SUPERUSER_ACCOUNT',
  DUPLICATED_INPUT_ITEM = 'DUPLICATED_INPUT_ITEM',
  GRAPHQL_ERROR = 'GRAPHQL_ERROR',
  INACTIVE = 'INACTIVE',
  INVALID = 'INVALID',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  JWT_DECODE_ERROR = 'JWT_DECODE_ERROR',
  JWT_INVALID_CSRF_TOKEN = 'JWT_INVALID_CSRF_TOKEN',
  JWT_INVALID_TOKEN = 'JWT_INVALID_TOKEN',
  JWT_MISSING_TOKEN = 'JWT_MISSING_TOKEN',
  JWT_SIGNATURE_EXPIRED = 'JWT_SIGNATURE_EXPIRED',
  LEFT_NOT_MANAGEABLE_PERMISSION = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  MISSING_CHANNEL_SLUG = 'MISSING_CHANNEL_SLUG',
  NOT_FOUND = 'NOT_FOUND',
  OUT_OF_SCOPE_GROUP = 'OUT_OF_SCOPE_GROUP',
  OUT_OF_SCOPE_PERMISSION = 'OUT_OF_SCOPE_PERMISSION',
  OUT_OF_SCOPE_USER = 'OUT_OF_SCOPE_USER',
  PASSWORD_ENTIRELY_NUMERIC = 'PASSWORD_ENTIRELY_NUMERIC',
  PASSWORD_TOO_COMMON = 'PASSWORD_TOO_COMMON',
  PASSWORD_TOO_SHORT = 'PASSWORD_TOO_SHORT',
  PASSWORD_TOO_SIMILAR = 'PASSWORD_TOO_SIMILAR',
  REQUIRED = 'REQUIRED',
  UNIQUE = 'UNIQUE'
}

export type AccountInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type AccountRegisterInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the user. */
  email: Scalars['String']['input'];
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** the unique identities.id form kratos user */
  identityId: Scalars['ID']['input'];
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Password. */
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type AddressInput = {
  /** City. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** District. */
  cityArea?: InputMaybe<Scalars['String']['input']>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country?: InputMaybe<CountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
};

export enum AddressTypeEnum {
  BILLING = 'BILLING',
  SHIPPING = 'SHIPPING'
}

export type AssignedShiftActivitiesInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<ShiftColorEnum>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AssignedShiftInput = {
  AssignedShiftActivities?: InputMaybe<Array<InputMaybe<AssignedShiftActivitiesInput>>>;
  break?: InputMaybe<UnpaidBreakEnum>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<ShiftColorEnum>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  is24Hours?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sharedBy?: InputMaybe<Scalars['ID']['input']>;
  sharedDate?: InputMaybe<Scalars['Time']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AssignedShiftsInput = {
  AssignedShiftActivities?: InputMaybe<Array<InputMaybe<AssignedShiftActivitiesInput>>>;
  break?: InputMaybe<UnpaidBreakEnum>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<ShiftColorEnum>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is24Hours?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sharedBy?: InputMaybe<Scalars['ID']['input']>;
  sharedDate?: InputMaybe<Scalars['Time']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ChannelCreateInput = {
  availableShippingMethodsPerCountry?: InputMaybe<Array<InputMaybe<ShippingMethodsPerCountryInput>>>;
  countries?: InputMaybe<Array<InputMaybe<CountryDisplayInput>>>;
  currencyCode: Scalars['String']['input'];
  defaultCountry?: InputMaybe<CountryCode>;
  hasOrders?: InputMaybe<Scalars['Boolean']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  stockSettings?: InputMaybe<StockSettingsInput>;
  warehouses?: InputMaybe<Array<InputMaybe<WarehouseInput>>>;
};

export type ChannelUpdateInput = {
  currencyCode: Scalars['String']['input'];
  defaultCountry: CountryCode;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

/** An enumeration. */
export enum CountryCode {
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AO = 'AO',
  AQ = 'AQ',
  AR = 'AR',
  AS = 'AS',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  EU = 'EU',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FM = 'FM',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GU = 'GU',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MH = 'MH',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  PW = 'PW',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW'
}

export type CountryDisplayInput = {
  code: Scalars['String']['input'];
  country: Scalars['String']['input'];
};

export type DayNotesInput = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['Time']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type GetShiftsFilter = {
  includeOpenShifts?: InputMaybe<Scalars['Boolean']['input']>;
  includeRequests?: InputMaybe<Scalars['Boolean']['input']>;
  includeShifts?: InputMaybe<Scalars['Boolean']['input']>;
  shiftGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  shiftGroupMemberIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum LanguageCodeEnum {
  AF = 'AF',
  AF_NA = 'AF_NA',
  AF_ZA = 'AF_ZA',
  AGQ = 'AGQ',
  AGQ_CM = 'AGQ_CM',
  AK = 'AK',
  AK_GH = 'AK_GH',
  AM = 'AM',
  AM_ET = 'AM_ET',
  AR = 'AR',
  AR_AE = 'AR_AE',
  AR_BH = 'AR_BH',
  AR_DJ = 'AR_DJ',
  AR_DZ = 'AR_DZ',
  AR_EG = 'AR_EG',
  AR_EH = 'AR_EH',
  AR_ER = 'AR_ER',
  AR_IL = 'AR_IL',
  AR_IQ = 'AR_IQ',
  AR_JO = 'AR_JO',
  AR_KM = 'AR_KM',
  AR_KW = 'AR_KW',
  AR_LB = 'AR_LB',
  AR_LY = 'AR_LY',
  AR_MA = 'AR_MA',
  AR_MR = 'AR_MR',
  AR_OM = 'AR_OM',
  AR_PS = 'AR_PS',
  AR_QA = 'AR_QA',
  AR_SA = 'AR_SA',
  AR_SD = 'AR_SD',
  AR_SO = 'AR_SO',
  AR_SS = 'AR_SS',
  AR_SY = 'AR_SY',
  AR_TD = 'AR_TD',
  AR_TN = 'AR_TN',
  AR_YE = 'AR_YE',
  AS = 'AS',
  ASA = 'ASA',
  ASA_TZ = 'ASA_TZ',
  AST = 'AST',
  AST_ES = 'AST_ES',
  AS_IN = 'AS_IN',
  AZ = 'AZ',
  AZ_CYRL = 'AZ_CYRL',
  AZ_CYRL_AZ = 'AZ_CYRL_AZ',
  AZ_LATN = 'AZ_LATN',
  AZ_LATN_AZ = 'AZ_LATN_AZ',
  BAS = 'BAS',
  BAS_CM = 'BAS_CM',
  BE = 'BE',
  BEM = 'BEM',
  BEM_ZM = 'BEM_ZM',
  BEZ = 'BEZ',
  BEZ_TZ = 'BEZ_TZ',
  BE_BY = 'BE_BY',
  BG = 'BG',
  BG_BG = 'BG_BG',
  BM = 'BM',
  BM_ML = 'BM_ML',
  BN = 'BN',
  BN_BD = 'BN_BD',
  BN_IN = 'BN_IN',
  BO = 'BO',
  BO_CN = 'BO_CN',
  BO_IN = 'BO_IN',
  BR = 'BR',
  BRX = 'BRX',
  BRX_IN = 'BRX_IN',
  BR_FR = 'BR_FR',
  BS = 'BS',
  BS_CYRL = 'BS_CYRL',
  BS_CYRL_BA = 'BS_CYRL_BA',
  BS_LATN = 'BS_LATN',
  BS_LATN_BA = 'BS_LATN_BA',
  CA = 'CA',
  CA_AD = 'CA_AD',
  CA_ES = 'CA_ES',
  CA_ES_VALENCIA = 'CA_ES_VALENCIA',
  CA_FR = 'CA_FR',
  CA_IT = 'CA_IT',
  CCP = 'CCP',
  CCP_BD = 'CCP_BD',
  CCP_IN = 'CCP_IN',
  CE = 'CE',
  CEB = 'CEB',
  CEB_PH = 'CEB_PH',
  CE_RU = 'CE_RU',
  CGG = 'CGG',
  CGG_UG = 'CGG_UG',
  CHR = 'CHR',
  CHR_US = 'CHR_US',
  CKB = 'CKB',
  CKB_IQ = 'CKB_IQ',
  CKB_IR = 'CKB_IR',
  CS = 'CS',
  CS_CZ = 'CS_CZ',
  CU = 'CU',
  CU_RU = 'CU_RU',
  CY = 'CY',
  CY_GB = 'CY_GB',
  DA = 'DA',
  DAV = 'DAV',
  DAV_KE = 'DAV_KE',
  DA_DK = 'DA_DK',
  DA_GL = 'DA_GL',
  DE = 'DE',
  DE_AT = 'DE_AT',
  DE_BE = 'DE_BE',
  DE_CH = 'DE_CH',
  DE_DE = 'DE_DE',
  DE_IT = 'DE_IT',
  DE_LI = 'DE_LI',
  DE_LU = 'DE_LU',
  DJE = 'DJE',
  DJE_NE = 'DJE_NE',
  DSB = 'DSB',
  DSB_DE = 'DSB_DE',
  DUA = 'DUA',
  DUA_CM = 'DUA_CM',
  DYO = 'DYO',
  DYO_SN = 'DYO_SN',
  DZ = 'DZ',
  DZ_BT = 'DZ_BT',
  EBU = 'EBU',
  EBU_KE = 'EBU_KE',
  EE = 'EE',
  EE_GH = 'EE_GH',
  EE_TG = 'EE_TG',
  EL = 'EL',
  EL_CY = 'EL_CY',
  EL_GR = 'EL_GR',
  EN = 'EN',
  EN_AE = 'EN_AE',
  EN_AG = 'EN_AG',
  EN_AI = 'EN_AI',
  EN_AS = 'EN_AS',
  EN_AT = 'EN_AT',
  EN_AU = 'EN_AU',
  EN_BB = 'EN_BB',
  EN_BE = 'EN_BE',
  EN_BI = 'EN_BI',
  EN_BM = 'EN_BM',
  EN_BS = 'EN_BS',
  EN_BW = 'EN_BW',
  EN_BZ = 'EN_BZ',
  EN_CA = 'EN_CA',
  EN_CC = 'EN_CC',
  EN_CH = 'EN_CH',
  EN_CK = 'EN_CK',
  EN_CM = 'EN_CM',
  EN_CX = 'EN_CX',
  EN_CY = 'EN_CY',
  EN_DE = 'EN_DE',
  EN_DG = 'EN_DG',
  EN_DK = 'EN_DK',
  EN_DM = 'EN_DM',
  EN_ER = 'EN_ER',
  EN_FI = 'EN_FI',
  EN_FJ = 'EN_FJ',
  EN_FK = 'EN_FK',
  EN_FM = 'EN_FM',
  EN_GB = 'EN_GB',
  EN_GD = 'EN_GD',
  EN_GG = 'EN_GG',
  EN_GH = 'EN_GH',
  EN_GI = 'EN_GI',
  EN_GM = 'EN_GM',
  EN_GU = 'EN_GU',
  EN_GY = 'EN_GY',
  EN_HK = 'EN_HK',
  EN_IE = 'EN_IE',
  EN_IL = 'EN_IL',
  EN_IM = 'EN_IM',
  EN_IN = 'EN_IN',
  EN_IO = 'EN_IO',
  EN_JE = 'EN_JE',
  EN_JM = 'EN_JM',
  EN_KE = 'EN_KE',
  EN_KI = 'EN_KI',
  EN_KN = 'EN_KN',
  EN_KY = 'EN_KY',
  EN_LC = 'EN_LC',
  EN_LR = 'EN_LR',
  EN_LS = 'EN_LS',
  EN_MG = 'EN_MG',
  EN_MH = 'EN_MH',
  EN_MO = 'EN_MO',
  EN_MP = 'EN_MP',
  EN_MS = 'EN_MS',
  EN_MT = 'EN_MT',
  EN_MU = 'EN_MU',
  EN_MW = 'EN_MW',
  EN_MY = 'EN_MY',
  EN_NA = 'EN_NA',
  EN_NF = 'EN_NF',
  EN_NG = 'EN_NG',
  EN_NL = 'EN_NL',
  EN_NR = 'EN_NR',
  EN_NU = 'EN_NU',
  EN_NZ = 'EN_NZ',
  EN_PG = 'EN_PG',
  EN_PH = 'EN_PH',
  EN_PK = 'EN_PK',
  EN_PN = 'EN_PN',
  EN_PR = 'EN_PR',
  EN_PW = 'EN_PW',
  EN_RW = 'EN_RW',
  EN_SB = 'EN_SB',
  EN_SC = 'EN_SC',
  EN_SD = 'EN_SD',
  EN_SE = 'EN_SE',
  EN_SG = 'EN_SG',
  EN_SH = 'EN_SH',
  EN_SI = 'EN_SI',
  EN_SL = 'EN_SL',
  EN_SS = 'EN_SS',
  EN_SX = 'EN_SX',
  EN_SZ = 'EN_SZ',
  EN_TC = 'EN_TC',
  EN_TK = 'EN_TK',
  EN_TO = 'EN_TO',
  EN_TT = 'EN_TT',
  EN_TV = 'EN_TV',
  EN_TZ = 'EN_TZ',
  EN_UG = 'EN_UG',
  EN_UM = 'EN_UM',
  EN_US = 'EN_US',
  EN_VC = 'EN_VC',
  EN_VG = 'EN_VG',
  EN_VI = 'EN_VI',
  EN_VU = 'EN_VU',
  EN_WS = 'EN_WS',
  EN_ZA = 'EN_ZA',
  EN_ZM = 'EN_ZM',
  EN_ZW = 'EN_ZW',
  EO = 'EO',
  ES = 'ES',
  ES_AR = 'ES_AR',
  ES_BO = 'ES_BO',
  ES_BR = 'ES_BR',
  ES_BZ = 'ES_BZ',
  ES_CL = 'ES_CL',
  ES_CO = 'ES_CO',
  ES_CR = 'ES_CR',
  ES_CU = 'ES_CU',
  ES_DO = 'ES_DO',
  ES_EA = 'ES_EA',
  ES_EC = 'ES_EC',
  ES_ES = 'ES_ES',
  ES_GQ = 'ES_GQ',
  ES_GT = 'ES_GT',
  ES_HN = 'ES_HN',
  ES_IC = 'ES_IC',
  ES_MX = 'ES_MX',
  ES_NI = 'ES_NI',
  ES_PA = 'ES_PA',
  ES_PE = 'ES_PE',
  ES_PH = 'ES_PH',
  ES_PR = 'ES_PR',
  ES_PY = 'ES_PY',
  ES_SV = 'ES_SV',
  ES_US = 'ES_US',
  ES_UY = 'ES_UY',
  ES_VE = 'ES_VE',
  ET = 'ET',
  ET_EE = 'ET_EE',
  EU = 'EU',
  EU_ES = 'EU_ES',
  EWO = 'EWO',
  EWO_CM = 'EWO_CM',
  FA = 'FA',
  FA_AF = 'FA_AF',
  FA_IR = 'FA_IR',
  FF = 'FF',
  FF_ADLM = 'FF_ADLM',
  FF_ADLM_BF = 'FF_ADLM_BF',
  FF_ADLM_CM = 'FF_ADLM_CM',
  FF_ADLM_GH = 'FF_ADLM_GH',
  FF_ADLM_GM = 'FF_ADLM_GM',
  FF_ADLM_GN = 'FF_ADLM_GN',
  FF_ADLM_GW = 'FF_ADLM_GW',
  FF_ADLM_LR = 'FF_ADLM_LR',
  FF_ADLM_MR = 'FF_ADLM_MR',
  FF_ADLM_NE = 'FF_ADLM_NE',
  FF_ADLM_NG = 'FF_ADLM_NG',
  FF_ADLM_SL = 'FF_ADLM_SL',
  FF_ADLM_SN = 'FF_ADLM_SN',
  FF_LATN = 'FF_LATN',
  FF_LATN_BF = 'FF_LATN_BF',
  FF_LATN_CM = 'FF_LATN_CM',
  FF_LATN_GH = 'FF_LATN_GH',
  FF_LATN_GM = 'FF_LATN_GM',
  FF_LATN_GN = 'FF_LATN_GN',
  FF_LATN_GW = 'FF_LATN_GW',
  FF_LATN_LR = 'FF_LATN_LR',
  FF_LATN_MR = 'FF_LATN_MR',
  FF_LATN_NE = 'FF_LATN_NE',
  FF_LATN_NG = 'FF_LATN_NG',
  FF_LATN_SL = 'FF_LATN_SL',
  FF_LATN_SN = 'FF_LATN_SN',
  FI = 'FI',
  FIL = 'FIL',
  FIL_PH = 'FIL_PH',
  FI_FI = 'FI_FI',
  FO = 'FO',
  FO_DK = 'FO_DK',
  FO_FO = 'FO_FO',
  FR = 'FR',
  FR_BE = 'FR_BE',
  FR_BF = 'FR_BF',
  FR_BI = 'FR_BI',
  FR_BJ = 'FR_BJ',
  FR_BL = 'FR_BL',
  FR_CA = 'FR_CA',
  FR_CD = 'FR_CD',
  FR_CF = 'FR_CF',
  FR_CG = 'FR_CG',
  FR_CH = 'FR_CH',
  FR_CI = 'FR_CI',
  FR_CM = 'FR_CM',
  FR_DJ = 'FR_DJ',
  FR_DZ = 'FR_DZ',
  FR_FR = 'FR_FR',
  FR_GA = 'FR_GA',
  FR_GF = 'FR_GF',
  FR_GN = 'FR_GN',
  FR_GP = 'FR_GP',
  FR_GQ = 'FR_GQ',
  FR_HT = 'FR_HT',
  FR_KM = 'FR_KM',
  FR_LU = 'FR_LU',
  FR_MA = 'FR_MA',
  FR_MC = 'FR_MC',
  FR_MF = 'FR_MF',
  FR_MG = 'FR_MG',
  FR_ML = 'FR_ML',
  FR_MQ = 'FR_MQ',
  FR_MR = 'FR_MR',
  FR_MU = 'FR_MU',
  FR_NC = 'FR_NC',
  FR_NE = 'FR_NE',
  FR_PF = 'FR_PF',
  FR_PM = 'FR_PM',
  FR_RE = 'FR_RE',
  FR_RW = 'FR_RW',
  FR_SC = 'FR_SC',
  FR_SN = 'FR_SN',
  FR_SY = 'FR_SY',
  FR_TD = 'FR_TD',
  FR_TG = 'FR_TG',
  FR_TN = 'FR_TN',
  FR_VU = 'FR_VU',
  FR_WF = 'FR_WF',
  FR_YT = 'FR_YT',
  FUR = 'FUR',
  FUR_IT = 'FUR_IT',
  FY = 'FY',
  FY_NL = 'FY_NL',
  GA = 'GA',
  GA_GB = 'GA_GB',
  GA_IE = 'GA_IE',
  GD = 'GD',
  GD_GB = 'GD_GB',
  GL = 'GL',
  GL_ES = 'GL_ES',
  GSW = 'GSW',
  GSW_CH = 'GSW_CH',
  GSW_FR = 'GSW_FR',
  GSW_LI = 'GSW_LI',
  GU = 'GU',
  GUZ = 'GUZ',
  GUZ_KE = 'GUZ_KE',
  GU_IN = 'GU_IN',
  GV = 'GV',
  GV_IM = 'GV_IM',
  HA = 'HA',
  HAW = 'HAW',
  HAW_US = 'HAW_US',
  HA_GH = 'HA_GH',
  HA_NE = 'HA_NE',
  HA_NG = 'HA_NG',
  HE = 'HE',
  HE_IL = 'HE_IL',
  HI = 'HI',
  HI_IN = 'HI_IN',
  HR = 'HR',
  HR_BA = 'HR_BA',
  HR_HR = 'HR_HR',
  HSB = 'HSB',
  HSB_DE = 'HSB_DE',
  HU = 'HU',
  HU_HU = 'HU_HU',
  HY = 'HY',
  HY_AM = 'HY_AM',
  IA = 'IA',
  ID = 'ID',
  ID_ID = 'ID_ID',
  IG = 'IG',
  IG_NG = 'IG_NG',
  II = 'II',
  II_CN = 'II_CN',
  IS = 'IS',
  IS_IS = 'IS_IS',
  IT = 'IT',
  IT_CH = 'IT_CH',
  IT_IT = 'IT_IT',
  IT_SM = 'IT_SM',
  IT_VA = 'IT_VA',
  JA = 'JA',
  JA_JP = 'JA_JP',
  JGO = 'JGO',
  JGO_CM = 'JGO_CM',
  JMC = 'JMC',
  JMC_TZ = 'JMC_TZ',
  JV = 'JV',
  JV_ID = 'JV_ID',
  KA = 'KA',
  KAB = 'KAB',
  KAB_DZ = 'KAB_DZ',
  KAM = 'KAM',
  KAM_KE = 'KAM_KE',
  KA_GE = 'KA_GE',
  KDE = 'KDE',
  KDE_TZ = 'KDE_TZ',
  KEA = 'KEA',
  KEA_CV = 'KEA_CV',
  KHQ = 'KHQ',
  KHQ_ML = 'KHQ_ML',
  KI = 'KI',
  KI_KE = 'KI_KE',
  KK = 'KK',
  KKJ = 'KKJ',
  KKJ_CM = 'KKJ_CM',
  KK_KZ = 'KK_KZ',
  KL = 'KL',
  KLN = 'KLN',
  KLN_KE = 'KLN_KE',
  KL_GL = 'KL_GL',
  KM = 'KM',
  KM_KH = 'KM_KH',
  KN = 'KN',
  KN_IN = 'KN_IN',
  KO = 'KO',
  KOK = 'KOK',
  KOK_IN = 'KOK_IN',
  KO_KP = 'KO_KP',
  KO_KR = 'KO_KR',
  KS = 'KS',
  KSB = 'KSB',
  KSB_TZ = 'KSB_TZ',
  KSF = 'KSF',
  KSF_CM = 'KSF_CM',
  KSH = 'KSH',
  KSH_DE = 'KSH_DE',
  KS_ARAB = 'KS_ARAB',
  KS_ARAB_IN = 'KS_ARAB_IN',
  KU = 'KU',
  KU_TR = 'KU_TR',
  KW = 'KW',
  KW_GB = 'KW_GB',
  KY = 'KY',
  KY_KG = 'KY_KG',
  LAG = 'LAG',
  LAG_TZ = 'LAG_TZ',
  LB = 'LB',
  LB_LU = 'LB_LU',
  LG = 'LG',
  LG_UG = 'LG_UG',
  LKT = 'LKT',
  LKT_US = 'LKT_US',
  LN = 'LN',
  LN_AO = 'LN_AO',
  LN_CD = 'LN_CD',
  LN_CF = 'LN_CF',
  LN_CG = 'LN_CG',
  LO = 'LO',
  LO_LA = 'LO_LA',
  LRC = 'LRC',
  LRC_IQ = 'LRC_IQ',
  LRC_IR = 'LRC_IR',
  LT = 'LT',
  LT_LT = 'LT_LT',
  LU = 'LU',
  LUO = 'LUO',
  LUO_KE = 'LUO_KE',
  LUY = 'LUY',
  LUY_KE = 'LUY_KE',
  LU_CD = 'LU_CD',
  LV = 'LV',
  LV_LV = 'LV_LV',
  MAI = 'MAI',
  MAI_IN = 'MAI_IN',
  MAS = 'MAS',
  MAS_KE = 'MAS_KE',
  MAS_TZ = 'MAS_TZ',
  MER = 'MER',
  MER_KE = 'MER_KE',
  MFE = 'MFE',
  MFE_MU = 'MFE_MU',
  MG = 'MG',
  MGH = 'MGH',
  MGH_MZ = 'MGH_MZ',
  MGO = 'MGO',
  MGO_CM = 'MGO_CM',
  MG_MG = 'MG_MG',
  MI = 'MI',
  MI_NZ = 'MI_NZ',
  MK = 'MK',
  MK_MK = 'MK_MK',
  ML = 'ML',
  ML_IN = 'ML_IN',
  MN = 'MN',
  MNI = 'MNI',
  MNI_BENG = 'MNI_BENG',
  MNI_BENG_IN = 'MNI_BENG_IN',
  MN_MN = 'MN_MN',
  MR = 'MR',
  MR_IN = 'MR_IN',
  MS = 'MS',
  MS_BN = 'MS_BN',
  MS_ID = 'MS_ID',
  MS_MY = 'MS_MY',
  MS_SG = 'MS_SG',
  MT = 'MT',
  MT_MT = 'MT_MT',
  MUA = 'MUA',
  MUA_CM = 'MUA_CM',
  MY = 'MY',
  MY_MM = 'MY_MM',
  MZN = 'MZN',
  MZN_IR = 'MZN_IR',
  NAQ = 'NAQ',
  NAQ_NA = 'NAQ_NA',
  NB = 'NB',
  NB_NO = 'NB_NO',
  NB_SJ = 'NB_SJ',
  ND = 'ND',
  NDS = 'NDS',
  NDS_DE = 'NDS_DE',
  NDS_NL = 'NDS_NL',
  ND_ZW = 'ND_ZW',
  NE = 'NE',
  NE_IN = 'NE_IN',
  NE_NP = 'NE_NP',
  NL = 'NL',
  NL_AW = 'NL_AW',
  NL_BE = 'NL_BE',
  NL_BQ = 'NL_BQ',
  NL_CW = 'NL_CW',
  NL_NL = 'NL_NL',
  NL_SR = 'NL_SR',
  NL_SX = 'NL_SX',
  NMG = 'NMG',
  NMG_CM = 'NMG_CM',
  NN = 'NN',
  NNH = 'NNH',
  NNH_CM = 'NNH_CM',
  NN_NO = 'NN_NO',
  NUS = 'NUS',
  NUS_SS = 'NUS_SS',
  NYN = 'NYN',
  NYN_UG = 'NYN_UG',
  OM = 'OM',
  OM_ET = 'OM_ET',
  OM_KE = 'OM_KE',
  OR = 'OR',
  OR_IN = 'OR_IN',
  OS = 'OS',
  OS_GE = 'OS_GE',
  OS_RU = 'OS_RU',
  PA = 'PA',
  PA_ARAB = 'PA_ARAB',
  PA_ARAB_PK = 'PA_ARAB_PK',
  PA_GURU = 'PA_GURU',
  PA_GURU_IN = 'PA_GURU_IN',
  PCM = 'PCM',
  PCM_NG = 'PCM_NG',
  PL = 'PL',
  PL_PL = 'PL_PL',
  PRG = 'PRG',
  PS = 'PS',
  PS_AF = 'PS_AF',
  PS_PK = 'PS_PK',
  PT = 'PT',
  PT_AO = 'PT_AO',
  PT_BR = 'PT_BR',
  PT_CH = 'PT_CH',
  PT_CV = 'PT_CV',
  PT_GQ = 'PT_GQ',
  PT_GW = 'PT_GW',
  PT_LU = 'PT_LU',
  PT_MO = 'PT_MO',
  PT_MZ = 'PT_MZ',
  PT_PT = 'PT_PT',
  PT_ST = 'PT_ST',
  PT_TL = 'PT_TL',
  QU = 'QU',
  QU_BO = 'QU_BO',
  QU_EC = 'QU_EC',
  QU_PE = 'QU_PE',
  RM = 'RM',
  RM_CH = 'RM_CH',
  RN = 'RN',
  RN_BI = 'RN_BI',
  RO = 'RO',
  ROF = 'ROF',
  ROF_TZ = 'ROF_TZ',
  RO_MD = 'RO_MD',
  RO_RO = 'RO_RO',
  RU = 'RU',
  RU_BY = 'RU_BY',
  RU_KG = 'RU_KG',
  RU_KZ = 'RU_KZ',
  RU_MD = 'RU_MD',
  RU_RU = 'RU_RU',
  RU_UA = 'RU_UA',
  RW = 'RW',
  RWK = 'RWK',
  RWK_TZ = 'RWK_TZ',
  RW_RW = 'RW_RW',
  SAH = 'SAH',
  SAH_RU = 'SAH_RU',
  SAQ = 'SAQ',
  SAQ_KE = 'SAQ_KE',
  SAT = 'SAT',
  SAT_OLCK = 'SAT_OLCK',
  SAT_OLCK_IN = 'SAT_OLCK_IN',
  SBP = 'SBP',
  SBP_TZ = 'SBP_TZ',
  SD = 'SD',
  SD_ARAB = 'SD_ARAB',
  SD_ARAB_PK = 'SD_ARAB_PK',
  SD_DEVA = 'SD_DEVA',
  SD_DEVA_IN = 'SD_DEVA_IN',
  SE = 'SE',
  SEH = 'SEH',
  SEH_MZ = 'SEH_MZ',
  SES = 'SES',
  SES_ML = 'SES_ML',
  SE_FI = 'SE_FI',
  SE_NO = 'SE_NO',
  SE_SE = 'SE_SE',
  SG = 'SG',
  SG_CF = 'SG_CF',
  SHI = 'SHI',
  SHI_LATN = 'SHI_LATN',
  SHI_LATN_MA = 'SHI_LATN_MA',
  SHI_TFNG = 'SHI_TFNG',
  SHI_TFNG_MA = 'SHI_TFNG_MA',
  SI = 'SI',
  SI_LK = 'SI_LK',
  SK = 'SK',
  SK_SK = 'SK_SK',
  SL = 'SL',
  SL_SI = 'SL_SI',
  SMN = 'SMN',
  SMN_FI = 'SMN_FI',
  SN = 'SN',
  SN_ZW = 'SN_ZW',
  SO = 'SO',
  SO_DJ = 'SO_DJ',
  SO_ET = 'SO_ET',
  SO_KE = 'SO_KE',
  SO_SO = 'SO_SO',
  SQ = 'SQ',
  SQ_AL = 'SQ_AL',
  SQ_MK = 'SQ_MK',
  SQ_XK = 'SQ_XK',
  SR = 'SR',
  SR_CYRL = 'SR_CYRL',
  SR_CYRL_BA = 'SR_CYRL_BA',
  SR_CYRL_ME = 'SR_CYRL_ME',
  SR_CYRL_RS = 'SR_CYRL_RS',
  SR_CYRL_XK = 'SR_CYRL_XK',
  SR_LATN = 'SR_LATN',
  SR_LATN_BA = 'SR_LATN_BA',
  SR_LATN_ME = 'SR_LATN_ME',
  SR_LATN_RS = 'SR_LATN_RS',
  SR_LATN_XK = 'SR_LATN_XK',
  SU = 'SU',
  SU_LATN = 'SU_LATN',
  SU_LATN_ID = 'SU_LATN_ID',
  SV = 'SV',
  SV_AX = 'SV_AX',
  SV_FI = 'SV_FI',
  SV_SE = 'SV_SE',
  SW = 'SW',
  SW_CD = 'SW_CD',
  SW_KE = 'SW_KE',
  SW_TZ = 'SW_TZ',
  SW_UG = 'SW_UG',
  TA = 'TA',
  TA_IN = 'TA_IN',
  TA_LK = 'TA_LK',
  TA_MY = 'TA_MY',
  TA_SG = 'TA_SG',
  TE = 'TE',
  TEO = 'TEO',
  TEO_KE = 'TEO_KE',
  TEO_UG = 'TEO_UG',
  TE_IN = 'TE_IN',
  TG = 'TG',
  TG_TJ = 'TG_TJ',
  TH = 'TH',
  TH_TH = 'TH_TH',
  TI = 'TI',
  TI_ER = 'TI_ER',
  TI_ET = 'TI_ET',
  TK = 'TK',
  TK_TM = 'TK_TM',
  TO = 'TO',
  TO_TO = 'TO_TO',
  TR = 'TR',
  TR_CY = 'TR_CY',
  TR_TR = 'TR_TR',
  TT = 'TT',
  TT_RU = 'TT_RU',
  TWQ = 'TWQ',
  TWQ_NE = 'TWQ_NE',
  TZM = 'TZM',
  TZM_MA = 'TZM_MA',
  UG = 'UG',
  UG_CN = 'UG_CN',
  UK = 'UK',
  UK_UA = 'UK_UA',
  UR = 'UR',
  UR_IN = 'UR_IN',
  UR_PK = 'UR_PK',
  UZ = 'UZ',
  UZ_ARAB = 'UZ_ARAB',
  UZ_ARAB_AF = 'UZ_ARAB_AF',
  UZ_CYRL = 'UZ_CYRL',
  UZ_CYRL_UZ = 'UZ_CYRL_UZ',
  UZ_LATN = 'UZ_LATN',
  UZ_LATN_UZ = 'UZ_LATN_UZ',
  VAI = 'VAI',
  VAI_LATN = 'VAI_LATN',
  VAI_LATN_LR = 'VAI_LATN_LR',
  VAI_VAII = 'VAI_VAII',
  VAI_VAII_LR = 'VAI_VAII_LR',
  VI = 'VI',
  VI_VN = 'VI_VN',
  VO = 'VO',
  VUN = 'VUN',
  VUN_TZ = 'VUN_TZ',
  WAE = 'WAE',
  WAE_CH = 'WAE_CH',
  WO = 'WO',
  WO_SN = 'WO_SN',
  XH = 'XH',
  XH_ZA = 'XH_ZA',
  XOG = 'XOG',
  XOG_UG = 'XOG_UG',
  YAV = 'YAV',
  YAV_CM = 'YAV_CM',
  YI = 'YI',
  YO = 'YO',
  YO_BJ = 'YO_BJ',
  YO_NG = 'YO_NG',
  YUE = 'YUE',
  YUE_HANS = 'YUE_HANS',
  YUE_HANS_CN = 'YUE_HANS_CN',
  YUE_HANT = 'YUE_HANT',
  YUE_HANT_HK = 'YUE_HANT_HK',
  ZGH = 'ZGH',
  ZGH_MA = 'ZGH_MA',
  ZH = 'ZH',
  ZH_HANS = 'ZH_HANS',
  ZH_HANS_CN = 'ZH_HANS_CN',
  ZH_HANS_HK = 'ZH_HANS_HK',
  ZH_HANS_MO = 'ZH_HANS_MO',
  ZH_HANS_SG = 'ZH_HANS_SG',
  ZH_HANT = 'ZH_HANT',
  ZH_HANT_HK = 'ZH_HANT_HK',
  ZH_HANT_MO = 'ZH_HANT_MO',
  ZH_HANT_TW = 'ZH_HANT_TW',
  ZU = 'ZU',
  ZU_ZA = 'ZU_ZA'
}

export type OpenShiftActivitiesInput = {
  channelId: Scalars['ID']['input'];
  code?: InputMaybe<Scalars['String']['input']>;
  color: ShiftColorEnum;
  endTime: Scalars['Time']['input'];
  isPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  shiftGroupId: Scalars['ID']['input'];
  startTime: Scalars['Time']['input'];
};

export type OpenShiftInput = {
  ShiftActivities?: InputMaybe<Array<InputMaybe<OpenShiftActivitiesInput>>>;
  break?: InputMaybe<UnpaidBreakEnum>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<ShiftColorEnum>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  is24Hours?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sharedBy?: InputMaybe<Scalars['ID']['input']>;
  sharedDate?: InputMaybe<Scalars['Time']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
};

export type OpenShiftsInput = {
  ShiftActivities?: InputMaybe<Array<InputMaybe<OpenShiftActivitiesInput>>>;
  break?: InputMaybe<UnpaidBreakEnum>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<ShiftColorEnum>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is24Hours?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sharedBy?: InputMaybe<Scalars['ID']['input']>;
  sharedDate?: InputMaybe<Scalars['Time']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
};

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  ASC = 'ASC',
  /** Specifies a descending sort order. */
  DESC = 'DESC'
}

export type RequestOfferInput = {
  assignedShiftId: Scalars['ID']['input'];
  assignedUserShiftId: Scalars['ID']['input'];
  channelId: Scalars['ID']['input'];
  offeredToUserId?: InputMaybe<Scalars['ID']['input']>;
  requestNote?: InputMaybe<Scalars['String']['input']>;
  requestStatus?: InputMaybe<Scalars['String']['input']>;
  responseAt?: InputMaybe<Scalars['Time']['input']>;
  responseByUserId?: InputMaybe<Scalars['ID']['input']>;
  responseNote?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export enum RequestStatus {
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
  DENIED = 'DENIED',
  PENDING = 'PENDING'
}

export type RequestSwapInput = {
  assignedShiftId?: InputMaybe<Scalars['ID']['input']>;
  assignedShiftIdToSwap?: InputMaybe<Scalars['ID']['input']>;
  assignedUserShiftId: Scalars['ID']['input'];
  assignedUserShiftIdToSwap?: InputMaybe<Scalars['ID']['input']>;
  channelId: Scalars['ID']['input'];
  requestNote?: InputMaybe<Scalars['String']['input']>;
  responseAt?: InputMaybe<Scalars['Time']['input']>;
  responseByUserId?: InputMaybe<Scalars['ID']['input']>;
  responseNote?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type RequestTimeOffInput = {
  channelId: Scalars['ID']['input'];
  endTime?: InputMaybe<Scalars['Time']['input']>;
  is24Hours: Scalars['Boolean']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  requestNote?: InputMaybe<Scalars['String']['input']>;
  responseAt?: InputMaybe<Scalars['Time']['input']>;
  responseByUserId?: InputMaybe<Scalars['ID']['input']>;
  responseNote?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['Time']['input'];
  userId: Scalars['ID']['input'];
};

export enum RequestType {
  OFFER = 'OFFER',
  SWAP = 'SWAP',
  TIMEOFF = 'TIMEOFF'
}

export type RequestsInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  recipientId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type SettingInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  isAllowOpen: Scalars['Boolean']['input'];
  isCopyActivity: Scalars['Boolean']['input'];
  startOfWeek?: InputMaybe<Scalars['String']['input']>;
  timeOffReason?: InputMaybe<Array<InputMaybe<TimeOffReasonInput>>>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export enum ShiftColorEnum {
  BLUE = 'BLUE',
  CYAN = 'CYAN',
  DARKBLUE = 'DARKBLUE',
  DARKCYAN = 'DARKCYAN',
  DARKGREEN = 'DARKGREEN',
  DARKLAVENDER = 'DARKLAVENDER',
  DARKMAGENTA = 'DARKMAGENTA',
  DARKORANGE = 'DARKORANGE',
  GRAY = 'GRAY',
  GREEN = 'GREEN',
  LAVENDER = 'LAVENDER',
  MAGENTA = 'MAGENTA',
  ORANGE = 'ORANGE',
  PINK = 'PINK',
  PURPLE = 'PURPLE',
  RED = 'RED',
  WHITE = 'WHITE',
  YELLOW = 'YELLOW'
}

export enum ShiftErrorCode {
  GRAPHQL_ERROR = 'GRAPHQL_ERROR',
  INVALID = 'INVALID',
  NOT_FOUND = 'NOT_FOUND',
  REQUIRED = 'REQUIRED'
}

export type ShiftGroupInput = {
  channelId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type ShiftGroupMemberInput = {
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type ShippingMethodInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type ShippingMethodsPerCountryInput = {
  country: Scalars['String']['input'];
  shippingMethods?: InputMaybe<Array<InputMaybe<ShippingMethodInput>>>;
};

export enum StaffMemberStatus {
  /** User account has been activated. */
  ACTIVE = 'ACTIVE',
  /** User account has not been activated yet. */
  DEACTIVATED = 'DEACTIVATED'
}

export type StockSettingsInput = {
  trackInventory: Scalars['Boolean']['input'];
};

export type TimeCardEventInput = {
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  dateTime?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  timeCardId?: InputMaybe<Scalars['ID']['input']>;
};

export type TimeCardInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  clockInEvent?: InputMaybe<TimeCardEventInput>;
  clockOutEvent?: InputMaybe<TimeCardEventInput>;
  confirmedBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdDateTime?: InputMaybe<Scalars['Time']['input']>;
  endBreaks?: InputMaybe<TimeCardEventInput>;
  lastModifiedBy?: InputMaybe<Scalars['ID']['input']>;
  lastModifiedDateTime?: InputMaybe<Scalars['Time']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  startBreaks?: InputMaybe<TimeCardEventInput>;
};

export enum TimeCardStatus {
  APPROVED = 'APPROVED',
  BREAK_ON = 'BREAK_ON',
  BREAK_OUT = 'BREAK_OUT',
  CANCELLED = 'CANCELLED',
  CLOCKED_IN = 'CLOCKED_IN',
  CLOCKED_OUT = 'CLOCKED_OUT',
  DENIED = 'DENIED'
}

export type TimeOffInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<ShiftColorEnum>;
  endTime: Scalars['Time']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  is24Hours?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sharedBy?: InputMaybe<Scalars['ID']['input']>;
  sharedDate?: InputMaybe<Scalars['Time']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['Time']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type TimeOffReasonInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TimeSetupInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdDateTime?: InputMaybe<Scalars['Time']['input']>;
  isTimeSetup?: InputMaybe<Scalars['Boolean']['input']>;
  lastModifiedBy?: InputMaybe<Scalars['ID']['input']>;
  lastModifiedDateTime?: InputMaybe<Scalars['Time']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
};

export enum UnpaidBreakEnum {
  MIN_0 = 'MIN_0',
  MIN_15 = 'MIN_15',
  MIN_30 = 'MIN_30',
  MIN_45 = 'MIN_45',
  MIN_60 = 'MIN_60',
  MIN_75 = 'MIN_75',
  MIN_90 = 'MIN_90'
}

export enum UserSortField {
  /** Sort users by created at. */
  CREATED_AT = 'CREATED_AT',
  /** Sort users by email. */
  EMAIL = 'EMAIL',
  /** Sort users by first name. */
  FIRST_NAME = 'FIRST_NAME',
  /** Sort users by last modified at. */
  LAST_MODIFIED_AT = 'LAST_MODIFIED_AT',
  /** Sort users by last name. */
  LAST_NAME = 'LAST_NAME',
  /** Sort users by order count. */
  ORDER_COUNT = 'ORDER_COUNT'
}

export type WarehouseInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CreateShiftGroupMutationVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  input: ShiftGroupInput;
}>;


export type CreateShiftGroupMutation = { __typename: 'Mutation', createShiftGroup: { __typename: 'CreateShiftGroupResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, shiftGroup: { __typename: 'ShiftGroup', channelId: string, id: string, name: string } | null } | null };

export type ReorderShiftGroupMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  shiftGroupIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReorderShiftGroupMutation = { __typename: 'Mutation', reorderShiftGroups: { __typename: 'ResponseStatus', status: string | null, message: string | null } | null };

export type RenameShiftGroupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type RenameShiftGroupMutation = { __typename: 'Mutation', renameShiftGroup: { __typename: 'CreateShiftGroupResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, shiftGroup: { __typename: 'ShiftGroup', channelId: string, id: string, name: string } | null } | null };

export type DeleteShiftGroupMutationVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
}>;


export type DeleteShiftGroupMutation = { __typename: 'Mutation', deleteShiftGroup: { __typename: 'CreateShiftGroupResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, shiftGroup: { __typename: 'ShiftGroup', channelId: string, id: string, name: string } | null } | null };

export type ShiftGroupMemberAddMutationVariables = Exact<{
  input: ShiftGroupMemberInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ShiftGroupMemberAddMutation = { __typename: 'Mutation', shiftGroupMemberAdd: { __typename: 'ShiftGroupMemberAddResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, user: { __typename: 'User', id: string } | null } | null };

export type ShiftGroupMembersReorderMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  userIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ShiftGroupMembersReorderMutation = { __typename: 'Mutation', shiftGroupMembersReorder: { __typename: 'ResponseStatus', status: string | null, message: string | null } };

export type ShiftGroupMemberRemoveMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ShiftGroupMemberRemoveMutation = { __typename: 'Mutation', shiftGroupMemberRemove: { __typename: 'ShiftGroupMemberRemoveResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, user: { __typename: 'User', id: string } | null } | null };

export type CreateAssignedShiftMutationVariables = Exact<{
  input: AssignedShiftInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateAssignedShiftMutation = { __typename: 'Mutation', createAssignedShift: { __typename: 'AssignedShiftAddResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, assignedShift: { __typename: 'AssignedShift', id: string, type: string | null, label: string | null, color: ShiftColorEnum | null } | null } | null };

export type UpdateAssignedShiftMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  input: AssignedShiftInput;
}>;


export type UpdateAssignedShiftMutation = { __typename: 'Mutation', updateAssignedShift: { __typename: 'AssignedShiftEditResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, assignedShift: { __typename: 'AssignedShift', id: string, label: string | null } | null } | null };

export type DeleteAssignedShiftMutationVariables = Exact<{
  assignedShiftId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeleteAssignedShiftMutation = { __typename: 'Mutation', deleteAssignedShift: { __typename: 'AssignedShiftDeleteResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, assignedShift: { __typename: 'AssignedShift', id: string, type: string | null, label: string | null } | null } | null };

export type AssignedShiftMoveToOpenMutationVariables = Exact<{
  channelID?: InputMaybe<Scalars['ID']['input']>;
  shiftGroupID?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type AssignedShiftMoveToOpenMutation = { __typename: 'Mutation', assignedShiftMoveToOpen: { __typename: 'AssignedShiftMoveToOpenResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, openShift: { __typename: 'OpenShift', id: string, label: string | null, note: string | null } | null } | null };

export type AssignedShiftShareMutationVariables = Exact<{
  channelID?: InputMaybe<Scalars['ID']['input']>;
  shiftGroupID?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type AssignedShiftShareMutation = { __typename: 'Mutation', assignedShiftShare: { __typename: 'AssignedShiftShareResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, assignedShift: { __typename: 'AssignedShift', id: string, label: string | null, note: string | null } | null } | null };

export type CreateOpenShiftMutationVariables = Exact<{
  input: OpenShiftInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateOpenShiftMutation = { __typename: 'Mutation', createOpenShift: { __typename: 'OpenShiftAddResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, openShift: { __typename: 'OpenShift', id: string, label: string | null } | null } | null };

export type UpdateOpenShiftMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  input: OpenShiftInput;
}>;


export type UpdateOpenShiftMutation = { __typename: 'Mutation', updateOpenShift: { __typename: 'OpenShiftEditResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, openShift: { __typename: 'OpenShift', id: string, label: string | null, note: string | null } | null } | null };

export type DeleteOpenShiftMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeleteOpenShiftMutation = { __typename: 'Mutation', deleteOpenShift: { __typename: 'OpenShiftDeleteResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, openShift: { __typename: 'OpenShift', id: string, label: string | null, note: string | null } | null } | null };

export type OpenShiftAssignMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  openShiftId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type OpenShiftAssignMutation = { __typename: 'Mutation', openShiftAssign: { __typename: 'OpenShiftAssignResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, assignedShift: { __typename: 'AssignedShift', id: string, label: string | null, note: string | null } | null } | null };

export type UpdateTimeOffMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['Time']['input'];
  endTime: Scalars['Time']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<ShiftColorEnum>;
  note?: InputMaybe<Scalars['String']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateTimeOffMutation = { __typename: 'Mutation', updateTimeOff: { __typename: 'TimeOffEditResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, timeoff: { __typename: 'AssignedShift', id: string, userId: string | null, startTime: any, endTime: any, label: string | null, note: string | null, color: ShiftColorEnum | null } | null } | null };

export type DeleteTimeOffMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeleteTimeOffMutation = { __typename: 'Mutation', deleteTimeOff: { __typename: 'TimeOffDeleteResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, timeoff: { __typename: 'AssignedShift', id: string, label: string | null, note: string | null } | null } | null };

export type CreateDayNotesMutationVariables = Exact<{
  date: Scalars['Time']['input'];
  channelId: Scalars['String']['input'];
  note: Scalars['String']['input'];
  authUserId: Scalars['ID']['input'];
}>;


export type CreateDayNotesMutation = { __typename: 'Mutation', createDayNotes: { __typename: 'DayNoteCreateResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, note: { __typename: 'DayNotes', id: string, note: string | null } | null } | null };

export type UpdateDayNotesMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  date: Scalars['Time']['input'];
  note: Scalars['String']['input'];
  authUserId: Scalars['ID']['input'];
}>;


export type UpdateDayNotesMutation = { __typename: 'Mutation', updateDayNotes: { __typename: 'DayNoteUpdateResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, note: { __typename: 'DayNotes', id: string, note: string | null, date: any, createdAt: any | null } | null } | null };

export type DeleteDayNotesMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
}>;


export type DeleteDayNotesMutation = { __typename: 'Mutation', deleteDayNotes: string | null };

export type CreateRequestSwapMutationVariables = Exact<{
  input: RequestSwapInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateRequestSwapMutation = { __typename: 'Mutation', createRequestSwap: { __typename: 'RequestSwapResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, request: { __typename: 'RequestResponse', channelId: string, user: { __typename: 'User', lastName: string } } | null } };

export type CreateRequestOfferMutationVariables = Exact<{
  input: RequestOfferInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateRequestOfferMutation = { __typename: 'Mutation', createRequestOffer: { __typename: 'RequestOfferResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, request: { __typename: 'RequestResponse', channelId: string, user: { __typename: 'User', id: string } } | null } | null };

export type CancelRequestTimeOffMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  requestId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CancelRequestTimeOffMutation = { __typename: 'Mutation', cancelRequestTimeOff: { __typename: 'TimeOffResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, status: RequestStatus | null } | null } | null };

export type CreateSettingMutationVariables = Exact<{
  input: SettingInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateSettingMutation = { __typename: 'Mutation', createSetting: { __typename: 'SettingAddResponse', errors: Array<{ __typename: 'ShiftError', value: string | null, field: string | null, message: string | null }>, setting: { __typename: 'Setting', id: string, channelId: string | null, userId: string | null, startOfWeek: string | null } | null } | null };

export type UpdateSettingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: SettingInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateSettingMutation = { __typename: 'Mutation', UpdateSetting: { __typename: 'SettingEditResponse', errors: Array<{ __typename: 'ShiftError', value: string | null, field: string | null, message: string | null }>, setting: { __typename: 'Setting', id: string, channelId: string | null, userId: string | null, startOfWeek: string | null } | null } | null };

export type DeleteRequestSwapMutationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeleteRequestSwapMutationMutation = { __typename: 'Mutation', deleteRequestSwap: { __typename: 'RequestSwapResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, requestNote: string | null, reason: string | null, responseNote: string | null, status: RequestStatus | null } | null } };

export type CancelRequestSwapMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  requestId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CancelRequestSwapMutation = { __typename: 'Mutation', cancelRequestSwap: { __typename: 'RequestSwapResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, requestNote: string | null, reason: string | null, responseNote: string | null, status: RequestStatus | null } | null } | null };

export type ApproveRequestSwapMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  responseNote?: InputMaybe<Scalars['String']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ApproveRequestSwapMutation = { __typename: 'Mutation', approveRequestSwap: { __typename: 'RequestSwapResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, requestNote: string | null, reason: string | null, responseNote: string | null, status: RequestStatus | null } | null } };

export type DenyRequestSwapMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  responseNote?: InputMaybe<Scalars['String']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DenyRequestSwapMutation = { __typename: 'Mutation', denyRequestSwap: { __typename: 'RequestSwapResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, requestNote: string | null, reason: string | null, responseNote: string | null, status: RequestStatus | null } | null } };

export type DeleteRequestTimeOffMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeleteRequestTimeOffMutation = { __typename: 'Mutation', deleteRequestTimeOff: { __typename: 'TimeOffResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, status: RequestStatus | null } | null } | null };

export type ApproveRequestTimeOffMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  responseNote?: InputMaybe<Scalars['String']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ApproveRequestTimeOffMutation = { __typename: 'Mutation', approveRequestTimeOff: { __typename: 'TimeOffResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, status: RequestStatus | null, responseNote: string | null } | null } | null };

export type DenyRequestTimeOffMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  responseNote?: InputMaybe<Scalars['String']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DenyRequestTimeOffMutation = { __typename: 'Mutation', denyRequestTimeOff: { __typename: 'TimeOffResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, status: RequestStatus | null, responseNote: string | null } | null } | null };

export type AccountRegisterMutationVariables = Exact<{
  input: AccountRegisterInput;
}>;


export type AccountRegisterMutation = { __typename: 'Mutation', accountRegister: { __typename: 'AccountRegister', requiresConfirmation: boolean | null, errors: Array<{ __typename: 'AccountError', field: string | null, message: string | null, code: AccountErrorCode, addressType: AddressTypeEnum | null }>, user: { __typename: 'User', id: string, email: string, firstName: string, lastName: string, isStaff: boolean, isActive: boolean, phone: string | null, whatsapp: string | null, note: string | null, avatar: string | null, languageCode: string, lastLogin: any | null, dateJoined: any, updatedAt: any | null } | null } | null };

export type CreateRequestMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
}>;


export type CreateRequestMutation = { __typename: 'Mutation', createRequest: { __typename: 'Request', id: string, channelId: string | null, type: string, userId: string | null, createdAt: any | null } | null };

export type DeleteRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRequestMutation = { __typename: 'Mutation', deleteRequest: string };

export type UpdateRequestOfferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: RequestOfferInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateRequestOfferMutation = { __typename: 'Mutation', updateRequestOffer: { __typename: 'RequestOfferResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', channelId: string, id: string, requestId: string, responseNote: string | null, user: { __typename: 'User', id: string, firstName: string, lastName: string } } | null } | null };

export type DeleteRequestOfferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeleteRequestOfferMutation = { __typename: 'Mutation', deleteRequestOffer: { __typename: 'RequestOfferResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, status: RequestStatus | null } | null } | null };

export type CancelRequestOfferMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  requestId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CancelRequestOfferMutation = { __typename: 'Mutation', cancelRequestOffer: { __typename: 'RequestOfferResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, requestNote: string | null, reason: string | null, responseNote: string | null, status: RequestStatus | null } | null } | null };

export type ApproveRequestOfferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  responseNote?: InputMaybe<Scalars['String']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ApproveRequestOfferMutation = { __typename: 'Mutation', approveRequestOffer: { __typename: 'RequestOfferResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, status: RequestStatus | null } | null } | null };

export type DenyRequestOfferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  responseNote?: InputMaybe<Scalars['String']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DenyRequestOfferMutation = { __typename: 'Mutation', denyRequestOffer: { __typename: 'RequestOfferResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, request: { __typename: 'RequestResponse', id: string, status: RequestStatus | null, responseNote: string | null } | null } | null };

export type AssignOpenShiftMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  openShiftId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type AssignOpenShiftMutation = { __typename: 'Mutation', openShiftAssign: { __typename: 'OpenShiftAssignResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, assignedShift: { __typename: 'AssignedShift', id: string, break: string | null, color: ShiftColorEnum | null, startTime: any, endTime: any, label: string | null, note: string | null, userId: string | null, channelId: string | null, isOpen: boolean | null, isShared: boolean | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, color: string | null, startTime: any, endTime: any, code: string | null, name: string | null, isPaid: boolean } | null> | null } | null } | null };

export type ChannelCreateMutationVariables = Exact<{
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  defaultCountry: CountryCode;
  isActive: Scalars['Boolean']['input'];
}>;


export type ChannelCreateMutation = { __typename: 'Mutation', channelCreate: { __typename: 'Channel', id: string, name: string, slug: string, currencyCode: string, defaultCountry: string } | null };

export type ChannelUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  defaultCountry: CountryCode;
  isActive: Scalars['Boolean']['input'];
}>;


export type ChannelUpdateMutation = { __typename: 'Mutation', channelUpdate: { __typename: 'Channel', id: string, name: string, slug: string, currencyCode: string, defaultCountry: string } | null };

export type MoveOpenShiftToUserMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
  openShiftId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['Time']['input'];
  endTime: Scalars['Time']['input'];
}>;


export type MoveOpenShiftToUserMutation = { __typename: 'Mutation', moveOpenShiftToUser: { __typename: 'OpenShiftAssignResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }>, assignedShift: { __typename: 'AssignedShift', id: string, break: string | null, color: ShiftColorEnum | null, startTime: any, endTime: any, label: string | null, note: string | null, userId: string | null, channelId: string | null, isOpen: boolean | null, isShared: boolean | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, color: string | null, startTime: any, endTime: any, code: string | null, name: string | null, isPaid: boolean } | null> | null } | null } | null };

export type CopyAssignedShiftsMutationVariables = Exact<{
  input: Array<AssignedShiftInput> | AssignedShiftInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  numOfCopies?: InputMaybe<Scalars['Int']['input']>;
  copyDate: Scalars['Time']['input'];
}>;


export type CopyAssignedShiftsMutation = { __typename: 'Mutation', CopyAssignedShifts: Array<{ __typename: 'AssignedShiftAddResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, assignedShift: { __typename: 'AssignedShift', id: string, type: string | null, label: string | null, color: ShiftColorEnum | null } | null }> };

export type CopyOpenShiftsMutationVariables = Exact<{
  input: Array<OpenShiftInput> | OpenShiftInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  numOfCopies?: InputMaybe<Scalars['Int']['input']>;
  copyDate: Scalars['Time']['input'];
}>;


export type CopyOpenShiftsMutation = { __typename: 'Mutation', CopyOpenShifts: Array<{ __typename: 'OpenShiftAddResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, openShift: { __typename: 'OpenShift', id: string, channelId: string | null, shiftGroupId: string | null, break: string | null, slots: number | null, startTime: any | null, endTime: any | null } | null }> };

export type CreateTimeSetupMutationVariables = Exact<{
  input?: InputMaybe<TimeSetupInput>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateTimeSetupMutation = { __typename: 'Mutation', createTimeSetup: { __typename: 'TimeSetupResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }> } };

export type UpdateTimeSetupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input?: InputMaybe<TimeSetupInput>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateTimeSetupMutation = { __typename: 'Mutation', updateTimeSetup: { __typename: 'TimeSetupResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }> } };

export type ClockInMutationVariables = Exact<{
  input: TimeCardInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ClockInMutation = { __typename: 'Mutation', clockIn: { __typename: 'TimeCardResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null }>, timeCard: { __typename: 'TimeCard', id: string } | null } };

export type ClockOutMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: TimeCardInput;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ClockOutMutation = { __typename: 'Mutation', clockOut: { __typename: 'TimeCardResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null }>, timeCard: { __typename: 'TimeCard', id: string } | null } };

export type StartBreakMutationVariables = Exact<{
  input?: InputMaybe<TimeCardInput>;
  timeCardID: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type StartBreakMutation = { __typename: 'Mutation', startBreak: { __typename: 'TimeCardResponse', errors: Array<{ __typename: 'ShiftError', message: string | null, field: string | null, code: ShiftErrorCode }>, timeCard: { __typename: 'TimeCard', id: string } | null } | null };

export type EndBreakMutationVariables = Exact<{
  input?: InputMaybe<TimeCardInput>;
  timeCardID: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type EndBreakMutation = { __typename: 'Mutation', endBreak: { __typename: 'TimeCardResponse', errors: Array<{ __typename: 'ShiftError', code: ShiftErrorCode, field: string | null, message: string | null }> } | null };

export type SharedAssignedShiftMutationVariables = Exact<{
  input: Array<AssignedShiftsInput> | AssignedShiftsInput;
  authUserId: Scalars['ID']['input'];
}>;


export type SharedAssignedShiftMutation = { __typename: 'Mutation', sharedAssignedShift: { __typename: 'AssignedShiftEditResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, assignedShift: { __typename: 'AssignedShift', id: string, userId: string | null, startTime: any, endTime: any, label: string | null, note: string | null, color: ShiftColorEnum | null } | null } | null };

export type SharedOpenShiftMutationVariables = Exact<{
  input: Array<OpenShiftsInput> | OpenShiftsInput;
  authUserId: Scalars['ID']['input'];
}>;


export type SharedOpenShiftMutation = { __typename: 'Mutation', SharedOpenShift: { __typename: 'OpenShiftEditResponse', errors: Array<{ __typename: 'ShiftError', field: string | null, message: string | null, code: ShiftErrorCode }>, openShift: { __typename: 'OpenShift', id: string, startTime: any | null, endTime: any | null, label: string | null, note: string | null, color: string | null } | null } | null };

export type GetShiftGroupsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  channel: Scalars['String']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetShiftGroupsQuery = { __typename: 'Query', shiftGroups: Array<{ __typename: 'ShiftGroup', name: string, id: string, channelId: string }> };

export type GetShiftGroupMembersQueryVariables = Exact<{
  channel: Scalars['String']['input'];
  shiftGroupId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetShiftGroupMembersQuery = { __typename: 'Query', getShiftGroupMembers: Array<{ __typename: 'User', id: string, firstName: string, lastName: string, email: string, avatar: string | null, isStaff: boolean, note: string | null } | null> };

export type GetAllRequestsQueryVariables = Exact<{
  channel: Scalars['String']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetAllRequestsQuery = { __typename: 'Query', getAllRequests: { __typename: 'GetAllRequestsResponse', totalCount: number | null, edges: Array<{ __typename: 'GetAllRequestsCountableEdge', node: { __typename: 'RequestResponse', id: string, requestId: string, status: RequestStatus | null, startTime: any | null, endTime: any | null, requestNote: string | null, reason: string | null, responseNote: string | null, channelId: string, isAllDay: boolean | null, type: RequestType | null, responseAt: string | null, createdAt: string | null, shiftToOffer: { __typename: 'AssignedShiftResult', id: string, break: string, color: string, startTime: any, endTime: any, label: string | null, note: string | null, userId: string | null, userName: string | null, userEmail: string | null, userLastName: string | null, channelId: string | null, shiftGroupId: string | null, type: string | null, isOpen: boolean | null, isShared: boolean | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, channelId: string | null, assignedShiftId: string, userId: string | null, name: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null, user: { __typename: 'User', id: string, firstName: string, lastName: string, email: string, avatar: string | null, isActive: boolean, isStaff: boolean, lastLogin: any | null }, toSwapWith: { __typename: 'AssignedShiftResult', id: string, break: string, color: string, startTime: any, endTime: any, label: string | null, note: string | null, userId: string | null, userName: string | null, userEmail: string | null, userLastName: string | null, channelId: string | null, shiftGroupId: string | null, type: string | null, isOpen: boolean | null, isShared: boolean | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, channelId: string | null, assignedShiftId: string, userId: string | null, name: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null, shiftToSwap: { __typename: 'AssignedShiftResult', id: string, break: string, color: string, startTime: any, endTime: any, label: string | null, note: string | null, userId: string | null, userName: string | null, userEmail: string | null, userLastName: string | null, channelId: string | null, shiftGroupId: string | null, type: string | null, isOpen: boolean | null, isShared: boolean | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, channelId: string | null, assignedShiftId: string, userId: string | null, name: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null, shiftOfferedTo: { __typename: 'User', id: string, firstName: string, lastName: string, email: string, avatar: string | null } | null, responseBy: { __typename: 'User', id: string, firstName: string, lastName: string, email: string, avatar: string | null } | null } }> } | null };

export type GetNonShiftGroupMembersQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetNonShiftGroupMembersQuery = { __typename: 'Query', getNonShiftGroupMembers: { __typename: 'GetNonShiftGroupMembersResponse', status: string | null, message: string | null, result: Array<{ __typename: 'User', id: string, email: string, metadata: any | null } | null> } | null };

export type GetShiftsByPeopleQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  filter?: InputMaybe<GetShiftsFilter>;
  startDate: Scalars['Time']['input'];
  endDate: Scalars['Time']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetShiftsByPeopleQuery = { __typename: 'Query', getShiftsByPeople: { __typename: 'GetShiftsResponse', status: string | null, message: string | null, result: { __typename: 'Shifts', openShifts: { __typename: 'OpenShiftInfo', title: string | null, numberOfShifts: number | null, shifts: Array<{ __typename: 'OpenShift', label: string | null } | null> | null }, assignedShifts: Array<{ __typename: 'UserAssignedShifts', userId: string, name: string, image: string | null, numberOfHours: number, shifts: Array<{ __typename: 'AssignedShift', id: string, type: string | null, label: string | null } | null> | null } | null> } | null } };

export type GetAllUniqueShiftsQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetAllUniqueShiftsQuery = { __typename: 'Query', getAllUniqueShifts: { __typename: 'GetAllUniqueShiftsResponse', status: string | null, message: string | null, result: { __typename: 'UniqueShifts', openShifts: Array<{ __typename: 'OpenShift', label: string | null } | null> | null, assignedShifts: Array<{ __typename: 'AssignedShift', type: string | null, label: string | null } | null> | null } | null } | null };

export type GetDayNotesQueryVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  channel: Scalars['String']['input'];
  endTime: Scalars['Time']['input'];
  startTime: Scalars['Time']['input'];
}>;


export type GetDayNotesQuery = { __typename: 'Query', getDayNotes: Array<{ __typename: 'DayNoteResponse', id: string, note: string | null, date: any, channelId: string | null, createdAt: any | null } | null> | null };

export type GetDayNoteQueryVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
}>;


export type GetDayNoteQuery = { __typename: 'Query', getDayNote: { __typename: 'DayNoteResponse', id: string, note: string | null, date: any, channelId: string | null, createdAt: any | null } | null };

export type GetSettingsQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetSettingsQuery = { __typename: 'Query', getSettings: Array<{ __typename: 'Setting', id: string, channelId: string | null, userId: string | null, startOfWeek: string | null, isCopyActivity: boolean, isAllowOpen: boolean, timeOffReason: Array<{ __typename: 'TimeOffReason', id: string, settingId: string, key: string, value: string | null } | null> | null }> };

export type GetSettingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetSettingQuery = { __typename: 'Query', getSetting: { __typename: 'Setting', channelId: string | null, userId: string | null, startOfWeek: string | null, isCopyActivity: boolean, isAllowOpen: boolean, timeOffReason: Array<{ __typename: 'TimeOffReason', key: string, value: string | null } | null> | null } | null };

export type GetShiftsByTaskQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  filter?: InputMaybe<GetShiftsFilter>;
  startDate: Scalars['Time']['input'];
  endDate: Scalars['Time']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetShiftsByTaskQuery = { __typename: 'Query', getShiftsByTask: { __typename: 'GetShiftsByTaskResponse', message: string | null, status: string | null, result: Array<{ __typename: 'ShiftGroups', groupId: string, groupName: string, position: number | null, shifts: { __typename: 'Shifts', openShifts: { __typename: 'OpenShiftInfo', numberOfShifts: number | null, title: string | null, shifts: Array<{ __typename: 'OpenShift', id: string, label: string | null, startTime: any | null, endTime: any | null, channelId: string | null, break: string | null, note: string | null, slots: number | null, color: string | null, ShiftActivities: Array<{ __typename: 'OpenShiftActivities', id: string, name: string, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null> | null }, assignedShifts: Array<{ __typename: 'UserAssignedShifts', userId: string, name: string, image: string | null, numberOfHours: number, shifts: Array<{ __typename: 'AssignedShift', id: string, color: ShiftColorEnum | null, label: string | null, type: string | null, note: string | null, shiftGroupId: string | null, break: string | null, startTime: any, endTime: any, userId: string | null, isOpen: boolean | null, isShared: boolean | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, name: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null> | null } | null> } | null } | null> | null } | null };

export type GetShiftsByShareTaskQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  filter?: InputMaybe<GetShiftsFilter>;
  startDate: Scalars['Time']['input'];
  endDate: Scalars['Time']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetShiftsByShareTaskQuery = { __typename: 'Query', GetShiftsByShareTask: { __typename: 'GetShiftsByTaskResponse', message: string | null, status: string | null, result: Array<{ __typename: 'ShiftGroups', groupId: string, groupName: string, position: number | null, shifts: { __typename: 'Shifts', openShifts: { __typename: 'OpenShiftInfo', numberOfShifts: number | null, title: string | null, shifts: Array<{ __typename: 'OpenShift', id: string, label: string | null, startTime: any | null, endTime: any | null, channelId: string | null, break: string | null, note: string | null, slots: number | null, color: string | null, ShiftActivities: Array<{ __typename: 'OpenShiftActivities', id: string, name: string, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null> | null }, assignedShifts: Array<{ __typename: 'UserAssignedShifts', userId: string, name: string, image: string | null, numberOfHours: number, shifts: Array<{ __typename: 'AssignedShift', id: string, color: ShiftColorEnum | null, label: string | null, type: string | null, note: string | null, shiftGroupId: string | null, break: string | null, startTime: any, endTime: any, userId: string | null, isOpen: boolean | null, isShared: boolean | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, name: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null> | null } | null> } | null } | null> | null } | null };

export type GetAllShiftMembersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetAllShiftMembersQuery = { __typename: 'Query', getAllShiftMembers: Array<{ __typename: 'User', id: string, firstName: string, lastName: string }> };

export type GetRequestsSwapsQueryQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetRequestsSwapsQueryQuery = { __typename: 'Query', getRequestsSwaps: Array<{ __typename: 'RequestSwap', id: string, userId: string, channelId: string, responseNote: string | null, requestId: string | null, requestNote: string | null, status: RequestStatus, responseAt: any | null, assignedUserShiftId: string | null, assignedUserShiftIdToSwap: string | null, createdAt: any } | null> };

export type GetRequestTimeOffQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetRequestTimeOffQueryQuery = { __typename: 'Query', getRequestTimeOff: { __typename: 'RequestTimeOff', id: string, userId: string, status: RequestStatus, reason: string | null, requestNote: string | null, responseNote: string | null, startTime: any } };

export type GetRequestTimeOffsQueryQueryVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetRequestTimeOffsQueryQuery = { __typename: 'Query', getRequestTimeOffs: Array<{ __typename: 'RequestTimeOff', id: string, userId: string, status: RequestStatus, reason: string | null, requestNote: string | null, responseNote: string | null, startTime: any } | null> };

export type ShiftGroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ShiftGroupQuery = { __typename: 'Query', shiftGroup: { __typename: 'ShiftGroup', id: string, name: string, position: number | null } | null };

export type ShiftGroupsByChannelQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  authUserId: Scalars['ID']['input'];
}>;


export type ShiftGroupsByChannelQuery = { __typename: 'Query', shiftGroupsByChannel: Array<{ __typename: 'ShiftGroup', id: string, channelId: string, name: string, position: number | null, createdAt: any | null }> };

export type ShiftGroupsQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  channel: Scalars['String']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ShiftGroupsQueryQuery = { __typename: 'Query', shiftGroups: Array<{ __typename: 'ShiftGroup', id: string, name: string, position: number | null }> };

export type GetTimeOffQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId: Scalars['ID']['input'];
}>;


export type GetTimeOffQueryQuery = { __typename: 'Query', getTimeOff: { __typename: 'AssignedShift', id: string, userId: string | null, channelId: string | null, shiftGroupId: string | null, startTime: any, endTime: any, label: string | null, color: ShiftColorEnum | null, note: string | null } };

export type GetTimeOffsQueryQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
  startTime: Scalars['Time']['input'];
  endTime: Scalars['Time']['input'];
  authUserId: Scalars['ID']['input'];
}>;


export type GetTimeOffsQueryQuery = { __typename: 'Query', getTimeOffs: Array<{ __typename: 'AssignedShift', id: string, userId: string | null, channelId: string | null, shiftGroupId: string | null, startTime: any, endTime: any, label: string | null, color: ShiftColorEnum | null, note: string | null }> };

export type GetUsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQueryQuery = { __typename: 'Query', users: Array<{ __typename: 'User', id: string, firstName: string, lastName: string, email: string, isStaff: boolean, isActive: boolean, phone: string | null, avatar: string | null, note: string | null }> };

export type GetUserQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQueryQuery = { __typename: 'Query', user: { __typename: 'User', id: string, firstName: string, lastName: string, email: string, isStaff: boolean, isActive: boolean, phone: string | null, avatar: string | null, note: string | null } };

export type GetRequestsQueryQueryVariables = Exact<{
  channel: Scalars['String']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetRequestsQueryQuery = { __typename: 'Query', getRequests: { __typename: 'GetRequestsResponse', totalCount: number | null, edges: Array<{ __typename: 'GetRequestsCountableEdge', node: { __typename: 'RequestResponse', id: string, requestId: string, status: RequestStatus | null, startTime: any | null, endTime: any | null, requestNote: string | null, reason: string | null, responseNote: string | null, channelId: string, isAllDay: boolean | null, user: { __typename: 'User', id: string, firstName: string, lastName: string, email: string } } }> } | null };

export type GetRequestOfferQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetRequestOfferQueryQuery = { __typename: 'Query', getRequestOffer: { __typename: 'RequestOffer', id: string, userId: string, requestId: string, requestNote: string | null, responseNote: string | null } | null };

export type GetRequestOffersQueryQueryVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetRequestOffersQueryQuery = { __typename: 'Query', getRequestOffers: Array<{ __typename: 'RequestOffer', id: string, userId: string, requestId: string, requestNote: string | null, responseNote: string | null } | null> };

export type GetOpenShiftsQueryVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  channelId: Scalars['ID']['input'];
  shiftGroupId: Scalars['ID']['input'];
}>;


export type GetOpenShiftsQuery = { __typename: 'Query', getOpenShifts: Array<{ __typename: 'OpenShift', id: string, note: string | null, color: string | null, label: string | null, shiftGroupId: string | null, break: string | null, endTime: any | null, slots: number | null, startTime: any | null, createdAt: any, channelId: string | null, ShiftActivities: Array<{ __typename: 'OpenShiftActivities', id: string, channelId: string | null, shiftGroupId: string | null, openShiftId: string, name: string, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean, createdAt: any | null } | null> | null }> };

export type ChannelQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ChannelQuery = { __typename: 'Query', channel: { __typename: 'Channel', id: string, slug: string, name: string, isActive: boolean, defaultCountry: string, currencyCode: string } | null };

export type ChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChannelsQuery = { __typename: 'Query', channels: Array<{ __typename: 'Channel', id: string, slug: string, name: string, isActive: boolean, defaultCountry: string, currencyCode: string }> | null };

export type GetTimeSetupsQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetTimeSetupsQuery = { __typename: 'Query', getTimeSetups: Array<{ __typename: 'TimeSetupResponses', id: string, channelId: string | null, isTimeSetup: boolean | null, location: string | null, createdBy: string | null, createdDateTime: any | null, lastModifiedBy: string | null, lastModifiedDateTime: any | null } | null> };

export type GetAssignedShiftsQueryVariables = Exact<{
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetAssignedShiftsQuery = { __typename: 'Query', getAssignedShifts: Array<{ __typename: 'AssignedShift', id: string, label: string | null, note: string | null, startTime: any, endTime: any, channelId: string | null, type: string | null, userId: string | null, createdAt: any | null, shiftGroupId: string | null, isOpen: boolean | null, shiftToOffer: { __typename: 'AssignedShift', id: string } | null, shiftToSwap: { __typename: 'AssignedShift', id: string } | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, channelId: string | null, shiftGroupId: string | null, assignedShiftId: string, userId: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean, createdAt: any | null } | null> | null }> | null };

export type GetAssignedShiftQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetAssignedShiftQuery = { __typename: 'Query', getAssignedShift: { __typename: 'AssignedShift', id: string, label: string | null, note: string | null, startTime: any, endTime: any, channelId: string | null, break: string | null, color: ShiftColorEnum | null, userId: string | null, createdAt: any | null, type: string | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, channelId: string | null, shiftGroupId: string | null, assignedShiftId: string, userId: string | null, name: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean, createdAt: any | null } | null> | null } | null };

export type GetAllAssignedShiftByChannelIdQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  startDate: Scalars['Time']['input'];
  endDate: Scalars['Time']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetAllAssignedShiftByChannelIdQuery = { __typename: 'Query', getAllAssignedShiftByChannelID: { __typename: 'GetAllAssignedShiftByChannelIDResponse', message: string | null, status: string | null, result: Array<{ __typename: 'ShiftGroups', groupId: string, groupName: string, shifts: { __typename: 'Shifts', assignedShifts: Array<{ __typename: 'UserAssignedShifts', userId: string, name: string, image: string | null, numberOfHours: number, shifts: Array<{ __typename: 'AssignedShift', id: string, type: string | null, label: string | null, note: string | null, color: ShiftColorEnum | null, startTime: any, endTime: any, break: string | null, ShiftActivities: Array<{ __typename: 'AssignedShiftActivities', id: string, name: string | null, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null> | null } | null> } | null } | null> | null } | null };

export type GetOpenShiftQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId: Scalars['ID']['input'];
}>;


export type GetOpenShiftQuery = { __typename: 'Query', getOpenShift: { __typename: 'OpenShift', id: string, channelId: string | null, shiftGroupId: string | null, break: string | null, color: string | null, endTime: any | null, label: string | null, note: string | null, slots: number | null, startTime: any | null, ShiftActivities: Array<{ __typename: 'OpenShiftActivities', id: string, channelId: string | null, shiftGroupId: string | null, openShiftId: string, name: string, code: string | null, color: string | null, startTime: any, endTime: any, isPaid: boolean } | null> | null } | null };

export type GetTimeCardsQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  authUserId: Scalars['ID']['input'];
}>;


export type GetTimeCardsQuery = { __typename: 'Query', getTimeCards: Array<{ __typename: 'TimeCardsResponse', id: string, channelId: string | null, confirmedBy: string | null, createdBy: string | null, createdDateTime: any | null, notes: string | null, startBreaks: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null, endBreaks: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null, clockInEvent: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null, clockOutEvent: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null } | null> };

export type GetLatestTimeCardQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetLatestTimeCardQuery = { __typename: 'Query', GetLatestTimeCard: { __typename: 'TimeCardsResponse', id: string, channelId: string | null, status: TimeCardStatus | null, confirmedBy: string | null, createdBy: string | null, createdDateTime: any | null, lastModifiedBy: string | null, lastModifiedDateTime: any | null, notes: string | null, originalEntry: string | null, startBreaks: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null, endBreaks: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null, clockInEvent: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null, clockOutEvent: { __typename: 'TimeCardEvent', id: string, dateTime: any | null, note: string | null, CreatedAt: any | null, timeCardId: string, status: TimeCardStatus | null } | null, user: { __typename: 'User', id: string, firstName: string, lastName: string, email: string, avatar: string | null } } };

export type MoveOpenShiftToNewDateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  shiftGroupId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['Time']['input'];
  endTime: Scalars['Time']['input'];
}>;


export type MoveOpenShiftToNewDateMutation = { __typename: 'Mutation', moveOpenShiftToNewDate: { __typename: 'OpenShiftEditResponse', openShift: { __typename: 'OpenShift', id: string, channelId: string | null, startTime: any | null, endTime: any | null, ShiftActivities: Array<{ __typename: 'OpenShiftActivities', id: string, channelId: string | null, startTime: any, endTime: any } | null> | null } | null } | null };

export type RecallSharedOpenShiftByTimeMutationVariables = Exact<{
  channelID?: InputMaybe<Scalars['ID']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  endTime: Scalars['Time']['input'];
  startTime: Scalars['Time']['input'];
}>;


export type RecallSharedOpenShiftByTimeMutation = { __typename: 'Mutation', recallSharedOpenShiftByTime: Array<{ __typename: 'OpenShift', id: string, shiftGroupId: string | null, channelId: string | null, slots: number | null, startTime: any | null, endTime: any | null, break: string | null, isShared: boolean | null, isOpen: boolean | null, color: string | null, ShiftActivities: Array<{ __typename: 'OpenShiftActivities', id: string, channelId: string | null, shiftGroupId: string | null, openShiftId: string, name: string, code: string | null, color: string | null, isPaid: boolean, startTime: any, endTime: any } | null> | null }> };

export type RecallSharedAssignedShiftByTimeMutationVariables = Exact<{
  channelID?: InputMaybe<Scalars['ID']['input']>;
  authUserId?: InputMaybe<Scalars['ID']['input']>;
  endTime: Scalars['Time']['input'];
  startTime: Scalars['Time']['input'];
}>;


export type RecallSharedAssignedShiftByTimeMutation = { __typename: 'Mutation', recallSharedAssignedShiftByTime: Array<{ __typename: 'AssignedShift', id: string, break: string | null, isShared: boolean | null, isOpen: boolean | null }> };
