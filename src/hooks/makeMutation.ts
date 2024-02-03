// @ts-strict-ignore
import {
  ApolloError,
  MutationFunction,
  MutationHookOptions as BaseMutationHookOptions,
  MutationResult,
  useMutation as useBaseMutation,
  OperationVariables,
} from "@apollo/client";
import { DocumentNode } from "graphql";
import useNotifier from "./useNotifier";
import { useIntl } from 'react-intl';
import { commonMessages } from '../utils/intl';
import { GqlErrors, hasError } from '../utils/api';
import { handleNestedMutationErrors, showAllErrors } from '../utils/utils';
import { getMutationStatus } from "../utils/misc";

export interface MutationResultAdditionalProps {
  status: any;
}
export type MutationResultWithOpts<TData> = MutationResult<TData> &
  MutationResultAdditionalProps;

export type UseMutation<TData, TVariables> = [
  MutationFunction<TData, TVariables>,
  MutationResultWithOpts<TData>,
];
export type UseMutationHook<TData, TVariables> = (
  cbs: MutationHookOptions<TData, TVariables>,
) => UseMutation<TData, TVariables>;

export type MutationHookOptions<TData, TVariables> = BaseMutationHookOptions<
  TData,
  TVariables
> & { disableErrorHandling?: boolean };

export function useMutation<TData, TVariables>(
  mutation: DocumentNode,
  {
    onCompleted,
    onError,
    disableErrorHandling,
    ...opts
  }: MutationHookOptions<TData, TVariables>,
): UseMutation<TData, TVariables> {
  const notify = useNotifier();
  const intl = useIntl();

  const [mutateFn, result]: any = useBaseMutation(mutation, {
    ...opts,
    onCompleted: (data: any) => {
      if (!disableErrorHandling) {
        handleNestedMutationErrors({
          data,
          intl,
          notify,
        });
      }
  
      if (onCompleted) {
        onCompleted(data);
      }
    },
    onError: (err: ApolloError) => {
      if (!disableErrorHandling) {
        if (err?.graphQLErrors.length > 0) {
          if (hasError(err, GqlErrors.ReadOnlyException)) {
            notify({
              status: "error",
              text: intl.formatMessage(commonMessages.readOnly),
            });
          }  else if (!hasError(err, GqlErrors.LimitReachedException)) {
            err.graphQLErrors.forEach((graphQLError) => {
              notify({
                status: "error",
                apiMessage: graphQLError.message,
              });
            });
          }
        } else {
          showAllErrors({ notify, error: err });
        }
      }
      if (onError) {
        onError(err);
      }
    }, 
  } as MutationHookOptions<any, OperationVariables>);
  return [
    mutateFn,
    {
      ...result,
      status: getMutationStatus(result),
    },
  ];
}


function makeMutation<TData, TVariables>(
  mutation: DocumentNode,
): UseMutationHook<TData, TVariables> {
  return (opts: MutationHookOptions<TData, TVariables>) =>
    useMutation<TData, TVariables>(mutation, opts);
}


export default makeMutation;
