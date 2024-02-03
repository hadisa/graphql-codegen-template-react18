/* eslint-disable no-console */
import { FetchResult, MutationFunction, MutationResult } from "@apollo/client";
import { ConfirmButtonTransitionState, ThemeType } from "@saleor/macaw-ui";
import uniqBy from "lodash/uniqBy";
import moment from "moment-timezone";
import { IntlShape } from "react-intl";

import { MultiAutocompleteChoiceType } from "./components/MultiAutocompleteSelectField";
import { errorMessages } from "./intl";
import {
  MutationResultAdditionalProps,
  PartialMutationProviderOutput,
  UserError
} from "./types";

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  { [K in Keys]-?: Required<Pick<T, K>> }[Keys];

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export function renderCollection<T>(
  collection: T[],
  renderItem: (
    item: T | undefined,
    index: number | undefined,
    collection: T[]
  ) => any,
  renderEmpty?: (collection: T[]) => any
) {
  if (collection === undefined) {
    return renderItem(undefined, undefined, collection);
  }
  if (collection.length === 0) {
    return !!renderEmpty ? renderEmpty(collection) : null;
  }
  return collection.map(renderItem);
}

export function decimal(value: string | number) {
  if (typeof value === "string") {
    return value === "" ? null : value;
  }
  return value;
}

export function weight(value: string) {
  return value === "" ? null : parseFloat(value);
}

export const removeDoubleSlashes = (url: string) =>
  url.replace(/([^:]\/)\/+/g, "$1");

export function maybe<T>(exp: () => T): T | undefined;
export function maybe<T>(exp: () => T, d: T): T;
export function maybe(exp: any, d?: any) {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
}

export function only<T>(obj: T, key: keyof T): boolean {
  return Object.keys(obj).every(objKey =>
    objKey === key ? obj[key] !== undefined : obj[key] === undefined
  );
}

export function empty(obj: {}): boolean {
  return Object.keys(obj).every(key => obj[key] === undefined);
}

export function hasErrors(errorList: UserError[] | null): boolean {
  return !(
    errorList === undefined ||
    errorList === null ||
    errorList.length === 0
  );
}

export function getMutationState(
  called: boolean,
  loading: boolean,
  ...errorList: any[][]
): ConfirmButtonTransitionState {
  if (loading) {
    return "loading";
  }
  if (called) {
    return errorList.map(hasErrors).reduce((acc, curr) => acc || curr, false)
      ? "error"
      : "success";
  }
  return "default";
}

export interface SaleorMutationResult {
  errors?: any[];
}

type InferPromiseResult<T> = T extends Promise<infer V> ? V : never;

export const extractMutationErrors = async <
  TData extends InferPromiseResult<TPromise>,
  TPromise extends Promise<FetchResult<TData>>,
  TErrors extends ReturnType<typeof getMutationErrors>
>(
  submitPromise: TPromise
): Promise<TErrors> => {
  const result = await submitPromise;

  const e = getMutationErrors(result);

  return e as TErrors;
};

export const getMutationErrors = <
  T extends FetchResult<any>,
  TData extends T["data"],
  TErrors extends TData[keyof TData]["errors"]
>(
  result: T
): TErrors[] => {
  if (!result?.data) {
    return [] as TErrors;
  }
  return Object.values(result.data).reduce(
    (acc: TErrors[], mut: TData) => [...acc, ...(mut.errors || [])],
    [] as TErrors[]
  ) as TErrors;
};

export function getMutationStatus<
  TData extends Record<string, SaleorMutationResult | any>
>(opts: MutationResult<TData>): ConfirmButtonTransitionState {
  const errors = getMutationErrors(opts);

  return getMutationState(opts.called, opts.loading, errors);
}

export function getMutationProviderData<TData, TVariables>(
  mutateFn: MutationFunction<TData, TVariables>,
  opts: MutationResult<TData> & MutationResultAdditionalProps
): PartialMutationProviderOutput<TData, TVariables> {
  return {
    mutate: variables => mutateFn({ variables }),
    opts
  };
}

export const parseLogMessage = ({
  intl,
  code,
  field
}: {
  intl: IntlShape;
  code: string;
  field?: string;
}) =>
  intl.formatMessage(errorMessages.baseCodeErrorMessage, {
    errorCode: code,
    fieldError:
      field &&
      intl.formatMessage(errorMessages.codeErrorFieldMessage, {
        fieldName: field
      })
  });

interface User {
  email: string;
  firstName?: string;
  lastName?: string;
}

export function getUserName(user?: User, returnEmail?: boolean) {
  return user && (user.email || (user.firstName && user.lastName))
    ? user.firstName && user.lastName
      ? [user.firstName, user.lastName].join(" ")
      : returnEmail
      ? user.email
      : user.email.split("@")[0]
    : undefined;
}

export function getUserInitials(user?: User) {
  return user && (user.email || (user.firstName && user.lastName))
    ? (user.firstName && user.lastName
        ? user.firstName[0] + user.lastName[0]
        : user.email.slice(0, 2)
      ).toUpperCase()
    : undefined;
}

interface AnyEventWithPropagation {
  stopPropagation: () => void;
}
export function stopPropagation<T extends AnyEventWithPropagation>(
  cb: (event?: T) => void
) {
  return (event: T) => {
    event.stopPropagation();
    cb(event);
  };
}

interface AnyEventWithPreventDefault {
  preventDefault: () => void;
}
export function preventDefault<T extends AnyEventWithPreventDefault>(
  cb: (event?: T) => void
) {
  return (event: T) => {
    event.preventDefault();
    cb(event);
  };
}

export interface DateTime {
  date: string;
  time: string;
}

export function joinDateTime(date: string, time?: string) {
  if (!date) {
    return null;
  }
  const setTime = time || "00:00";
  const dateTime = moment(date + " " + setTime).format();
  return dateTime;
}

export function joinDateTimeAddMin(date: string, time?: string, min?: number) {
  if (!date) {
    return null;
  }
  const setTime = time || "00:00";
  const dateTime = moment(date + " " + setTime + min * 60000).format();
  console.log("joinDateTimeAddMin", dateTime);
  return dateTime;
}

export function splitDateTime(dateTime: string) {
  if (!dateTime) {
    return {
      date: "",
      time: ""
    };
  }
  // Default html input format YYYY-MM-DD HH:mm
  const splitDateTime = moment(dateTime)
    .format("YYYY-MM-DD HH:mm")
    .split(" ");
  return {
    date: splitDateTime[0],
    time: splitDateTime[1]
  };
}

export function dateTimeFormats(dateTime: string) {
  if (!dateTime) {
    return {
      date: "",
      time: ""
    };
  }
  // Default html input format YYYY-MM-DD HH:mm
  const dateTimeformat = moment(dateTime).format("YYYY-MM-DD HH:mm");
  return dateTimeformat;
}

export function dateFormats_(dateTime: string) {
  if (!dateTime) {
    return {
      date: ""
    };
  }
  // Default html input format YYYY-MM-DD HH:mm
  const dateTimeformat = moment(dateTime).format("YYYY-MM-DD");
  return dateTimeformat;
}
// what is this format name 2021-10-15T00:00:00.000Z

export const changeDateFormat = (date: string) => {
  if (!date) {
    return null;
  }
  const dateTime = moment(date).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
  return dateTime;
};

export const formatDateToUTC = dateString => {
  // Create a date object from the provided dateString
  const date = new Date(dateString);

  // Get the date values (year, month, day) and convert them to strings
  const year = date.getUTCFullYear().toString();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getUTCDate()
    .toString()
    .padStart(2, "0");

  // Get the time values (hours, minutes, seconds, milliseconds) and convert them to strings
  const hours = date
    .getUTCHours()
    .toString()
    .padStart(2, "0");
  const minutes = date
    .getUTCMinutes()
    .toString()
    .padStart(2, "0");
  const seconds = date
    .getUTCSeconds()
    .toString()
    .padStart(2, "0");
  const milliseconds = date
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");

  // Combine the date and time values into the UTC format
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

  // Return the formatted date string
  return formattedDate;
};

export function formatDateTime(inputDate) {
  const momentDate = moment(inputDate, "YYYY-MM-DD"); // Parse inputDate using Moment.js
  const date = momentDate.toDate();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding leading zero if necessary
  const day = String(date.getDate()).padStart(2, "0"); // Adding leading zero if necessary
  let time;

  if (isNaN(date.getTime())) {
    // Checking if the inputDate was invalid
    throw new Error("Invalid date");
  }

  if (
    date.getHours() !== 0 ||
    date.getMinutes() !== 0 ||
    date.getSeconds() !== 0 ||
    date.getMilliseconds() !== 0
  ) {
    const hour = String(date.getHours()).padStart(2, "0"); // Adding leading zero if necessary
    const minute = String(date.getMinutes()).padStart(2, "0"); // Adding leading zero if necessary
    const second = String(date.getSeconds()).padStart(2, "0"); // Adding leading zero if necessary
    const millisecond = String(date.getMilliseconds()).padStart(3, "0"); // Adding leading zeros if necessary
    time = `${hour}:${minute}:${second}.${millisecond}Z`;
  } else {
    time = "00:00:00.000Z";
  }

  return `${year}-${month}-${day}T${time}`;
}

export const formatOnlyDateToUTC = dateString => {
  // Create a date object from the provided dateString
  const date = new Date(dateString);

  // Get the date values (year, month, day) and convert them to strings
  const year = date.getUTCFullYear().toString();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getUTCDate()
    .toString()
    .padStart(2, "0");
  console.log("this is date ::", year, month, day);

  // Combine the date and time values into the UTC format
  const formattedDate = `${year}-${month}-${day}T+00:00:00Z`;

  // Return the formatted date string
  return formattedDate;
};
// Default html input format YYYY-MM-DD HH:mm

export function generateCode(charNum: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < charNum; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function isInEnum<TEnum extends {}>(needle: string, haystack: TEnum) {
  return Object.keys(haystack).includes(needle);
}

export function findInEnum<TEnum extends {}>(needle: string, haystack: TEnum) {
  const match = Object.keys(haystack).find(key => key === needle);
  if (!!match) {
    return haystack[needle as keyof TEnum];
  }

  throw new Error(`Key ${needle} not found in enum`);
}

export function findValueInEnum<TEnum extends {}>(
  needle: string,
  haystack: TEnum
): TEnum[keyof TEnum] {
  const match = Object.entries(haystack).find(([_, value]) => value === needle);

  if (!match) {
    throw new Error(`Value ${needle} not found in enum`);
  }

  return (needle as unknown) as TEnum[keyof TEnum];
}

export function parseBoolean(a: string, defaultValue: boolean): boolean {
  if (a === undefined) {
    return defaultValue;
  }
  return a === "true";
}

export function capitalize(s: string) {
  return s.charAt(0).toLocaleUpperCase() + s.slice(1);
}

export function getStringOrPlaceholder(
  s: string | undefined,
  placeholder?: string
): string {
  return s || placeholder || "...";
}

export const isDarkTheme = (themeType: ThemeType) => themeType === "dark";

export function getFullName<T extends { firstName: string; lastName: string }>(
  data: T
) {
  if (!data || !data.firstName || !data.lastName) {
    return "";
  }

  return `${data.firstName} ${data.lastName}`;
}
export const flatten = (obj: unknown) => {
  const result = {};

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(result, flatten(obj[key]));
    } else {
      result[key] = obj[key];
    }
  });

  return result;
};

export function PromiseQueue() {
  let queue = Promise.resolve();

  function add<T>(operation: (value: T | void) => PromiseLike<T>) {
    return new Promise((resolve, reject) => {
      queue = queue
        .then(operation)
        .then(resolve)
        .catch(reject);
    });
  }

  return { queue, add };
}

export const combinedMultiAutocompleteChoices = (
  selected: MultiAutocompleteChoiceType[],
  choices: MultiAutocompleteChoiceType[]
) => uniqBy([...selected, ...choices], "value");

export const isInDevelopment =
  !import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === "development";

export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export function formatDateString(dateString:any) {
  const date = new Date(dateString);

  const year = date.getUTCFullYear();
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const day = ("0" + date.getUTCDate()).slice(-2);
  const hours = ("0" + date.getUTCHours()).slice(-2);
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  const seconds = ("0" + date.getUTCSeconds()).slice(-2);

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}
