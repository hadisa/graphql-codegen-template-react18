import { ApolloError } from "@apollo/client";

export enum GqlErrors {
  LimitReachedException = "LimitReachedException",
  ReadOnlyException = "ReadOnlyException"
}

export function hasError(err: ApolloError, ...errorCodes: string[]): boolean {
  return err.graphQLErrors.some((gqlError:any) =>
    errorCodes.includes(gqlError.extensions.exception.code)
  );
}
