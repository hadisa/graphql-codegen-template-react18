// @ts-strict-ignore
import {
  ApolloError,
  ApolloQueryResult,
  LazyQueryHookOptions as BaseLazyQueryHookOptions,
  OperationVariables,
  QueryHookOptions as BaseQueryHookOptions,
  QueryResult,
  useQuery as useBaseQuery,
} from "@apollo/client";

import { DocumentNode } from "graphql";
import { useEffect } from "react";
import { useIntl } from "react-intl";

import useAppState from "./useAppState";
import useNotifier from "./useNotifier";
import { RequireAtLeastOne } from "../utils/misc";
import { handleQueryAuthError } from "../utils/err";
export { useLazyQuery } from "@apollo/client";

const getPermissionKey = (permission: string) =>
  `PERMISSION_${permission}` as PrefixedPermissions;

export const allPermissions: Record<PrefixedPermissions, boolean> = Object.keys(
  PermissionEnum,
).reduce(
  (prev, code) => ({
    ...prev,
    [getPermissionKey(code)]: false,
  }),
  {} as Record<PrefixedPermissions, boolean>,
);

const getUserPermissions = (
  userPermissions: UserPermissionFragment[],
): Record<PrefixedPermissions, boolean> =>
  userPermissions.reduce(
    (prev, permission) => ({
      ...prev,
      [getPermissionKey(permission.code)]: true,
    }),
    {} as Record<PrefixedPermissions, boolean>,
  );

export interface LoadMore<TData, TVariables> {
  loadMore: (
    mergeFunc: (prev: TData, next: TData) => TData,
    extraVariables: Partial<TVariables>,
  ) => Promise<ApolloQueryResult<TData>>;
}


export type LazyQueryHookOptions<
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
> = BaseLazyQueryHookOptions<TData, TVariables>;

export type UseQueryResult<TData, TVariables extends OperationVariables> = QueryResult<TData, TVariables> &
  LoadMore<TData, TVariables>;


export type QueryHookOptions<TData, TVariables extends OperationVariables> = Partial<
  Omit<BaseQueryHookOptions<TData, TVariables>, "variables"> & {
    displayLoader: boolean;
    handleError?: (error: ApolloError) => void | undefined;
    variables?: Omit<TVariables, any>;
  }
>;

type UseQueryHook<TData, TVariables extends OperationVariables> = (
  opts?: QueryHookOptions<TData, Omit<TVariables, any>>,
) => UseQueryResult<TData, TVariables>;


export function useQuery<TData, TVariables>(
  query: DocumentNode,
  {
    displayLoader,
    skip,
    variables,
    fetchPolicy,
    handleError,
    ...opts
  }: QueryHookOptions<TData, TVariables> = {},
): UseQueryResult<TData, TVariables> {
  const notify = useNotifier();
  const intl = useIntl();
  const [, dispatchAppState]:any = useAppState();


  const queryData = useBaseQuery(query, {
    ...opts,
    context: {
      useBatching: true,
    },
    errorPolicy: 'all',
    fetchPolicy: fetchPolicy ?? 'cache-and-network',
    onError: (error: ApolloError) => {
      if (!!handleError) {
        handleError(error);
      } 
    },
    skip,
    variables,
  } as QueryHookOptions<any, OperationVariables>);

  useEffect(() => {
    if (displayLoader) {
      dispatchAppState({
        payload: {
          value: queryData.loading,
        },
        type: "displayLoader",
      });
    }
  }, [queryData.loading]);

  const loadMore = (
    mergeFunc: (previousResults: TData, fetchMoreResult: TData) => TData,
    extraVariables: RequireAtLeastOne<TVariables>,
  ) =>
    queryData.fetchMore({
      query,
      updateQuery: (previousResults, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResults;
        }
        return mergeFunc(previousResults, fetchMoreResult);
      },
      variables: {  ...extraVariables },
    });

  return {
    ...queryData,
    loadMore,
  };
}

// function makeQuery<TData, TVariables>(
//   query: DocumentNode,
// ): UseQueryHook<TData, TVariables> {
//   return (opts: QueryHookOptions<TData, TVariables>) =>
//     useQuery<TData, TVariables>(query, opts);
// }

function makeQuery<TData, TVariables>(
  query: DocumentNode,
): UseQueryHook<TData, TVariables> {
  return (opts?: QueryHookOptions<TData, TVariables>) =>
    useQuery<TData, TVariables>(query, opts as QueryHookOptions<TData, TVariables>);
}

export default makeQuery;
