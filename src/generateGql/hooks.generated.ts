/* eslint-disable */
import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '../hooks/makeGql';
const defaultOptions = {} as const;

export const CreateShiftGroupDocument = gql`
    mutation CreateShiftGroup($authUserId: ID, $input: ShiftGroupInput!) {
  createShiftGroup(authUserId: $authUserId, input: $input) {
    errors {
      field
      message
      code
    }
    shiftGroup {
      channelId
      id
      name
    }
  }
}
    `;
export type CreateShiftGroupMutationFn = Apollo.MutationFunction<Types.CreateShiftGroupMutation, Types.CreateShiftGroupMutationVariables>;

/**
 * __useCreateShiftGroupMutation__
 *
 * To run a mutation, you first call `useCreateShiftGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShiftGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShiftGroupMutation, { data, loading, error }] = useCreateShiftGroupMutation({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShiftGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateShiftGroupMutation, Types.CreateShiftGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateShiftGroupMutation, Types.CreateShiftGroupMutationVariables>(CreateShiftGroupDocument, options);
      }
export type CreateShiftGroupMutationHookResult = ReturnType<typeof useCreateShiftGroupMutation>;
export type CreateShiftGroupMutationResult = Apollo.MutationResult<Types.CreateShiftGroupMutation>;
export type CreateShiftGroupMutationOptions = Apollo.BaseMutationOptions<Types.CreateShiftGroupMutation, Types.CreateShiftGroupMutationVariables>;
export const ReorderShiftGroupDocument = gql`
    mutation ReorderShiftGroup($channelId: ID!, $shiftGroupIds: [ID!]!, $authUserId: ID) {
  reorderShiftGroups(
    channelId: $channelId
    shiftGroupIds: $shiftGroupIds
    authUserId: $authUserId
  ) {
    status
    message
  }
}
    `;
export type ReorderShiftGroupMutationFn = Apollo.MutationFunction<Types.ReorderShiftGroupMutation, Types.ReorderShiftGroupMutationVariables>;

/**
 * __useReorderShiftGroupMutation__
 *
 * To run a mutation, you first call `useReorderShiftGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderShiftGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderShiftGroupMutation, { data, loading, error }] = useReorderShiftGroupMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      shiftGroupIds: // value for 'shiftGroupIds'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useReorderShiftGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ReorderShiftGroupMutation, Types.ReorderShiftGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ReorderShiftGroupMutation, Types.ReorderShiftGroupMutationVariables>(ReorderShiftGroupDocument, options);
      }
export type ReorderShiftGroupMutationHookResult = ReturnType<typeof useReorderShiftGroupMutation>;
export type ReorderShiftGroupMutationResult = Apollo.MutationResult<Types.ReorderShiftGroupMutation>;
export type ReorderShiftGroupMutationOptions = Apollo.BaseMutationOptions<Types.ReorderShiftGroupMutation, Types.ReorderShiftGroupMutationVariables>;
export const RenameShiftGroupDocument = gql`
    mutation RenameShiftGroup($id: ID!, $name: String!, $authUserId: ID) {
  renameShiftGroup(id: $id, name: $name, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    shiftGroup {
      channelId
      id
      name
    }
  }
}
    `;
export type RenameShiftGroupMutationFn = Apollo.MutationFunction<Types.RenameShiftGroupMutation, Types.RenameShiftGroupMutationVariables>;

/**
 * __useRenameShiftGroupMutation__
 *
 * To run a mutation, you first call `useRenameShiftGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenameShiftGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renameShiftGroupMutation, { data, loading, error }] = useRenameShiftGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useRenameShiftGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.RenameShiftGroupMutation, Types.RenameShiftGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.RenameShiftGroupMutation, Types.RenameShiftGroupMutationVariables>(RenameShiftGroupDocument, options);
      }
export type RenameShiftGroupMutationHookResult = ReturnType<typeof useRenameShiftGroupMutation>;
export type RenameShiftGroupMutationResult = Apollo.MutationResult<Types.RenameShiftGroupMutation>;
export type RenameShiftGroupMutationOptions = Apollo.BaseMutationOptions<Types.RenameShiftGroupMutation, Types.RenameShiftGroupMutationVariables>;
export const DeleteShiftGroupDocument = gql`
    mutation DeleteShiftGroup($authUserId: ID, $id: ID!) {
  deleteShiftGroup(authUserId: $authUserId, id: $id) {
    errors {
      field
      message
      code
    }
    shiftGroup {
      channelId
      id
      name
    }
  }
}
    `;
export type DeleteShiftGroupMutationFn = Apollo.MutationFunction<Types.DeleteShiftGroupMutation, Types.DeleteShiftGroupMutationVariables>;

/**
 * __useDeleteShiftGroupMutation__
 *
 * To run a mutation, you first call `useDeleteShiftGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShiftGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShiftGroupMutation, { data, loading, error }] = useDeleteShiftGroupMutation({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShiftGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteShiftGroupMutation, Types.DeleteShiftGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteShiftGroupMutation, Types.DeleteShiftGroupMutationVariables>(DeleteShiftGroupDocument, options);
      }
export type DeleteShiftGroupMutationHookResult = ReturnType<typeof useDeleteShiftGroupMutation>;
export type DeleteShiftGroupMutationResult = Apollo.MutationResult<Types.DeleteShiftGroupMutation>;
export type DeleteShiftGroupMutationOptions = Apollo.BaseMutationOptions<Types.DeleteShiftGroupMutation, Types.DeleteShiftGroupMutationVariables>;
export const ShiftGroupMemberAddDocument = gql`
    mutation ShiftGroupMemberAdd($input: ShiftGroupMemberInput!, $authUserId: ID) {
  shiftGroupMemberAdd(input: $input, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
    user {
      id
    }
  }
}
    `;
export type ShiftGroupMemberAddMutationFn = Apollo.MutationFunction<Types.ShiftGroupMemberAddMutation, Types.ShiftGroupMemberAddMutationVariables>;

/**
 * __useShiftGroupMemberAddMutation__
 *
 * To run a mutation, you first call `useShiftGroupMemberAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShiftGroupMemberAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shiftGroupMemberAddMutation, { data, loading, error }] = useShiftGroupMemberAddMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useShiftGroupMemberAddMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ShiftGroupMemberAddMutation, Types.ShiftGroupMemberAddMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ShiftGroupMemberAddMutation, Types.ShiftGroupMemberAddMutationVariables>(ShiftGroupMemberAddDocument, options);
      }
export type ShiftGroupMemberAddMutationHookResult = ReturnType<typeof useShiftGroupMemberAddMutation>;
export type ShiftGroupMemberAddMutationResult = Apollo.MutationResult<Types.ShiftGroupMemberAddMutation>;
export type ShiftGroupMemberAddMutationOptions = Apollo.BaseMutationOptions<Types.ShiftGroupMemberAddMutation, Types.ShiftGroupMemberAddMutationVariables>;
export const ShiftGroupMembersReorderDocument = gql`
    mutation ShiftGroupMembersReorder($channelId: ID!, $shiftGroupId: ID!, $userIds: [ID!]!, $authUserId: ID) {
  shiftGroupMembersReorder(
    channelId: $channelId
    shiftGroupId: $shiftGroupId
    userIds: $userIds
    authUserId: $authUserId
  ) {
    status
    message
  }
}
    `;
export type ShiftGroupMembersReorderMutationFn = Apollo.MutationFunction<Types.ShiftGroupMembersReorderMutation, Types.ShiftGroupMembersReorderMutationVariables>;

/**
 * __useShiftGroupMembersReorderMutation__
 *
 * To run a mutation, you first call `useShiftGroupMembersReorderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShiftGroupMembersReorderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shiftGroupMembersReorderMutation, { data, loading, error }] = useShiftGroupMembersReorderMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      userIds: // value for 'userIds'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useShiftGroupMembersReorderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ShiftGroupMembersReorderMutation, Types.ShiftGroupMembersReorderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ShiftGroupMembersReorderMutation, Types.ShiftGroupMembersReorderMutationVariables>(ShiftGroupMembersReorderDocument, options);
      }
export type ShiftGroupMembersReorderMutationHookResult = ReturnType<typeof useShiftGroupMembersReorderMutation>;
export type ShiftGroupMembersReorderMutationResult = Apollo.MutationResult<Types.ShiftGroupMembersReorderMutation>;
export type ShiftGroupMembersReorderMutationOptions = Apollo.BaseMutationOptions<Types.ShiftGroupMembersReorderMutation, Types.ShiftGroupMembersReorderMutationVariables>;
export const ShiftGroupMemberRemoveDocument = gql`
    mutation ShiftGroupMemberRemove($channelId: ID!, $shiftGroupId: ID!, $userId: ID!, $authUserId: ID) {
  shiftGroupMemberRemove(
    channelId: $channelId
    shiftGroupId: $shiftGroupId
    userId: $userId
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    user {
      id
    }
  }
}
    `;
export type ShiftGroupMemberRemoveMutationFn = Apollo.MutationFunction<Types.ShiftGroupMemberRemoveMutation, Types.ShiftGroupMemberRemoveMutationVariables>;

/**
 * __useShiftGroupMemberRemoveMutation__
 *
 * To run a mutation, you first call `useShiftGroupMemberRemoveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShiftGroupMemberRemoveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shiftGroupMemberRemoveMutation, { data, loading, error }] = useShiftGroupMemberRemoveMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      userId: // value for 'userId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useShiftGroupMemberRemoveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ShiftGroupMemberRemoveMutation, Types.ShiftGroupMemberRemoveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ShiftGroupMemberRemoveMutation, Types.ShiftGroupMemberRemoveMutationVariables>(ShiftGroupMemberRemoveDocument, options);
      }
export type ShiftGroupMemberRemoveMutationHookResult = ReturnType<typeof useShiftGroupMemberRemoveMutation>;
export type ShiftGroupMemberRemoveMutationResult = Apollo.MutationResult<Types.ShiftGroupMemberRemoveMutation>;
export type ShiftGroupMemberRemoveMutationOptions = Apollo.BaseMutationOptions<Types.ShiftGroupMemberRemoveMutation, Types.ShiftGroupMemberRemoveMutationVariables>;
export const CreateAssignedShiftDocument = gql`
    mutation CreateAssignedShift($input: AssignedShiftInput!, $authUserId: ID) {
  createAssignedShift(input: $input, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    assignedShift {
      id
      type
      label
      color
    }
  }
}
    `;
export type CreateAssignedShiftMutationFn = Apollo.MutationFunction<Types.CreateAssignedShiftMutation, Types.CreateAssignedShiftMutationVariables>;

/**
 * __useCreateAssignedShiftMutation__
 *
 * To run a mutation, you first call `useCreateAssignedShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssignedShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssignedShiftMutation, { data, loading, error }] = useCreateAssignedShiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCreateAssignedShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateAssignedShiftMutation, Types.CreateAssignedShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateAssignedShiftMutation, Types.CreateAssignedShiftMutationVariables>(CreateAssignedShiftDocument, options);
      }
export type CreateAssignedShiftMutationHookResult = ReturnType<typeof useCreateAssignedShiftMutation>;
export type CreateAssignedShiftMutationResult = Apollo.MutationResult<Types.CreateAssignedShiftMutation>;
export type CreateAssignedShiftMutationOptions = Apollo.BaseMutationOptions<Types.CreateAssignedShiftMutation, Types.CreateAssignedShiftMutationVariables>;
export const UpdateAssignedShiftDocument = gql`
    mutation UpdateAssignedShift($id: ID!, $authUserId: ID, $input: AssignedShiftInput!) {
  updateAssignedShift(id: $id, authUserId: $authUserId, input: $input) {
    errors {
      field
      message
      code
    }
    assignedShift {
      id
      label
    }
  }
}
    `;
export type UpdateAssignedShiftMutationFn = Apollo.MutationFunction<Types.UpdateAssignedShiftMutation, Types.UpdateAssignedShiftMutationVariables>;

/**
 * __useUpdateAssignedShiftMutation__
 *
 * To run a mutation, you first call `useUpdateAssignedShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssignedShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssignedShiftMutation, { data, loading, error }] = useUpdateAssignedShiftMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAssignedShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateAssignedShiftMutation, Types.UpdateAssignedShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateAssignedShiftMutation, Types.UpdateAssignedShiftMutationVariables>(UpdateAssignedShiftDocument, options);
      }
export type UpdateAssignedShiftMutationHookResult = ReturnType<typeof useUpdateAssignedShiftMutation>;
export type UpdateAssignedShiftMutationResult = Apollo.MutationResult<Types.UpdateAssignedShiftMutation>;
export type UpdateAssignedShiftMutationOptions = Apollo.BaseMutationOptions<Types.UpdateAssignedShiftMutation, Types.UpdateAssignedShiftMutationVariables>;
export const DeleteAssignedShiftDocument = gql`
    mutation DeleteAssignedShift($assignedShiftId: ID!, $authUserId: ID) {
  deleteAssignedShift(id: $assignedShiftId, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    assignedShift {
      id
      type
      label
    }
  }
}
    `;
export type DeleteAssignedShiftMutationFn = Apollo.MutationFunction<Types.DeleteAssignedShiftMutation, Types.DeleteAssignedShiftMutationVariables>;

/**
 * __useDeleteAssignedShiftMutation__
 *
 * To run a mutation, you first call `useDeleteAssignedShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssignedShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssignedShiftMutation, { data, loading, error }] = useDeleteAssignedShiftMutation({
 *   variables: {
 *      assignedShiftId: // value for 'assignedShiftId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDeleteAssignedShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteAssignedShiftMutation, Types.DeleteAssignedShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteAssignedShiftMutation, Types.DeleteAssignedShiftMutationVariables>(DeleteAssignedShiftDocument, options);
      }
export type DeleteAssignedShiftMutationHookResult = ReturnType<typeof useDeleteAssignedShiftMutation>;
export type DeleteAssignedShiftMutationResult = Apollo.MutationResult<Types.DeleteAssignedShiftMutation>;
export type DeleteAssignedShiftMutationOptions = Apollo.BaseMutationOptions<Types.DeleteAssignedShiftMutation, Types.DeleteAssignedShiftMutationVariables>;
export const AssignedShiftMoveToOpenDocument = gql`
    mutation AssignedShiftMoveToOpen($channelID: ID, $shiftGroupID: ID, $id: ID!, $authUserId: ID) {
  assignedShiftMoveToOpen(
    channelID: $channelID
    shiftGroupID: $shiftGroupID
    id: $id
    authUserId: $authUserId
  ) {
    errors {
      field
      message
      code
    }
    openShift {
      id
      label
      note
    }
  }
}
    `;
export type AssignedShiftMoveToOpenMutationFn = Apollo.MutationFunction<Types.AssignedShiftMoveToOpenMutation, Types.AssignedShiftMoveToOpenMutationVariables>;

/**
 * __useAssignedShiftMoveToOpenMutation__
 *
 * To run a mutation, you first call `useAssignedShiftMoveToOpenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignedShiftMoveToOpenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignedShiftMoveToOpenMutation, { data, loading, error }] = useAssignedShiftMoveToOpenMutation({
 *   variables: {
 *      channelID: // value for 'channelID'
 *      shiftGroupID: // value for 'shiftGroupID'
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useAssignedShiftMoveToOpenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.AssignedShiftMoveToOpenMutation, Types.AssignedShiftMoveToOpenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.AssignedShiftMoveToOpenMutation, Types.AssignedShiftMoveToOpenMutationVariables>(AssignedShiftMoveToOpenDocument, options);
      }
export type AssignedShiftMoveToOpenMutationHookResult = ReturnType<typeof useAssignedShiftMoveToOpenMutation>;
export type AssignedShiftMoveToOpenMutationResult = Apollo.MutationResult<Types.AssignedShiftMoveToOpenMutation>;
export type AssignedShiftMoveToOpenMutationOptions = Apollo.BaseMutationOptions<Types.AssignedShiftMoveToOpenMutation, Types.AssignedShiftMoveToOpenMutationVariables>;
export const AssignedShiftShareDocument = gql`
    mutation AssignedShiftShare($channelID: ID, $shiftGroupID: ID, $id: ID!, $authUserId: ID) {
  assignedShiftShare(
    channelID: $channelID
    shiftGroupID: $shiftGroupID
    id: $id
    authUserId: $authUserId
  ) {
    errors {
      field
      message
      code
    }
    assignedShift {
      id
      label
      note
    }
  }
}
    `;
export type AssignedShiftShareMutationFn = Apollo.MutationFunction<Types.AssignedShiftShareMutation, Types.AssignedShiftShareMutationVariables>;

/**
 * __useAssignedShiftShareMutation__
 *
 * To run a mutation, you first call `useAssignedShiftShareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignedShiftShareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignedShiftShareMutation, { data, loading, error }] = useAssignedShiftShareMutation({
 *   variables: {
 *      channelID: // value for 'channelID'
 *      shiftGroupID: // value for 'shiftGroupID'
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useAssignedShiftShareMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.AssignedShiftShareMutation, Types.AssignedShiftShareMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.AssignedShiftShareMutation, Types.AssignedShiftShareMutationVariables>(AssignedShiftShareDocument, options);
      }
export type AssignedShiftShareMutationHookResult = ReturnType<typeof useAssignedShiftShareMutation>;
export type AssignedShiftShareMutationResult = Apollo.MutationResult<Types.AssignedShiftShareMutation>;
export type AssignedShiftShareMutationOptions = Apollo.BaseMutationOptions<Types.AssignedShiftShareMutation, Types.AssignedShiftShareMutationVariables>;
export const CreateOpenShiftDocument = gql`
    mutation CreateOpenShift($input: OpenShiftInput!, $authUserId: ID) {
  createOpenShift(input: $input, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    openShift {
      id
      label
    }
  }
}
    `;
export type CreateOpenShiftMutationFn = Apollo.MutationFunction<Types.CreateOpenShiftMutation, Types.CreateOpenShiftMutationVariables>;

/**
 * __useCreateOpenShiftMutation__
 *
 * To run a mutation, you first call `useCreateOpenShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOpenShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOpenShiftMutation, { data, loading, error }] = useCreateOpenShiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCreateOpenShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateOpenShiftMutation, Types.CreateOpenShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateOpenShiftMutation, Types.CreateOpenShiftMutationVariables>(CreateOpenShiftDocument, options);
      }
export type CreateOpenShiftMutationHookResult = ReturnType<typeof useCreateOpenShiftMutation>;
export type CreateOpenShiftMutationResult = Apollo.MutationResult<Types.CreateOpenShiftMutation>;
export type CreateOpenShiftMutationOptions = Apollo.BaseMutationOptions<Types.CreateOpenShiftMutation, Types.CreateOpenShiftMutationVariables>;
export const UpdateOpenShiftDocument = gql`
    mutation UpdateOpenShift($id: ID!, $authUserId: ID, $input: OpenShiftInput!) {
  updateOpenShift(id: $id, authUserId: $authUserId, input: $input) {
    errors {
      field
      message
      code
    }
    openShift {
      id
      label
      note
    }
  }
}
    `;
export type UpdateOpenShiftMutationFn = Apollo.MutationFunction<Types.UpdateOpenShiftMutation, Types.UpdateOpenShiftMutationVariables>;

/**
 * __useUpdateOpenShiftMutation__
 *
 * To run a mutation, you first call `useUpdateOpenShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOpenShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOpenShiftMutation, { data, loading, error }] = useUpdateOpenShiftMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOpenShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateOpenShiftMutation, Types.UpdateOpenShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateOpenShiftMutation, Types.UpdateOpenShiftMutationVariables>(UpdateOpenShiftDocument, options);
      }
export type UpdateOpenShiftMutationHookResult = ReturnType<typeof useUpdateOpenShiftMutation>;
export type UpdateOpenShiftMutationResult = Apollo.MutationResult<Types.UpdateOpenShiftMutation>;
export type UpdateOpenShiftMutationOptions = Apollo.BaseMutationOptions<Types.UpdateOpenShiftMutation, Types.UpdateOpenShiftMutationVariables>;
export const DeleteOpenShiftDocument = gql`
    mutation DeleteOpenShift($id: ID!, $authUserId: ID) {
  deleteOpenShift(id: $id, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    openShift {
      id
      label
      note
    }
  }
}
    `;
export type DeleteOpenShiftMutationFn = Apollo.MutationFunction<Types.DeleteOpenShiftMutation, Types.DeleteOpenShiftMutationVariables>;

/**
 * __useDeleteOpenShiftMutation__
 *
 * To run a mutation, you first call `useDeleteOpenShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOpenShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOpenShiftMutation, { data, loading, error }] = useDeleteOpenShiftMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDeleteOpenShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteOpenShiftMutation, Types.DeleteOpenShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteOpenShiftMutation, Types.DeleteOpenShiftMutationVariables>(DeleteOpenShiftDocument, options);
      }
export type DeleteOpenShiftMutationHookResult = ReturnType<typeof useDeleteOpenShiftMutation>;
export type DeleteOpenShiftMutationResult = Apollo.MutationResult<Types.DeleteOpenShiftMutation>;
export type DeleteOpenShiftMutationOptions = Apollo.BaseMutationOptions<Types.DeleteOpenShiftMutation, Types.DeleteOpenShiftMutationVariables>;
export const OpenShiftAssignDocument = gql`
    mutation OpenShiftAssign($channelId: ID!, $shiftGroupId: ID!, $openShiftId: ID!, $userId: ID!, $authUserId: ID) {
  openShiftAssign(
    channelId: $channelId
    shiftGroupId: $shiftGroupId
    openShiftId: $openShiftId
    userId: $userId
    authUserId: $authUserId
  ) {
    errors {
      field
      message
      code
    }
    assignedShift {
      id
      label
      note
    }
  }
}
    `;
export type OpenShiftAssignMutationFn = Apollo.MutationFunction<Types.OpenShiftAssignMutation, Types.OpenShiftAssignMutationVariables>;

/**
 * __useOpenShiftAssignMutation__
 *
 * To run a mutation, you first call `useOpenShiftAssignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpenShiftAssignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [openShiftAssignMutation, { data, loading, error }] = useOpenShiftAssignMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      openShiftId: // value for 'openShiftId'
 *      userId: // value for 'userId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useOpenShiftAssignMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.OpenShiftAssignMutation, Types.OpenShiftAssignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.OpenShiftAssignMutation, Types.OpenShiftAssignMutationVariables>(OpenShiftAssignDocument, options);
      }
export type OpenShiftAssignMutationHookResult = ReturnType<typeof useOpenShiftAssignMutation>;
export type OpenShiftAssignMutationResult = Apollo.MutationResult<Types.OpenShiftAssignMutation>;
export type OpenShiftAssignMutationOptions = Apollo.BaseMutationOptions<Types.OpenShiftAssignMutation, Types.OpenShiftAssignMutationVariables>;
export const UpdateTimeOffDocument = gql`
    mutation UpdateTimeOff($id: ID!, $userId: ID, $channelId: ID, $shiftGroupId: ID, $startTime: Time!, $endTime: Time!, $label: String, $color: ShiftColorEnum, $note: String, $authUserId: ID) {
  updateTimeOff(
    id: $id
    input: {userId: $userId, channelId: $channelId, shiftGroupId: $shiftGroupId, startTime: $startTime, endTime: $endTime, label: $label, color: $color, note: $note}
    authUserId: $authUserId
  ) {
    errors {
      field
      message
      code
    }
    timeoff {
      id
      userId
      startTime
      endTime
      label
      note
      color
    }
  }
}
    `;
export type UpdateTimeOffMutationFn = Apollo.MutationFunction<Types.UpdateTimeOffMutation, Types.UpdateTimeOffMutationVariables>;

/**
 * __useUpdateTimeOffMutation__
 *
 * To run a mutation, you first call `useUpdateTimeOffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimeOffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimeOffMutation, { data, loading, error }] = useUpdateTimeOffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      label: // value for 'label'
 *      color: // value for 'color'
 *      note: // value for 'note'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useUpdateTimeOffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateTimeOffMutation, Types.UpdateTimeOffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateTimeOffMutation, Types.UpdateTimeOffMutationVariables>(UpdateTimeOffDocument, options);
      }
export type UpdateTimeOffMutationHookResult = ReturnType<typeof useUpdateTimeOffMutation>;
export type UpdateTimeOffMutationResult = Apollo.MutationResult<Types.UpdateTimeOffMutation>;
export type UpdateTimeOffMutationOptions = Apollo.BaseMutationOptions<Types.UpdateTimeOffMutation, Types.UpdateTimeOffMutationVariables>;
export const DeleteTimeOffDocument = gql`
    mutation DeleteTimeOff($id: ID!, $authUserId: ID) {
  deleteTimeOff(id: $id, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    timeoff {
      id
      label
      note
    }
  }
}
    `;
export type DeleteTimeOffMutationFn = Apollo.MutationFunction<Types.DeleteTimeOffMutation, Types.DeleteTimeOffMutationVariables>;

/**
 * __useDeleteTimeOffMutation__
 *
 * To run a mutation, you first call `useDeleteTimeOffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimeOffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimeOffMutation, { data, loading, error }] = useDeleteTimeOffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDeleteTimeOffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteTimeOffMutation, Types.DeleteTimeOffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteTimeOffMutation, Types.DeleteTimeOffMutationVariables>(DeleteTimeOffDocument, options);
      }
export type DeleteTimeOffMutationHookResult = ReturnType<typeof useDeleteTimeOffMutation>;
export type DeleteTimeOffMutationResult = Apollo.MutationResult<Types.DeleteTimeOffMutation>;
export type DeleteTimeOffMutationOptions = Apollo.BaseMutationOptions<Types.DeleteTimeOffMutation, Types.DeleteTimeOffMutationVariables>;
export const CreateDayNotesDocument = gql`
    mutation CreateDayNotes($date: Time!, $channelId: String!, $note: String!, $authUserId: ID!) {
  createDayNotes(
    input: {date: $date, channelId: $channelId, note: $note}
    authUserId: $authUserId
  ) {
    errors {
      field
      message
      code
    }
    note {
      id
      note
    }
  }
}
    `;
export type CreateDayNotesMutationFn = Apollo.MutationFunction<Types.CreateDayNotesMutation, Types.CreateDayNotesMutationVariables>;

/**
 * __useCreateDayNotesMutation__
 *
 * To run a mutation, you first call `useCreateDayNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDayNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDayNotesMutation, { data, loading, error }] = useCreateDayNotesMutation({
 *   variables: {
 *      date: // value for 'date'
 *      channelId: // value for 'channelId'
 *      note: // value for 'note'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCreateDayNotesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateDayNotesMutation, Types.CreateDayNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateDayNotesMutation, Types.CreateDayNotesMutationVariables>(CreateDayNotesDocument, options);
      }
export type CreateDayNotesMutationHookResult = ReturnType<typeof useCreateDayNotesMutation>;
export type CreateDayNotesMutationResult = Apollo.MutationResult<Types.CreateDayNotesMutation>;
export type CreateDayNotesMutationOptions = Apollo.BaseMutationOptions<Types.CreateDayNotesMutation, Types.CreateDayNotesMutationVariables>;
export const UpdateDayNotesDocument = gql`
    mutation UpdateDayNotes($id: ID!, $date: Time!, $note: String!, $authUserId: ID!) {
  updateDayNotes(
    id: $id
    input: {date: $date, note: $note}
    authUserId: $authUserId
  ) {
    errors {
      field
      message
      code
    }
    note {
      id
      note
      date
      note
      createdAt
      __typename
    }
  }
}
    `;
export type UpdateDayNotesMutationFn = Apollo.MutationFunction<Types.UpdateDayNotesMutation, Types.UpdateDayNotesMutationVariables>;

/**
 * __useUpdateDayNotesMutation__
 *
 * To run a mutation, you first call `useUpdateDayNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDayNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDayNotesMutation, { data, loading, error }] = useUpdateDayNotesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      date: // value for 'date'
 *      note: // value for 'note'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useUpdateDayNotesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateDayNotesMutation, Types.UpdateDayNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateDayNotesMutation, Types.UpdateDayNotesMutationVariables>(UpdateDayNotesDocument, options);
      }
export type UpdateDayNotesMutationHookResult = ReturnType<typeof useUpdateDayNotesMutation>;
export type UpdateDayNotesMutationResult = Apollo.MutationResult<Types.UpdateDayNotesMutation>;
export type UpdateDayNotesMutationOptions = Apollo.BaseMutationOptions<Types.UpdateDayNotesMutation, Types.UpdateDayNotesMutationVariables>;
export const DeleteDayNotesDocument = gql`
    mutation DeleteDayNotes($noteId: ID!) {
  deleteDayNotes(id: $noteId)
}
    `;
export type DeleteDayNotesMutationFn = Apollo.MutationFunction<Types.DeleteDayNotesMutation, Types.DeleteDayNotesMutationVariables>;

/**
 * __useDeleteDayNotesMutation__
 *
 * To run a mutation, you first call `useDeleteDayNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDayNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDayNotesMutation, { data, loading, error }] = useDeleteDayNotesMutation({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useDeleteDayNotesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteDayNotesMutation, Types.DeleteDayNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteDayNotesMutation, Types.DeleteDayNotesMutationVariables>(DeleteDayNotesDocument, options);
      }
export type DeleteDayNotesMutationHookResult = ReturnType<typeof useDeleteDayNotesMutation>;
export type DeleteDayNotesMutationResult = Apollo.MutationResult<Types.DeleteDayNotesMutation>;
export type DeleteDayNotesMutationOptions = Apollo.BaseMutationOptions<Types.DeleteDayNotesMutation, Types.DeleteDayNotesMutationVariables>;
export const CreateRequestSwapDocument = gql`
    mutation CreateRequestSwap($input: RequestSwapInput!, $authUserId: ID) {
  createRequestSwap(input: $input, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    request {
      channelId
      user {
        lastName
      }
    }
  }
}
    `;
export type CreateRequestSwapMutationFn = Apollo.MutationFunction<Types.CreateRequestSwapMutation, Types.CreateRequestSwapMutationVariables>;

/**
 * __useCreateRequestSwapMutation__
 *
 * To run a mutation, you first call `useCreateRequestSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRequestSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRequestSwapMutation, { data, loading, error }] = useCreateRequestSwapMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCreateRequestSwapMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateRequestSwapMutation, Types.CreateRequestSwapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateRequestSwapMutation, Types.CreateRequestSwapMutationVariables>(CreateRequestSwapDocument, options);
      }
export type CreateRequestSwapMutationHookResult = ReturnType<typeof useCreateRequestSwapMutation>;
export type CreateRequestSwapMutationResult = Apollo.MutationResult<Types.CreateRequestSwapMutation>;
export type CreateRequestSwapMutationOptions = Apollo.BaseMutationOptions<Types.CreateRequestSwapMutation, Types.CreateRequestSwapMutationVariables>;
export const CreateRequestOfferDocument = gql`
    mutation CreateRequestOffer($input: RequestOfferInput!, $authUserId: ID) {
  createRequestOffer(input: $input, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    request {
      channelId
      user {
        id
      }
    }
  }
}
    `;
export type CreateRequestOfferMutationFn = Apollo.MutationFunction<Types.CreateRequestOfferMutation, Types.CreateRequestOfferMutationVariables>;

/**
 * __useCreateRequestOfferMutation__
 *
 * To run a mutation, you first call `useCreateRequestOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRequestOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRequestOfferMutation, { data, loading, error }] = useCreateRequestOfferMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCreateRequestOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateRequestOfferMutation, Types.CreateRequestOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateRequestOfferMutation, Types.CreateRequestOfferMutationVariables>(CreateRequestOfferDocument, options);
      }
export type CreateRequestOfferMutationHookResult = ReturnType<typeof useCreateRequestOfferMutation>;
export type CreateRequestOfferMutationResult = Apollo.MutationResult<Types.CreateRequestOfferMutation>;
export type CreateRequestOfferMutationOptions = Apollo.BaseMutationOptions<Types.CreateRequestOfferMutation, Types.CreateRequestOfferMutationVariables>;
export const CancelRequestTimeOffDocument = gql`
    mutation CancelRequestTimeOff($channelId: ID!, $requestId: ID!, $authUserId: ID) {
  cancelRequestTimeOff(
    channelId: $channelId
    requestId: $requestId
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    request {
      id
      status
    }
  }
}
    `;
export type CancelRequestTimeOffMutationFn = Apollo.MutationFunction<Types.CancelRequestTimeOffMutation, Types.CancelRequestTimeOffMutationVariables>;

/**
 * __useCancelRequestTimeOffMutation__
 *
 * To run a mutation, you first call `useCancelRequestTimeOffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelRequestTimeOffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelRequestTimeOffMutation, { data, loading, error }] = useCancelRequestTimeOffMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      requestId: // value for 'requestId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCancelRequestTimeOffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CancelRequestTimeOffMutation, Types.CancelRequestTimeOffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CancelRequestTimeOffMutation, Types.CancelRequestTimeOffMutationVariables>(CancelRequestTimeOffDocument, options);
      }
export type CancelRequestTimeOffMutationHookResult = ReturnType<typeof useCancelRequestTimeOffMutation>;
export type CancelRequestTimeOffMutationResult = Apollo.MutationResult<Types.CancelRequestTimeOffMutation>;
export type CancelRequestTimeOffMutationOptions = Apollo.BaseMutationOptions<Types.CancelRequestTimeOffMutation, Types.CancelRequestTimeOffMutationVariables>;
export const CreateSettingDocument = gql`
    mutation createSetting($input: SettingInput!, $authUserId: ID) {
  createSetting(input: $input, authUserId: $authUserId) {
    errors {
      value
      field
      message
    }
    setting {
      id
      channelId
      userId
      startOfWeek
    }
  }
}
    `;
export type CreateSettingMutationFn = Apollo.MutationFunction<Types.CreateSettingMutation, Types.CreateSettingMutationVariables>;

/**
 * __useCreateSettingMutation__
 *
 * To run a mutation, you first call `useCreateSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSettingMutation, { data, loading, error }] = useCreateSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCreateSettingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateSettingMutation, Types.CreateSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateSettingMutation, Types.CreateSettingMutationVariables>(CreateSettingDocument, options);
      }
export type CreateSettingMutationHookResult = ReturnType<typeof useCreateSettingMutation>;
export type CreateSettingMutationResult = Apollo.MutationResult<Types.CreateSettingMutation>;
export type CreateSettingMutationOptions = Apollo.BaseMutationOptions<Types.CreateSettingMutation, Types.CreateSettingMutationVariables>;
export const UpdateSettingDocument = gql`
    mutation UpdateSetting($id: ID!, $input: SettingInput!, $authUserId: ID) {
  UpdateSetting(id: $id, input: $input, authUserId: $authUserId) {
    errors {
      value
      field
      message
    }
    setting {
      id
      channelId
      userId
      startOfWeek
    }
  }
}
    `;
export type UpdateSettingMutationFn = Apollo.MutationFunction<Types.UpdateSettingMutation, Types.UpdateSettingMutationVariables>;

/**
 * __useUpdateSettingMutation__
 *
 * To run a mutation, you first call `useUpdateSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingMutation, { data, loading, error }] = useUpdateSettingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useUpdateSettingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateSettingMutation, Types.UpdateSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateSettingMutation, Types.UpdateSettingMutationVariables>(UpdateSettingDocument, options);
      }
export type UpdateSettingMutationHookResult = ReturnType<typeof useUpdateSettingMutation>;
export type UpdateSettingMutationResult = Apollo.MutationResult<Types.UpdateSettingMutation>;
export type UpdateSettingMutationOptions = Apollo.BaseMutationOptions<Types.UpdateSettingMutation, Types.UpdateSettingMutationVariables>;
export const DeleteRequestSwapMutationDocument = gql`
    mutation DeleteRequestSwapMutation($id: ID!, $authUserId: ID) {
  deleteRequestSwap(id: $id, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
    request {
      id
      requestNote
      reason
      responseNote
      status
    }
  }
}
    `;
export type DeleteRequestSwapMutationMutationFn = Apollo.MutationFunction<Types.DeleteRequestSwapMutationMutation, Types.DeleteRequestSwapMutationMutationVariables>;

/**
 * __useDeleteRequestSwapMutationMutation__
 *
 * To run a mutation, you first call `useDeleteRequestSwapMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequestSwapMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRequestSwapMutationMutation, { data, loading, error }] = useDeleteRequestSwapMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDeleteRequestSwapMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteRequestSwapMutationMutation, Types.DeleteRequestSwapMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteRequestSwapMutationMutation, Types.DeleteRequestSwapMutationMutationVariables>(DeleteRequestSwapMutationDocument, options);
      }
export type DeleteRequestSwapMutationMutationHookResult = ReturnType<typeof useDeleteRequestSwapMutationMutation>;
export type DeleteRequestSwapMutationMutationResult = Apollo.MutationResult<Types.DeleteRequestSwapMutationMutation>;
export type DeleteRequestSwapMutationMutationOptions = Apollo.BaseMutationOptions<Types.DeleteRequestSwapMutationMutation, Types.DeleteRequestSwapMutationMutationVariables>;
export const CancelRequestSwapDocument = gql`
    mutation CancelRequestSwap($channelId: ID!, $requestId: ID!, $authUserId: ID) {
  cancelRequestSwap(
    channelId: $channelId
    requestId: $requestId
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    request {
      id
      requestNote
      reason
      responseNote
      status
    }
  }
}
    `;
export type CancelRequestSwapMutationFn = Apollo.MutationFunction<Types.CancelRequestSwapMutation, Types.CancelRequestSwapMutationVariables>;

/**
 * __useCancelRequestSwapMutation__
 *
 * To run a mutation, you first call `useCancelRequestSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelRequestSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelRequestSwapMutation, { data, loading, error }] = useCancelRequestSwapMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      requestId: // value for 'requestId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCancelRequestSwapMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CancelRequestSwapMutation, Types.CancelRequestSwapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CancelRequestSwapMutation, Types.CancelRequestSwapMutationVariables>(CancelRequestSwapDocument, options);
      }
export type CancelRequestSwapMutationHookResult = ReturnType<typeof useCancelRequestSwapMutation>;
export type CancelRequestSwapMutationResult = Apollo.MutationResult<Types.CancelRequestSwapMutation>;
export type CancelRequestSwapMutationOptions = Apollo.BaseMutationOptions<Types.CancelRequestSwapMutation, Types.CancelRequestSwapMutationVariables>;
export const ApproveRequestSwapDocument = gql`
    mutation ApproveRequestSwap($id: ID!, $responseNote: String, $authUserId: ID) {
  approveRequestSwap(
    id: $id
    responseNote: $responseNote
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    request {
      id
      requestNote
      reason
      responseNote
      status
    }
  }
}
    `;
export type ApproveRequestSwapMutationFn = Apollo.MutationFunction<Types.ApproveRequestSwapMutation, Types.ApproveRequestSwapMutationVariables>;

/**
 * __useApproveRequestSwapMutation__
 *
 * To run a mutation, you first call `useApproveRequestSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveRequestSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveRequestSwapMutation, { data, loading, error }] = useApproveRequestSwapMutation({
 *   variables: {
 *      id: // value for 'id'
 *      responseNote: // value for 'responseNote'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useApproveRequestSwapMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ApproveRequestSwapMutation, Types.ApproveRequestSwapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ApproveRequestSwapMutation, Types.ApproveRequestSwapMutationVariables>(ApproveRequestSwapDocument, options);
      }
export type ApproveRequestSwapMutationHookResult = ReturnType<typeof useApproveRequestSwapMutation>;
export type ApproveRequestSwapMutationResult = Apollo.MutationResult<Types.ApproveRequestSwapMutation>;
export type ApproveRequestSwapMutationOptions = Apollo.BaseMutationOptions<Types.ApproveRequestSwapMutation, Types.ApproveRequestSwapMutationVariables>;
export const DenyRequestSwapDocument = gql`
    mutation DenyRequestSwap($id: ID!, $responseNote: String, $authUserId: ID) {
  denyRequestSwap(id: $id, responseNote: $responseNote, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
    request {
      id
      requestNote
      reason
      responseNote
      status
    }
  }
}
    `;
export type DenyRequestSwapMutationFn = Apollo.MutationFunction<Types.DenyRequestSwapMutation, Types.DenyRequestSwapMutationVariables>;

/**
 * __useDenyRequestSwapMutation__
 *
 * To run a mutation, you first call `useDenyRequestSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDenyRequestSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [denyRequestSwapMutation, { data, loading, error }] = useDenyRequestSwapMutation({
 *   variables: {
 *      id: // value for 'id'
 *      responseNote: // value for 'responseNote'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDenyRequestSwapMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DenyRequestSwapMutation, Types.DenyRequestSwapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DenyRequestSwapMutation, Types.DenyRequestSwapMutationVariables>(DenyRequestSwapDocument, options);
      }
export type DenyRequestSwapMutationHookResult = ReturnType<typeof useDenyRequestSwapMutation>;
export type DenyRequestSwapMutationResult = Apollo.MutationResult<Types.DenyRequestSwapMutation>;
export type DenyRequestSwapMutationOptions = Apollo.BaseMutationOptions<Types.DenyRequestSwapMutation, Types.DenyRequestSwapMutationVariables>;
export const DeleteRequestTimeOffDocument = gql`
    mutation DeleteRequestTimeOff($id: ID!, $authUserId: ID) {
  deleteRequestTimeOff(id: $id, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
    request {
      id
      status
    }
  }
}
    `;
export type DeleteRequestTimeOffMutationFn = Apollo.MutationFunction<Types.DeleteRequestTimeOffMutation, Types.DeleteRequestTimeOffMutationVariables>;

/**
 * __useDeleteRequestTimeOffMutation__
 *
 * To run a mutation, you first call `useDeleteRequestTimeOffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequestTimeOffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRequestTimeOffMutation, { data, loading, error }] = useDeleteRequestTimeOffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDeleteRequestTimeOffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteRequestTimeOffMutation, Types.DeleteRequestTimeOffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteRequestTimeOffMutation, Types.DeleteRequestTimeOffMutationVariables>(DeleteRequestTimeOffDocument, options);
      }
export type DeleteRequestTimeOffMutationHookResult = ReturnType<typeof useDeleteRequestTimeOffMutation>;
export type DeleteRequestTimeOffMutationResult = Apollo.MutationResult<Types.DeleteRequestTimeOffMutation>;
export type DeleteRequestTimeOffMutationOptions = Apollo.BaseMutationOptions<Types.DeleteRequestTimeOffMutation, Types.DeleteRequestTimeOffMutationVariables>;
export const ApproveRequestTimeOffDocument = gql`
    mutation ApproveRequestTimeOff($id: ID!, $responseNote: String, $authUserId: ID) {
  approveRequestTimeOff(
    id: $id
    responseNote: $responseNote
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    request {
      id
      status
      responseNote
    }
  }
}
    `;
export type ApproveRequestTimeOffMutationFn = Apollo.MutationFunction<Types.ApproveRequestTimeOffMutation, Types.ApproveRequestTimeOffMutationVariables>;

/**
 * __useApproveRequestTimeOffMutation__
 *
 * To run a mutation, you first call `useApproveRequestTimeOffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveRequestTimeOffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveRequestTimeOffMutation, { data, loading, error }] = useApproveRequestTimeOffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      responseNote: // value for 'responseNote'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useApproveRequestTimeOffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ApproveRequestTimeOffMutation, Types.ApproveRequestTimeOffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ApproveRequestTimeOffMutation, Types.ApproveRequestTimeOffMutationVariables>(ApproveRequestTimeOffDocument, options);
      }
export type ApproveRequestTimeOffMutationHookResult = ReturnType<typeof useApproveRequestTimeOffMutation>;
export type ApproveRequestTimeOffMutationResult = Apollo.MutationResult<Types.ApproveRequestTimeOffMutation>;
export type ApproveRequestTimeOffMutationOptions = Apollo.BaseMutationOptions<Types.ApproveRequestTimeOffMutation, Types.ApproveRequestTimeOffMutationVariables>;
export const DenyRequestTimeOffDocument = gql`
    mutation DenyRequestTimeOff($id: ID!, $responseNote: String, $authUserId: ID) {
  denyRequestTimeOff(
    id: $id
    responseNote: $responseNote
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    request {
      id
      status
      responseNote
    }
  }
}
    `;
export type DenyRequestTimeOffMutationFn = Apollo.MutationFunction<Types.DenyRequestTimeOffMutation, Types.DenyRequestTimeOffMutationVariables>;

/**
 * __useDenyRequestTimeOffMutation__
 *
 * To run a mutation, you first call `useDenyRequestTimeOffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDenyRequestTimeOffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [denyRequestTimeOffMutation, { data, loading, error }] = useDenyRequestTimeOffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      responseNote: // value for 'responseNote'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDenyRequestTimeOffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DenyRequestTimeOffMutation, Types.DenyRequestTimeOffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DenyRequestTimeOffMutation, Types.DenyRequestTimeOffMutationVariables>(DenyRequestTimeOffDocument, options);
      }
export type DenyRequestTimeOffMutationHookResult = ReturnType<typeof useDenyRequestTimeOffMutation>;
export type DenyRequestTimeOffMutationResult = Apollo.MutationResult<Types.DenyRequestTimeOffMutation>;
export type DenyRequestTimeOffMutationOptions = Apollo.BaseMutationOptions<Types.DenyRequestTimeOffMutation, Types.DenyRequestTimeOffMutationVariables>;
export const AccountRegisterDocument = gql`
    mutation AccountRegister($input: AccountRegisterInput!) {
  accountRegister(input: $input) {
    requiresConfirmation
    errors {
      field
      message
      code
      addressType
    }
    user {
      id
      email
      firstName
      lastName
      isStaff
      isActive
      phone
      whatsapp
      note
      avatar
      languageCode
      lastLogin
      dateJoined
      updatedAt
    }
  }
}
    `;
export type AccountRegisterMutationFn = Apollo.MutationFunction<Types.AccountRegisterMutation, Types.AccountRegisterMutationVariables>;

/**
 * __useAccountRegisterMutation__
 *
 * To run a mutation, you first call `useAccountRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountRegisterMutation, { data, loading, error }] = useAccountRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.AccountRegisterMutation, Types.AccountRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.AccountRegisterMutation, Types.AccountRegisterMutationVariables>(AccountRegisterDocument, options);
      }
export type AccountRegisterMutationHookResult = ReturnType<typeof useAccountRegisterMutation>;
export type AccountRegisterMutationResult = Apollo.MutationResult<Types.AccountRegisterMutation>;
export type AccountRegisterMutationOptions = Apollo.BaseMutationOptions<Types.AccountRegisterMutation, Types.AccountRegisterMutationVariables>;
export const CreateRequestDocument = gql`
    mutation CreateRequest($channelId: ID!, $userId: ID!, $type: String!) {
  createRequest(input: {channelId: $channelId, userId: $userId, type: $type}) {
    id
    channelId
    type
    userId
    createdAt
  }
}
    `;
export type CreateRequestMutationFn = Apollo.MutationFunction<Types.CreateRequestMutation, Types.CreateRequestMutationVariables>;

/**
 * __useCreateRequestMutation__
 *
 * To run a mutation, you first call `useCreateRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRequestMutation, { data, loading, error }] = useCreateRequestMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      userId: // value for 'userId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateRequestMutation, Types.CreateRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateRequestMutation, Types.CreateRequestMutationVariables>(CreateRequestDocument, options);
      }
export type CreateRequestMutationHookResult = ReturnType<typeof useCreateRequestMutation>;
export type CreateRequestMutationResult = Apollo.MutationResult<Types.CreateRequestMutation>;
export type CreateRequestMutationOptions = Apollo.BaseMutationOptions<Types.CreateRequestMutation, Types.CreateRequestMutationVariables>;
export const DeleteRequestDocument = gql`
    mutation DeleteRequest($id: ID!) {
  deleteRequest(id: $id)
}
    `;
export type DeleteRequestMutationFn = Apollo.MutationFunction<Types.DeleteRequestMutation, Types.DeleteRequestMutationVariables>;

/**
 * __useDeleteRequestMutation__
 *
 * To run a mutation, you first call `useDeleteRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRequestMutation, { data, loading, error }] = useDeleteRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteRequestMutation, Types.DeleteRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteRequestMutation, Types.DeleteRequestMutationVariables>(DeleteRequestDocument, options);
      }
export type DeleteRequestMutationHookResult = ReturnType<typeof useDeleteRequestMutation>;
export type DeleteRequestMutationResult = Apollo.MutationResult<Types.DeleteRequestMutation>;
export type DeleteRequestMutationOptions = Apollo.BaseMutationOptions<Types.DeleteRequestMutation, Types.DeleteRequestMutationVariables>;
export const UpdateRequestOfferDocument = gql`
    mutation UpdateRequestOffer($id: ID!, $input: RequestOfferInput!, $authUserId: ID) {
  updateRequestOffer(id: $id, input: $input, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
    request {
      channelId
      id
      requestId
      responseNote
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;
export type UpdateRequestOfferMutationFn = Apollo.MutationFunction<Types.UpdateRequestOfferMutation, Types.UpdateRequestOfferMutationVariables>;

/**
 * __useUpdateRequestOfferMutation__
 *
 * To run a mutation, you first call `useUpdateRequestOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRequestOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRequestOfferMutation, { data, loading, error }] = useUpdateRequestOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useUpdateRequestOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateRequestOfferMutation, Types.UpdateRequestOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateRequestOfferMutation, Types.UpdateRequestOfferMutationVariables>(UpdateRequestOfferDocument, options);
      }
export type UpdateRequestOfferMutationHookResult = ReturnType<typeof useUpdateRequestOfferMutation>;
export type UpdateRequestOfferMutationResult = Apollo.MutationResult<Types.UpdateRequestOfferMutation>;
export type UpdateRequestOfferMutationOptions = Apollo.BaseMutationOptions<Types.UpdateRequestOfferMutation, Types.UpdateRequestOfferMutationVariables>;
export const DeleteRequestOfferDocument = gql`
    mutation DeleteRequestOffer($id: ID!, $authUserId: ID) {
  deleteRequestOffer(id: $id, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
    request {
      id
      status
    }
  }
}
    `;
export type DeleteRequestOfferMutationFn = Apollo.MutationFunction<Types.DeleteRequestOfferMutation, Types.DeleteRequestOfferMutationVariables>;

/**
 * __useDeleteRequestOfferMutation__
 *
 * To run a mutation, you first call `useDeleteRequestOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequestOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRequestOfferMutation, { data, loading, error }] = useDeleteRequestOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDeleteRequestOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteRequestOfferMutation, Types.DeleteRequestOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DeleteRequestOfferMutation, Types.DeleteRequestOfferMutationVariables>(DeleteRequestOfferDocument, options);
      }
export type DeleteRequestOfferMutationHookResult = ReturnType<typeof useDeleteRequestOfferMutation>;
export type DeleteRequestOfferMutationResult = Apollo.MutationResult<Types.DeleteRequestOfferMutation>;
export type DeleteRequestOfferMutationOptions = Apollo.BaseMutationOptions<Types.DeleteRequestOfferMutation, Types.DeleteRequestOfferMutationVariables>;
export const CancelRequestOfferDocument = gql`
    mutation CancelRequestOffer($channelId: ID!, $requestId: ID!, $authUserId: ID) {
  cancelRequestOffer(
    channelId: $channelId
    requestId: $requestId
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    request {
      id
      requestNote
      reason
      responseNote
      status
    }
  }
}
    `;
export type CancelRequestOfferMutationFn = Apollo.MutationFunction<Types.CancelRequestOfferMutation, Types.CancelRequestOfferMutationVariables>;

/**
 * __useCancelRequestOfferMutation__
 *
 * To run a mutation, you first call `useCancelRequestOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelRequestOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelRequestOfferMutation, { data, loading, error }] = useCancelRequestOfferMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      requestId: // value for 'requestId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCancelRequestOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CancelRequestOfferMutation, Types.CancelRequestOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CancelRequestOfferMutation, Types.CancelRequestOfferMutationVariables>(CancelRequestOfferDocument, options);
      }
export type CancelRequestOfferMutationHookResult = ReturnType<typeof useCancelRequestOfferMutation>;
export type CancelRequestOfferMutationResult = Apollo.MutationResult<Types.CancelRequestOfferMutation>;
export type CancelRequestOfferMutationOptions = Apollo.BaseMutationOptions<Types.CancelRequestOfferMutation, Types.CancelRequestOfferMutationVariables>;
export const ApproveRequestOfferDocument = gql`
    mutation ApproveRequestOffer($id: ID!, $responseNote: String, $authUserId: ID) {
  approveRequestOffer(
    id: $id
    responseNote: $responseNote
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    request {
      id
      status
    }
  }
}
    `;
export type ApproveRequestOfferMutationFn = Apollo.MutationFunction<Types.ApproveRequestOfferMutation, Types.ApproveRequestOfferMutationVariables>;

/**
 * __useApproveRequestOfferMutation__
 *
 * To run a mutation, you first call `useApproveRequestOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveRequestOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveRequestOfferMutation, { data, loading, error }] = useApproveRequestOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      responseNote: // value for 'responseNote'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useApproveRequestOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ApproveRequestOfferMutation, Types.ApproveRequestOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ApproveRequestOfferMutation, Types.ApproveRequestOfferMutationVariables>(ApproveRequestOfferDocument, options);
      }
export type ApproveRequestOfferMutationHookResult = ReturnType<typeof useApproveRequestOfferMutation>;
export type ApproveRequestOfferMutationResult = Apollo.MutationResult<Types.ApproveRequestOfferMutation>;
export type ApproveRequestOfferMutationOptions = Apollo.BaseMutationOptions<Types.ApproveRequestOfferMutation, Types.ApproveRequestOfferMutationVariables>;
export const DenyRequestOfferDocument = gql`
    mutation DenyRequestOffer($id: ID!, $responseNote: String, $authUserId: ID) {
  denyRequestOffer(id: $id, responseNote: $responseNote, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
    request {
      id
      status
      responseNote
    }
  }
}
    `;
export type DenyRequestOfferMutationFn = Apollo.MutationFunction<Types.DenyRequestOfferMutation, Types.DenyRequestOfferMutationVariables>;

/**
 * __useDenyRequestOfferMutation__
 *
 * To run a mutation, you first call `useDenyRequestOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDenyRequestOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [denyRequestOfferMutation, { data, loading, error }] = useDenyRequestOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      responseNote: // value for 'responseNote'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useDenyRequestOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DenyRequestOfferMutation, Types.DenyRequestOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.DenyRequestOfferMutation, Types.DenyRequestOfferMutationVariables>(DenyRequestOfferDocument, options);
      }
export type DenyRequestOfferMutationHookResult = ReturnType<typeof useDenyRequestOfferMutation>;
export type DenyRequestOfferMutationResult = Apollo.MutationResult<Types.DenyRequestOfferMutation>;
export type DenyRequestOfferMutationOptions = Apollo.BaseMutationOptions<Types.DenyRequestOfferMutation, Types.DenyRequestOfferMutationVariables>;
export const AssignOpenShiftDocument = gql`
    mutation AssignOpenShift($channelId: ID!, $openShiftId: ID!, $shiftGroupId: ID!, $userId: ID!, $authUserId: ID) {
  openShiftAssign(
    channelId: $channelId
    openShiftId: $openShiftId
    shiftGroupId: $shiftGroupId
    userId: $userId
    authUserId: $authUserId
  ) {
    errors {
      code
      field
      message
    }
    assignedShift {
      id
      break
      color
      startTime
      endTime
      label
      note
      break
      userId
      channelId
      isOpen
      isShared
      ShiftActivities {
        id
        color
        startTime
        endTime
        code
        name
        isPaid
      }
    }
  }
}
    `;
export type AssignOpenShiftMutationFn = Apollo.MutationFunction<Types.AssignOpenShiftMutation, Types.AssignOpenShiftMutationVariables>;

/**
 * __useAssignOpenShiftMutation__
 *
 * To run a mutation, you first call `useAssignOpenShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignOpenShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignOpenShiftMutation, { data, loading, error }] = useAssignOpenShiftMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      openShiftId: // value for 'openShiftId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      userId: // value for 'userId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useAssignOpenShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.AssignOpenShiftMutation, Types.AssignOpenShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.AssignOpenShiftMutation, Types.AssignOpenShiftMutationVariables>(AssignOpenShiftDocument, options);
      }
export type AssignOpenShiftMutationHookResult = ReturnType<typeof useAssignOpenShiftMutation>;
export type AssignOpenShiftMutationResult = Apollo.MutationResult<Types.AssignOpenShiftMutation>;
export type AssignOpenShiftMutationOptions = Apollo.BaseMutationOptions<Types.AssignOpenShiftMutation, Types.AssignOpenShiftMutationVariables>;
export const ChannelCreateDocument = gql`
    mutation ChannelCreate($name: String!, $slug: String!, $currencyCode: String!, $defaultCountry: CountryCode!, $isActive: Boolean!) {
  channelCreate(
    input: {name: $name, slug: $slug, currencyCode: $currencyCode, defaultCountry: $defaultCountry, isActive: $isActive}
  ) {
    id
    name
    slug
    currencyCode
    defaultCountry
  }
}
    `;
export type ChannelCreateMutationFn = Apollo.MutationFunction<Types.ChannelCreateMutation, Types.ChannelCreateMutationVariables>;

/**
 * __useChannelCreateMutation__
 *
 * To run a mutation, you first call `useChannelCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChannelCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [channelCreateMutation, { data, loading, error }] = useChannelCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *      currencyCode: // value for 'currencyCode'
 *      defaultCountry: // value for 'defaultCountry'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useChannelCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ChannelCreateMutation, Types.ChannelCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ChannelCreateMutation, Types.ChannelCreateMutationVariables>(ChannelCreateDocument, options);
      }
export type ChannelCreateMutationHookResult = ReturnType<typeof useChannelCreateMutation>;
export type ChannelCreateMutationResult = Apollo.MutationResult<Types.ChannelCreateMutation>;
export type ChannelCreateMutationOptions = Apollo.BaseMutationOptions<Types.ChannelCreateMutation, Types.ChannelCreateMutationVariables>;
export const ChannelUpdateDocument = gql`
    mutation ChannelUpdate($id: ID!, $name: String!, $slug: String!, $currencyCode: String!, $defaultCountry: CountryCode!, $isActive: Boolean!) {
  channelUpdate(
    input: {name: $name, slug: $slug, currencyCode: $currencyCode, defaultCountry: $defaultCountry, isActive: $isActive}
    id: $id
  ) {
    id
    name
    slug
    currencyCode
    defaultCountry
  }
}
    `;
export type ChannelUpdateMutationFn = Apollo.MutationFunction<Types.ChannelUpdateMutation, Types.ChannelUpdateMutationVariables>;

/**
 * __useChannelUpdateMutation__
 *
 * To run a mutation, you first call `useChannelUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChannelUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [channelUpdateMutation, { data, loading, error }] = useChannelUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *      currencyCode: // value for 'currencyCode'
 *      defaultCountry: // value for 'defaultCountry'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useChannelUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ChannelUpdateMutation, Types.ChannelUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ChannelUpdateMutation, Types.ChannelUpdateMutationVariables>(ChannelUpdateDocument, options);
      }
export type ChannelUpdateMutationHookResult = ReturnType<typeof useChannelUpdateMutation>;
export type ChannelUpdateMutationResult = Apollo.MutationResult<Types.ChannelUpdateMutation>;
export type ChannelUpdateMutationOptions = Apollo.BaseMutationOptions<Types.ChannelUpdateMutation, Types.ChannelUpdateMutationVariables>;
export const MoveOpenShiftToUserDocument = gql`
    mutation moveOpenShiftToUser($channelId: ID!, $openShiftId: ID!, $shiftGroupId: ID!, $userId: ID!, $authUserId: ID, $startTime: Time!, $endTime: Time!) {
  moveOpenShiftToUser(
    channelId: $channelId
    openShiftId: $openShiftId
    shiftGroupId: $shiftGroupId
    userId: $userId
    authUserId: $authUserId
    startTime: $startTime
    endTime: $endTime
  ) {
    errors {
      code
      field
      message
    }
    assignedShift {
      id
      break
      color
      startTime
      endTime
      label
      note
      break
      userId
      channelId
      isOpen
      isShared
      ShiftActivities {
        id
        color
        startTime
        endTime
        code
        name
        isPaid
      }
    }
  }
}
    `;
export type MoveOpenShiftToUserMutationFn = Apollo.MutationFunction<Types.MoveOpenShiftToUserMutation, Types.MoveOpenShiftToUserMutationVariables>;

/**
 * __useMoveOpenShiftToUserMutation__
 *
 * To run a mutation, you first call `useMoveOpenShiftToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveOpenShiftToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveOpenShiftToUserMutation, { data, loading, error }] = useMoveOpenShiftToUserMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      openShiftId: // value for 'openShiftId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      userId: // value for 'userId'
 *      authUserId: // value for 'authUserId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *   },
 * });
 */
export function useMoveOpenShiftToUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.MoveOpenShiftToUserMutation, Types.MoveOpenShiftToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.MoveOpenShiftToUserMutation, Types.MoveOpenShiftToUserMutationVariables>(MoveOpenShiftToUserDocument, options);
      }
export type MoveOpenShiftToUserMutationHookResult = ReturnType<typeof useMoveOpenShiftToUserMutation>;
export type MoveOpenShiftToUserMutationResult = Apollo.MutationResult<Types.MoveOpenShiftToUserMutation>;
export type MoveOpenShiftToUserMutationOptions = Apollo.BaseMutationOptions<Types.MoveOpenShiftToUserMutation, Types.MoveOpenShiftToUserMutationVariables>;
export const CopyAssignedShiftsDocument = gql`
    mutation CopyAssignedShifts($input: [AssignedShiftInput!]!, $authUserId: ID, $numOfCopies: Int, $copyDate: Time!) {
  CopyAssignedShifts(
    input: $input
    authUserId: $authUserId
    numOfCopies: $numOfCopies
    copyDate: $copyDate
  ) {
    errors {
      field
      message
      code
    }
    assignedShift {
      id
      type
      label
      color
    }
  }
}
    `;
export type CopyAssignedShiftsMutationFn = Apollo.MutationFunction<Types.CopyAssignedShiftsMutation, Types.CopyAssignedShiftsMutationVariables>;

/**
 * __useCopyAssignedShiftsMutation__
 *
 * To run a mutation, you first call `useCopyAssignedShiftsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopyAssignedShiftsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copyAssignedShiftsMutation, { data, loading, error }] = useCopyAssignedShiftsMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *      numOfCopies: // value for 'numOfCopies'
 *      copyDate: // value for 'copyDate'
 *   },
 * });
 */
export function useCopyAssignedShiftsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CopyAssignedShiftsMutation, Types.CopyAssignedShiftsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CopyAssignedShiftsMutation, Types.CopyAssignedShiftsMutationVariables>(CopyAssignedShiftsDocument, options);
      }
export type CopyAssignedShiftsMutationHookResult = ReturnType<typeof useCopyAssignedShiftsMutation>;
export type CopyAssignedShiftsMutationResult = Apollo.MutationResult<Types.CopyAssignedShiftsMutation>;
export type CopyAssignedShiftsMutationOptions = Apollo.BaseMutationOptions<Types.CopyAssignedShiftsMutation, Types.CopyAssignedShiftsMutationVariables>;
export const CopyOpenShiftsDocument = gql`
    mutation CopyOpenShifts($input: [OpenShiftInput!]!, $authUserId: ID, $numOfCopies: Int, $copyDate: Time!) {
  CopyOpenShifts(
    input: $input
    authUserId: $authUserId
    numOfCopies: $numOfCopies
    copyDate: $copyDate
  ) {
    errors {
      field
      message
      code
    }
    openShift {
      id
      channelId
      shiftGroupId
      break
      slots
      startTime
      endTime
    }
  }
}
    `;
export type CopyOpenShiftsMutationFn = Apollo.MutationFunction<Types.CopyOpenShiftsMutation, Types.CopyOpenShiftsMutationVariables>;

/**
 * __useCopyOpenShiftsMutation__
 *
 * To run a mutation, you first call `useCopyOpenShiftsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopyOpenShiftsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copyOpenShiftsMutation, { data, loading, error }] = useCopyOpenShiftsMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *      numOfCopies: // value for 'numOfCopies'
 *      copyDate: // value for 'copyDate'
 *   },
 * });
 */
export function useCopyOpenShiftsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CopyOpenShiftsMutation, Types.CopyOpenShiftsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CopyOpenShiftsMutation, Types.CopyOpenShiftsMutationVariables>(CopyOpenShiftsDocument, options);
      }
export type CopyOpenShiftsMutationHookResult = ReturnType<typeof useCopyOpenShiftsMutation>;
export type CopyOpenShiftsMutationResult = Apollo.MutationResult<Types.CopyOpenShiftsMutation>;
export type CopyOpenShiftsMutationOptions = Apollo.BaseMutationOptions<Types.CopyOpenShiftsMutation, Types.CopyOpenShiftsMutationVariables>;
export const CreateTimeSetupDocument = gql`
    mutation createTimeSetup($input: TimeSetupInput, $authUserId: ID) {
  createTimeSetup(input: $input, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
  }
}
    `;
export type CreateTimeSetupMutationFn = Apollo.MutationFunction<Types.CreateTimeSetupMutation, Types.CreateTimeSetupMutationVariables>;

/**
 * __useCreateTimeSetupMutation__
 *
 * To run a mutation, you first call `useCreateTimeSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimeSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimeSetupMutation, { data, loading, error }] = useCreateTimeSetupMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useCreateTimeSetupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateTimeSetupMutation, Types.CreateTimeSetupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateTimeSetupMutation, Types.CreateTimeSetupMutationVariables>(CreateTimeSetupDocument, options);
      }
export type CreateTimeSetupMutationHookResult = ReturnType<typeof useCreateTimeSetupMutation>;
export type CreateTimeSetupMutationResult = Apollo.MutationResult<Types.CreateTimeSetupMutation>;
export type CreateTimeSetupMutationOptions = Apollo.BaseMutationOptions<Types.CreateTimeSetupMutation, Types.CreateTimeSetupMutationVariables>;
export const UpdateTimeSetupDocument = gql`
    mutation updateTimeSetup($id: ID!, $input: TimeSetupInput, $authUserId: ID) {
  updateTimeSetup(id: $id, input: $input, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
  }
}
    `;
export type UpdateTimeSetupMutationFn = Apollo.MutationFunction<Types.UpdateTimeSetupMutation, Types.UpdateTimeSetupMutationVariables>;

/**
 * __useUpdateTimeSetupMutation__
 *
 * To run a mutation, you first call `useUpdateTimeSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimeSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimeSetupMutation, { data, loading, error }] = useUpdateTimeSetupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useUpdateTimeSetupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateTimeSetupMutation, Types.UpdateTimeSetupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateTimeSetupMutation, Types.UpdateTimeSetupMutationVariables>(UpdateTimeSetupDocument, options);
      }
export type UpdateTimeSetupMutationHookResult = ReturnType<typeof useUpdateTimeSetupMutation>;
export type UpdateTimeSetupMutationResult = Apollo.MutationResult<Types.UpdateTimeSetupMutation>;
export type UpdateTimeSetupMutationOptions = Apollo.BaseMutationOptions<Types.UpdateTimeSetupMutation, Types.UpdateTimeSetupMutationVariables>;
export const ClockInDocument = gql`
    mutation clockIn($input: TimeCardInput!, $authUserId: ID) {
  clockIn(input: $input, authUserId: $authUserId) {
    errors {
      field
      message
    }
    timeCard {
      id
    }
  }
}
    `;
export type ClockInMutationFn = Apollo.MutationFunction<Types.ClockInMutation, Types.ClockInMutationVariables>;

/**
 * __useClockInMutation__
 *
 * To run a mutation, you first call `useClockInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClockInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clockInMutation, { data, loading, error }] = useClockInMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useClockInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ClockInMutation, Types.ClockInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ClockInMutation, Types.ClockInMutationVariables>(ClockInDocument, options);
      }
export type ClockInMutationHookResult = ReturnType<typeof useClockInMutation>;
export type ClockInMutationResult = Apollo.MutationResult<Types.ClockInMutation>;
export type ClockInMutationOptions = Apollo.BaseMutationOptions<Types.ClockInMutation, Types.ClockInMutationVariables>;
export const ClockOutDocument = gql`
    mutation clockOut($id: ID!, $input: TimeCardInput!, $authUserId: ID) {
  clockOut(id: $id, input: $input, authUserId: $authUserId) {
    errors {
      field
      message
    }
    timeCard {
      id
    }
  }
}
    `;
export type ClockOutMutationFn = Apollo.MutationFunction<Types.ClockOutMutation, Types.ClockOutMutationVariables>;

/**
 * __useClockOutMutation__
 *
 * To run a mutation, you first call `useClockOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClockOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clockOutMutation, { data, loading, error }] = useClockOutMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useClockOutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.ClockOutMutation, Types.ClockOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.ClockOutMutation, Types.ClockOutMutationVariables>(ClockOutDocument, options);
      }
export type ClockOutMutationHookResult = ReturnType<typeof useClockOutMutation>;
export type ClockOutMutationResult = Apollo.MutationResult<Types.ClockOutMutation>;
export type ClockOutMutationOptions = Apollo.BaseMutationOptions<Types.ClockOutMutation, Types.ClockOutMutationVariables>;
export const StartBreakDocument = gql`
    mutation startBreak($input: TimeCardInput, $timeCardID: ID!, $authUserId: ID) {
  startBreak(input: $input, timeCardID: $timeCardID, authUserId: $authUserId) {
    errors {
      message
      field
      code
    }
    timeCard {
      id
    }
  }
}
    `;
export type StartBreakMutationFn = Apollo.MutationFunction<Types.StartBreakMutation, Types.StartBreakMutationVariables>;

/**
 * __useStartBreakMutation__
 *
 * To run a mutation, you first call `useStartBreakMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartBreakMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startBreakMutation, { data, loading, error }] = useStartBreakMutation({
 *   variables: {
 *      input: // value for 'input'
 *      timeCardID: // value for 'timeCardID'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useStartBreakMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.StartBreakMutation, Types.StartBreakMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.StartBreakMutation, Types.StartBreakMutationVariables>(StartBreakDocument, options);
      }
export type StartBreakMutationHookResult = ReturnType<typeof useStartBreakMutation>;
export type StartBreakMutationResult = Apollo.MutationResult<Types.StartBreakMutation>;
export type StartBreakMutationOptions = Apollo.BaseMutationOptions<Types.StartBreakMutation, Types.StartBreakMutationVariables>;
export const EndBreakDocument = gql`
    mutation endBreak($input: TimeCardInput, $timeCardID: ID!, $authUserId: ID) {
  endBreak(input: $input, timeCardID: $timeCardID, authUserId: $authUserId) {
    errors {
      code
      field
      message
    }
  }
}
    `;
export type EndBreakMutationFn = Apollo.MutationFunction<Types.EndBreakMutation, Types.EndBreakMutationVariables>;

/**
 * __useEndBreakMutation__
 *
 * To run a mutation, you first call `useEndBreakMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndBreakMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endBreakMutation, { data, loading, error }] = useEndBreakMutation({
 *   variables: {
 *      input: // value for 'input'
 *      timeCardID: // value for 'timeCardID'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useEndBreakMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.EndBreakMutation, Types.EndBreakMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.EndBreakMutation, Types.EndBreakMutationVariables>(EndBreakDocument, options);
      }
export type EndBreakMutationHookResult = ReturnType<typeof useEndBreakMutation>;
export type EndBreakMutationResult = Apollo.MutationResult<Types.EndBreakMutation>;
export type EndBreakMutationOptions = Apollo.BaseMutationOptions<Types.EndBreakMutation, Types.EndBreakMutationVariables>;
export const SharedAssignedShiftDocument = gql`
    mutation sharedAssignedShift($input: [AssignedShiftsInput!]!, $authUserId: ID!) {
  sharedAssignedShift(input: $input, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    assignedShift {
      id
      userId
      startTime
      endTime
      label
      note
      color
    }
  }
}
    `;
export type SharedAssignedShiftMutationFn = Apollo.MutationFunction<Types.SharedAssignedShiftMutation, Types.SharedAssignedShiftMutationVariables>;

/**
 * __useSharedAssignedShiftMutation__
 *
 * To run a mutation, you first call `useSharedAssignedShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSharedAssignedShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sharedAssignedShiftMutation, { data, loading, error }] = useSharedAssignedShiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useSharedAssignedShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.SharedAssignedShiftMutation, Types.SharedAssignedShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.SharedAssignedShiftMutation, Types.SharedAssignedShiftMutationVariables>(SharedAssignedShiftDocument, options);
      }
export type SharedAssignedShiftMutationHookResult = ReturnType<typeof useSharedAssignedShiftMutation>;
export type SharedAssignedShiftMutationResult = Apollo.MutationResult<Types.SharedAssignedShiftMutation>;
export type SharedAssignedShiftMutationOptions = Apollo.BaseMutationOptions<Types.SharedAssignedShiftMutation, Types.SharedAssignedShiftMutationVariables>;
export const SharedOpenShiftDocument = gql`
    mutation SharedOpenShift($input: [OpenShiftsInput!]!, $authUserId: ID!) {
  SharedOpenShift(input: $input, authUserId: $authUserId) {
    errors {
      field
      message
      code
    }
    openShift {
      id
      startTime
      endTime
      label
      note
      color
    }
  }
}
    `;
export type SharedOpenShiftMutationFn = Apollo.MutationFunction<Types.SharedOpenShiftMutation, Types.SharedOpenShiftMutationVariables>;

/**
 * __useSharedOpenShiftMutation__
 *
 * To run a mutation, you first call `useSharedOpenShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSharedOpenShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sharedOpenShiftMutation, { data, loading, error }] = useSharedOpenShiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useSharedOpenShiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.SharedOpenShiftMutation, Types.SharedOpenShiftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.SharedOpenShiftMutation, Types.SharedOpenShiftMutationVariables>(SharedOpenShiftDocument, options);
      }
export type SharedOpenShiftMutationHookResult = ReturnType<typeof useSharedOpenShiftMutation>;
export type SharedOpenShiftMutationResult = Apollo.MutationResult<Types.SharedOpenShiftMutation>;
export type SharedOpenShiftMutationOptions = Apollo.BaseMutationOptions<Types.SharedOpenShiftMutation, Types.SharedOpenShiftMutationVariables>;
export const GetShiftGroupsDocument = gql`
    query GetShiftGroups($first: Int, $channel: String!, $authUserId: ID) {
  shiftGroups(first: $first, channel: $channel, authUserId: $authUserId) {
    name
    id
    channelId
  }
}
    `;

/**
 * __useGetShiftGroupsQuery__
 *
 * To run a query within a React component, call `useGetShiftGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftGroupsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      channel: // value for 'channel'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetShiftGroupsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetShiftGroupsQuery, Types.GetShiftGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetShiftGroupsQuery, Types.GetShiftGroupsQueryVariables>(GetShiftGroupsDocument, options);
      }
export function useGetShiftGroupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetShiftGroupsQuery, Types.GetShiftGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetShiftGroupsQuery, Types.GetShiftGroupsQueryVariables>(GetShiftGroupsDocument, options);
        }
export function useGetShiftGroupsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetShiftGroupsQuery, Types.GetShiftGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetShiftGroupsQuery, Types.GetShiftGroupsQueryVariables>(GetShiftGroupsDocument, options);
        }
export type GetShiftGroupsQueryHookResult = ReturnType<typeof useGetShiftGroupsQuery>;
export type GetShiftGroupsLazyQueryHookResult = ReturnType<typeof useGetShiftGroupsLazyQuery>;
export type GetShiftGroupsSuspenseQueryHookResult = ReturnType<typeof useGetShiftGroupsSuspenseQuery>;
export type GetShiftGroupsQueryResult = Apollo.QueryResult<Types.GetShiftGroupsQuery, Types.GetShiftGroupsQueryVariables>;
export const GetShiftGroupMembersDocument = gql`
    query GetShiftGroupMembers($channel: String!, $shiftGroupId: ID!, $authUserId: ID) {
  getShiftGroupMembers(
    channel: $channel
    shiftGroupId: $shiftGroupId
    authUserId: $authUserId
  ) {
    id
    firstName
    lastName
    email
    avatar
    isStaff
    note
  }
}
    `;

/**
 * __useGetShiftGroupMembersQuery__
 *
 * To run a query within a React component, call `useGetShiftGroupMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftGroupMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftGroupMembersQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetShiftGroupMembersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetShiftGroupMembersQuery, Types.GetShiftGroupMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetShiftGroupMembersQuery, Types.GetShiftGroupMembersQueryVariables>(GetShiftGroupMembersDocument, options);
      }
export function useGetShiftGroupMembersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetShiftGroupMembersQuery, Types.GetShiftGroupMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetShiftGroupMembersQuery, Types.GetShiftGroupMembersQueryVariables>(GetShiftGroupMembersDocument, options);
        }
export function useGetShiftGroupMembersSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetShiftGroupMembersQuery, Types.GetShiftGroupMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetShiftGroupMembersQuery, Types.GetShiftGroupMembersQueryVariables>(GetShiftGroupMembersDocument, options);
        }
export type GetShiftGroupMembersQueryHookResult = ReturnType<typeof useGetShiftGroupMembersQuery>;
export type GetShiftGroupMembersLazyQueryHookResult = ReturnType<typeof useGetShiftGroupMembersLazyQuery>;
export type GetShiftGroupMembersSuspenseQueryHookResult = ReturnType<typeof useGetShiftGroupMembersSuspenseQuery>;
export type GetShiftGroupMembersQueryResult = Apollo.QueryResult<Types.GetShiftGroupMembersQuery, Types.GetShiftGroupMembersQueryVariables>;
export const GetAllRequestsDocument = gql`
    query GetAllRequests($channel: String!, $authUserId: ID) {
  getAllRequests(channel: $channel, authUserId: $authUserId) {
    edges {
      node {
        id
        requestId
        status
        startTime
        endTime
        requestNote
        reason
        responseNote
        channelId
        isAllDay
        type
        status
        startTime
        responseAt
        createdAt
        shiftToOffer {
          id
          break
          color
          startTime
          endTime
          label
          note
          userId
          userName
          userEmail
          userLastName
          channelId
          shiftGroupId
          type
          isOpen
          isShared
          ShiftActivities {
            id
            channelId
            assignedShiftId
            userId
            name
            code
            color
            startTime
            endTime
            isPaid
          }
        }
        user {
          id
          firstName
          lastName
          email
          avatar
          isActive
          isStaff
          lastLogin
        }
        toSwapWith {
          id
          break
          color
          startTime
          endTime
          label
          note
          userId
          userName
          userEmail
          userLastName
          channelId
          shiftGroupId
          type
          isOpen
          isShared
          ShiftActivities {
            id
            channelId
            assignedShiftId
            userId
            name
            code
            color
            startTime
            endTime
            isPaid
          }
        }
        shiftToSwap {
          id
          break
          color
          startTime
          endTime
          label
          note
          userId
          userName
          userEmail
          userLastName
          channelId
          shiftGroupId
          type
          isOpen
          isShared
          ShiftActivities {
            id
            channelId
            assignedShiftId
            userId
            name
            code
            color
            startTime
            endTime
            isPaid
          }
        }
        shiftOfferedTo {
          id
          firstName
          lastName
          email
          avatar
        }
        responseBy {
          id
          firstName
          lastName
          email
          avatar
        }
      }
    }
    totalCount
  }
}
    `;

/**
 * __useGetAllRequestsQuery__
 *
 * To run a query within a React component, call `useGetAllRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRequestsQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetAllRequestsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetAllRequestsQuery, Types.GetAllRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetAllRequestsQuery, Types.GetAllRequestsQueryVariables>(GetAllRequestsDocument, options);
      }
export function useGetAllRequestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllRequestsQuery, Types.GetAllRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetAllRequestsQuery, Types.GetAllRequestsQueryVariables>(GetAllRequestsDocument, options);
        }
export function useGetAllRequestsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetAllRequestsQuery, Types.GetAllRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetAllRequestsQuery, Types.GetAllRequestsQueryVariables>(GetAllRequestsDocument, options);
        }
export type GetAllRequestsQueryHookResult = ReturnType<typeof useGetAllRequestsQuery>;
export type GetAllRequestsLazyQueryHookResult = ReturnType<typeof useGetAllRequestsLazyQuery>;
export type GetAllRequestsSuspenseQueryHookResult = ReturnType<typeof useGetAllRequestsSuspenseQuery>;
export type GetAllRequestsQueryResult = Apollo.QueryResult<Types.GetAllRequestsQuery, Types.GetAllRequestsQueryVariables>;
export const GetNonShiftGroupMembersDocument = gql`
    query GetNonShiftGroupMembers($channelId: ID!, $shiftGroupId: ID!, $authUserId: ID) {
  getNonShiftGroupMembers(
    channelId: $channelId
    shiftGroupId: $shiftGroupId
    authUserId: $authUserId
  ) {
    status
    message
    result {
      id
      email
      metadata
    }
  }
}
    `;

/**
 * __useGetNonShiftGroupMembersQuery__
 *
 * To run a query within a React component, call `useGetNonShiftGroupMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNonShiftGroupMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNonShiftGroupMembersQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetNonShiftGroupMembersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetNonShiftGroupMembersQuery, Types.GetNonShiftGroupMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetNonShiftGroupMembersQuery, Types.GetNonShiftGroupMembersQueryVariables>(GetNonShiftGroupMembersDocument, options);
      }
export function useGetNonShiftGroupMembersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetNonShiftGroupMembersQuery, Types.GetNonShiftGroupMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetNonShiftGroupMembersQuery, Types.GetNonShiftGroupMembersQueryVariables>(GetNonShiftGroupMembersDocument, options);
        }
export function useGetNonShiftGroupMembersSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetNonShiftGroupMembersQuery, Types.GetNonShiftGroupMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetNonShiftGroupMembersQuery, Types.GetNonShiftGroupMembersQueryVariables>(GetNonShiftGroupMembersDocument, options);
        }
export type GetNonShiftGroupMembersQueryHookResult = ReturnType<typeof useGetNonShiftGroupMembersQuery>;
export type GetNonShiftGroupMembersLazyQueryHookResult = ReturnType<typeof useGetNonShiftGroupMembersLazyQuery>;
export type GetNonShiftGroupMembersSuspenseQueryHookResult = ReturnType<typeof useGetNonShiftGroupMembersSuspenseQuery>;
export type GetNonShiftGroupMembersQueryResult = Apollo.QueryResult<Types.GetNonShiftGroupMembersQuery, Types.GetNonShiftGroupMembersQueryVariables>;
export const GetShiftsByPeopleDocument = gql`
    query GetShiftsByPeople($channelId: ID!, $shiftGroupId: ID!, $filter: GetShiftsFilter, $startDate: Time!, $endDate: Time!, $authUserId: ID) {
  getShiftsByPeople(
    channelId: $channelId
    shiftGroupId: $shiftGroupId
    filter: $filter
    startDate: $startDate
    endDate: $endDate
    authUserId: $authUserId
  ) {
    status
    message
    result {
      openShifts {
        title
        numberOfShifts
        shifts {
          label
        }
      }
      assignedShifts {
        userId
        name
        image
        numberOfHours
        shifts {
          id
          type
          label
        }
      }
    }
  }
}
    `;

/**
 * __useGetShiftsByPeopleQuery__
 *
 * To run a query within a React component, call `useGetShiftsByPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftsByPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftsByPeopleQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      filter: // value for 'filter'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetShiftsByPeopleQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetShiftsByPeopleQuery, Types.GetShiftsByPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetShiftsByPeopleQuery, Types.GetShiftsByPeopleQueryVariables>(GetShiftsByPeopleDocument, options);
      }
export function useGetShiftsByPeopleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetShiftsByPeopleQuery, Types.GetShiftsByPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetShiftsByPeopleQuery, Types.GetShiftsByPeopleQueryVariables>(GetShiftsByPeopleDocument, options);
        }
export function useGetShiftsByPeopleSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetShiftsByPeopleQuery, Types.GetShiftsByPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetShiftsByPeopleQuery, Types.GetShiftsByPeopleQueryVariables>(GetShiftsByPeopleDocument, options);
        }
export type GetShiftsByPeopleQueryHookResult = ReturnType<typeof useGetShiftsByPeopleQuery>;
export type GetShiftsByPeopleLazyQueryHookResult = ReturnType<typeof useGetShiftsByPeopleLazyQuery>;
export type GetShiftsByPeopleSuspenseQueryHookResult = ReturnType<typeof useGetShiftsByPeopleSuspenseQuery>;
export type GetShiftsByPeopleQueryResult = Apollo.QueryResult<Types.GetShiftsByPeopleQuery, Types.GetShiftsByPeopleQueryVariables>;
export const GetAllUniqueShiftsDocument = gql`
    query GetAllUniqueShifts($channelId: ID!, $shiftGroupId: ID!, $authUserId: ID) {
  getAllUniqueShifts(
    channelId: $channelId
    shiftGroupId: $shiftGroupId
    authUserId: $authUserId
  ) {
    status
    message
    result {
      openShifts {
        label
      }
      assignedShifts {
        type
        label
      }
    }
  }
}
    `;

/**
 * __useGetAllUniqueShiftsQuery__
 *
 * To run a query within a React component, call `useGetAllUniqueShiftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUniqueShiftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUniqueShiftsQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetAllUniqueShiftsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetAllUniqueShiftsQuery, Types.GetAllUniqueShiftsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetAllUniqueShiftsQuery, Types.GetAllUniqueShiftsQueryVariables>(GetAllUniqueShiftsDocument, options);
      }
export function useGetAllUniqueShiftsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllUniqueShiftsQuery, Types.GetAllUniqueShiftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetAllUniqueShiftsQuery, Types.GetAllUniqueShiftsQueryVariables>(GetAllUniqueShiftsDocument, options);
        }
export function useGetAllUniqueShiftsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetAllUniqueShiftsQuery, Types.GetAllUniqueShiftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetAllUniqueShiftsQuery, Types.GetAllUniqueShiftsQueryVariables>(GetAllUniqueShiftsDocument, options);
        }
export type GetAllUniqueShiftsQueryHookResult = ReturnType<typeof useGetAllUniqueShiftsQuery>;
export type GetAllUniqueShiftsLazyQueryHookResult = ReturnType<typeof useGetAllUniqueShiftsLazyQuery>;
export type GetAllUniqueShiftsSuspenseQueryHookResult = ReturnType<typeof useGetAllUniqueShiftsSuspenseQuery>;
export type GetAllUniqueShiftsQueryResult = Apollo.QueryResult<Types.GetAllUniqueShiftsQuery, Types.GetAllUniqueShiftsQueryVariables>;
export const GetDayNotesDocument = gql`
    query GetDayNotes($authUserId: ID, $channel: String!, $endTime: Time!, $startTime: Time!) {
  getDayNotes(
    authUserId: $authUserId
    channel: $channel
    endTime: $endTime
    startTime: $startTime
  ) {
    id
    note
    date
    channelId
    createdAt
    __typename
  }
}
    `;

/**
 * __useGetDayNotesQuery__
 *
 * To run a query within a React component, call `useGetDayNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDayNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDayNotesQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *      channel: // value for 'channel'
 *      endTime: // value for 'endTime'
 *      startTime: // value for 'startTime'
 *   },
 * });
 */
export function useGetDayNotesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetDayNotesQuery, Types.GetDayNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetDayNotesQuery, Types.GetDayNotesQueryVariables>(GetDayNotesDocument, options);
      }
export function useGetDayNotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetDayNotesQuery, Types.GetDayNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetDayNotesQuery, Types.GetDayNotesQueryVariables>(GetDayNotesDocument, options);
        }
export function useGetDayNotesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetDayNotesQuery, Types.GetDayNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetDayNotesQuery, Types.GetDayNotesQueryVariables>(GetDayNotesDocument, options);
        }
export type GetDayNotesQueryHookResult = ReturnType<typeof useGetDayNotesQuery>;
export type GetDayNotesLazyQueryHookResult = ReturnType<typeof useGetDayNotesLazyQuery>;
export type GetDayNotesSuspenseQueryHookResult = ReturnType<typeof useGetDayNotesSuspenseQuery>;
export type GetDayNotesQueryResult = Apollo.QueryResult<Types.GetDayNotesQuery, Types.GetDayNotesQueryVariables>;
export const GetDayNoteDocument = gql`
    query GetDayNote($authUserId: ID, $id: ID!) {
  getDayNote(authUserId: $authUserId, id: $id) {
    id
    note
    date
    channelId
    createdAt
    __typename
  }
}
    `;

/**
 * __useGetDayNoteQuery__
 *
 * To run a query within a React component, call `useGetDayNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDayNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDayNoteQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDayNoteQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetDayNoteQuery, Types.GetDayNoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetDayNoteQuery, Types.GetDayNoteQueryVariables>(GetDayNoteDocument, options);
      }
export function useGetDayNoteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetDayNoteQuery, Types.GetDayNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetDayNoteQuery, Types.GetDayNoteQueryVariables>(GetDayNoteDocument, options);
        }
export function useGetDayNoteSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetDayNoteQuery, Types.GetDayNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetDayNoteQuery, Types.GetDayNoteQueryVariables>(GetDayNoteDocument, options);
        }
export type GetDayNoteQueryHookResult = ReturnType<typeof useGetDayNoteQuery>;
export type GetDayNoteLazyQueryHookResult = ReturnType<typeof useGetDayNoteLazyQuery>;
export type GetDayNoteSuspenseQueryHookResult = ReturnType<typeof useGetDayNoteSuspenseQuery>;
export type GetDayNoteQueryResult = Apollo.QueryResult<Types.GetDayNoteQuery, Types.GetDayNoteQueryVariables>;
export const GetSettingsDocument = gql`
    query getSettings($channelId: ID!, $authUserId: ID) {
  getSettings(channelId: $channelId, authUserId: $authUserId) {
    id
    channelId
    userId
    startOfWeek
    isCopyActivity
    isAllowOpen
    timeOffReason {
      id
      settingId
      key
      value
    }
  }
}
    `;

/**
 * __useGetSettingsQuery__
 *
 * To run a query within a React component, call `useGetSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingsQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetSettingsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetSettingsQuery, Types.GetSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetSettingsQuery, Types.GetSettingsQueryVariables>(GetSettingsDocument, options);
      }
export function useGetSettingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetSettingsQuery, Types.GetSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetSettingsQuery, Types.GetSettingsQueryVariables>(GetSettingsDocument, options);
        }
export function useGetSettingsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetSettingsQuery, Types.GetSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetSettingsQuery, Types.GetSettingsQueryVariables>(GetSettingsDocument, options);
        }
export type GetSettingsQueryHookResult = ReturnType<typeof useGetSettingsQuery>;
export type GetSettingsLazyQueryHookResult = ReturnType<typeof useGetSettingsLazyQuery>;
export type GetSettingsSuspenseQueryHookResult = ReturnType<typeof useGetSettingsSuspenseQuery>;
export type GetSettingsQueryResult = Apollo.QueryResult<Types.GetSettingsQuery, Types.GetSettingsQueryVariables>;
export const GetSettingDocument = gql`
    query getSetting($id: ID!, $authUserId: ID) {
  getSetting(id: $id, authUserId: $authUserId) {
    channelId
    userId
    startOfWeek
    isCopyActivity
    isAllowOpen
    timeOffReason {
      key
      value
    }
  }
}
    `;

/**
 * __useGetSettingQuery__
 *
 * To run a query within a React component, call `useGetSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingQuery({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetSettingQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetSettingQuery, Types.GetSettingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetSettingQuery, Types.GetSettingQueryVariables>(GetSettingDocument, options);
      }
export function useGetSettingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetSettingQuery, Types.GetSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetSettingQuery, Types.GetSettingQueryVariables>(GetSettingDocument, options);
        }
export function useGetSettingSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetSettingQuery, Types.GetSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetSettingQuery, Types.GetSettingQueryVariables>(GetSettingDocument, options);
        }
export type GetSettingQueryHookResult = ReturnType<typeof useGetSettingQuery>;
export type GetSettingLazyQueryHookResult = ReturnType<typeof useGetSettingLazyQuery>;
export type GetSettingSuspenseQueryHookResult = ReturnType<typeof useGetSettingSuspenseQuery>;
export type GetSettingQueryResult = Apollo.QueryResult<Types.GetSettingQuery, Types.GetSettingQueryVariables>;
export const GetShiftsByTaskDocument = gql`
    query GetShiftsByTask($channelId: ID!, $filter: GetShiftsFilter, $startDate: Time!, $endDate: Time!, $authUserId: ID) {
  getShiftsByTask(
    channelId: $channelId
    filter: $filter
    startDate: $startDate
    endDate: $endDate
    authUserId: $authUserId
  ) {
    message
    status
    result {
      groupId
      groupName
      position
      shifts {
        openShifts {
          numberOfShifts
          title
          shifts {
            __typename
            id
            label
            startTime
            endTime
            channelId
            break
            label
            note
            slots
            color
            ShiftActivities {
              id
              name
              code
              color
              startTime
              endTime
              isPaid
            }
          }
        }
        assignedShifts {
          userId
          name
          image
          numberOfHours
          shifts {
            id
            color
            label
            __typename
            type
            note
            shiftGroupId
            break
            startTime
            endTime
            userId
            isOpen
            isShared
            ShiftActivities {
              id
              name
              code
              color
              startTime
              endTime
              isPaid
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetShiftsByTaskQuery__
 *
 * To run a query within a React component, call `useGetShiftsByTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftsByTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftsByTaskQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      filter: // value for 'filter'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetShiftsByTaskQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetShiftsByTaskQuery, Types.GetShiftsByTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetShiftsByTaskQuery, Types.GetShiftsByTaskQueryVariables>(GetShiftsByTaskDocument, options);
      }
export function useGetShiftsByTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetShiftsByTaskQuery, Types.GetShiftsByTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetShiftsByTaskQuery, Types.GetShiftsByTaskQueryVariables>(GetShiftsByTaskDocument, options);
        }
export function useGetShiftsByTaskSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetShiftsByTaskQuery, Types.GetShiftsByTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetShiftsByTaskQuery, Types.GetShiftsByTaskQueryVariables>(GetShiftsByTaskDocument, options);
        }
export type GetShiftsByTaskQueryHookResult = ReturnType<typeof useGetShiftsByTaskQuery>;
export type GetShiftsByTaskLazyQueryHookResult = ReturnType<typeof useGetShiftsByTaskLazyQuery>;
export type GetShiftsByTaskSuspenseQueryHookResult = ReturnType<typeof useGetShiftsByTaskSuspenseQuery>;
export type GetShiftsByTaskQueryResult = Apollo.QueryResult<Types.GetShiftsByTaskQuery, Types.GetShiftsByTaskQueryVariables>;
export const GetShiftsByShareTaskDocument = gql`
    query GetShiftsByShareTask($channelId: ID!, $filter: GetShiftsFilter, $startDate: Time!, $endDate: Time!, $authUserId: ID) {
  GetShiftsByShareTask(
    channelId: $channelId
    filter: $filter
    startDate: $startDate
    endDate: $endDate
    authUserId: $authUserId
  ) {
    message
    status
    result {
      groupId
      groupName
      position
      shifts {
        openShifts {
          numberOfShifts
          title
          shifts {
            __typename
            id
            label
            startTime
            endTime
            channelId
            break
            label
            note
            slots
            color
            ShiftActivities {
              id
              name
              code
              color
              startTime
              endTime
              isPaid
            }
          }
        }
        assignedShifts {
          userId
          name
          image
          numberOfHours
          shifts {
            id
            color
            label
            __typename
            type
            note
            shiftGroupId
            break
            startTime
            endTime
            userId
            isOpen
            isShared
            ShiftActivities {
              id
              name
              code
              color
              startTime
              endTime
              isPaid
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetShiftsByShareTaskQuery__
 *
 * To run a query within a React component, call `useGetShiftsByShareTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftsByShareTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftsByShareTaskQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      filter: // value for 'filter'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetShiftsByShareTaskQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetShiftsByShareTaskQuery, Types.GetShiftsByShareTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetShiftsByShareTaskQuery, Types.GetShiftsByShareTaskQueryVariables>(GetShiftsByShareTaskDocument, options);
      }
export function useGetShiftsByShareTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetShiftsByShareTaskQuery, Types.GetShiftsByShareTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetShiftsByShareTaskQuery, Types.GetShiftsByShareTaskQueryVariables>(GetShiftsByShareTaskDocument, options);
        }
export function useGetShiftsByShareTaskSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetShiftsByShareTaskQuery, Types.GetShiftsByShareTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetShiftsByShareTaskQuery, Types.GetShiftsByShareTaskQueryVariables>(GetShiftsByShareTaskDocument, options);
        }
export type GetShiftsByShareTaskQueryHookResult = ReturnType<typeof useGetShiftsByShareTaskQuery>;
export type GetShiftsByShareTaskLazyQueryHookResult = ReturnType<typeof useGetShiftsByShareTaskLazyQuery>;
export type GetShiftsByShareTaskSuspenseQueryHookResult = ReturnType<typeof useGetShiftsByShareTaskSuspenseQuery>;
export type GetShiftsByShareTaskQueryResult = Apollo.QueryResult<Types.GetShiftsByShareTaskQuery, Types.GetShiftsByShareTaskQueryVariables>;
export const GetAllShiftMembersDocument = gql`
    query GetAllShiftMembers($first: Int, $authUserId: ID) {
  getAllShiftMembers(first: $first, authUserId: $authUserId) {
    id
    firstName
    lastName
  }
}
    `;

/**
 * __useGetAllShiftMembersQuery__
 *
 * To run a query within a React component, call `useGetAllShiftMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllShiftMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllShiftMembersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetAllShiftMembersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetAllShiftMembersQuery, Types.GetAllShiftMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetAllShiftMembersQuery, Types.GetAllShiftMembersQueryVariables>(GetAllShiftMembersDocument, options);
      }
export function useGetAllShiftMembersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllShiftMembersQuery, Types.GetAllShiftMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetAllShiftMembersQuery, Types.GetAllShiftMembersQueryVariables>(GetAllShiftMembersDocument, options);
        }
export function useGetAllShiftMembersSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetAllShiftMembersQuery, Types.GetAllShiftMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetAllShiftMembersQuery, Types.GetAllShiftMembersQueryVariables>(GetAllShiftMembersDocument, options);
        }
export type GetAllShiftMembersQueryHookResult = ReturnType<typeof useGetAllShiftMembersQuery>;
export type GetAllShiftMembersLazyQueryHookResult = ReturnType<typeof useGetAllShiftMembersLazyQuery>;
export type GetAllShiftMembersSuspenseQueryHookResult = ReturnType<typeof useGetAllShiftMembersSuspenseQuery>;
export type GetAllShiftMembersQueryResult = Apollo.QueryResult<Types.GetAllShiftMembersQuery, Types.GetAllShiftMembersQueryVariables>;
export const GetRequestsSwapsQueryDocument = gql`
    query GetRequestsSwapsQuery($channelId: ID!, $authUserId: ID) {
  getRequestsSwaps(channelId: $channelId, authUserId: $authUserId) {
    id
    userId
    channelId
    responseNote
    requestId
    requestNote
    status
    responseAt
    assignedUserShiftId
    assignedUserShiftIdToSwap
    createdAt
  }
}
    `;

/**
 * __useGetRequestsSwapsQueryQuery__
 *
 * To run a query within a React component, call `useGetRequestsSwapsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsSwapsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsSwapsQueryQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetRequestsSwapsQueryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetRequestsSwapsQueryQuery, Types.GetRequestsSwapsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetRequestsSwapsQueryQuery, Types.GetRequestsSwapsQueryQueryVariables>(GetRequestsSwapsQueryDocument, options);
      }
export function useGetRequestsSwapsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetRequestsSwapsQueryQuery, Types.GetRequestsSwapsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetRequestsSwapsQueryQuery, Types.GetRequestsSwapsQueryQueryVariables>(GetRequestsSwapsQueryDocument, options);
        }
export function useGetRequestsSwapsQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetRequestsSwapsQueryQuery, Types.GetRequestsSwapsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetRequestsSwapsQueryQuery, Types.GetRequestsSwapsQueryQueryVariables>(GetRequestsSwapsQueryDocument, options);
        }
export type GetRequestsSwapsQueryQueryHookResult = ReturnType<typeof useGetRequestsSwapsQueryQuery>;
export type GetRequestsSwapsQueryLazyQueryHookResult = ReturnType<typeof useGetRequestsSwapsQueryLazyQuery>;
export type GetRequestsSwapsQuerySuspenseQueryHookResult = ReturnType<typeof useGetRequestsSwapsQuerySuspenseQuery>;
export type GetRequestsSwapsQueryQueryResult = Apollo.QueryResult<Types.GetRequestsSwapsQueryQuery, Types.GetRequestsSwapsQueryQueryVariables>;
export const GetRequestTimeOffQueryDocument = gql`
    query GetRequestTimeOffQuery($id: ID!, $authUserId: ID) {
  getRequestTimeOff(id: $id, authUserId: $authUserId) {
    id
    userId
    status
    reason
    requestNote
    responseNote
    startTime
  }
}
    `;

/**
 * __useGetRequestTimeOffQueryQuery__
 *
 * To run a query within a React component, call `useGetRequestTimeOffQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestTimeOffQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestTimeOffQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetRequestTimeOffQueryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetRequestTimeOffQueryQuery, Types.GetRequestTimeOffQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetRequestTimeOffQueryQuery, Types.GetRequestTimeOffQueryQueryVariables>(GetRequestTimeOffQueryDocument, options);
      }
export function useGetRequestTimeOffQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetRequestTimeOffQueryQuery, Types.GetRequestTimeOffQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetRequestTimeOffQueryQuery, Types.GetRequestTimeOffQueryQueryVariables>(GetRequestTimeOffQueryDocument, options);
        }
export function useGetRequestTimeOffQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetRequestTimeOffQueryQuery, Types.GetRequestTimeOffQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetRequestTimeOffQueryQuery, Types.GetRequestTimeOffQueryQueryVariables>(GetRequestTimeOffQueryDocument, options);
        }
export type GetRequestTimeOffQueryQueryHookResult = ReturnType<typeof useGetRequestTimeOffQueryQuery>;
export type GetRequestTimeOffQueryLazyQueryHookResult = ReturnType<typeof useGetRequestTimeOffQueryLazyQuery>;
export type GetRequestTimeOffQuerySuspenseQueryHookResult = ReturnType<typeof useGetRequestTimeOffQuerySuspenseQuery>;
export type GetRequestTimeOffQueryQueryResult = Apollo.QueryResult<Types.GetRequestTimeOffQueryQuery, Types.GetRequestTimeOffQueryQueryVariables>;
export const GetRequestTimeOffsQueryDocument = gql`
    query GetRequestTimeOffsQuery($authUserId: ID) {
  getRequestTimeOffs(authUserId: $authUserId) {
    id
    userId
    status
    reason
    requestNote
    responseNote
    startTime
  }
}
    `;

/**
 * __useGetRequestTimeOffsQueryQuery__
 *
 * To run a query within a React component, call `useGetRequestTimeOffsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestTimeOffsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestTimeOffsQueryQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetRequestTimeOffsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetRequestTimeOffsQueryQuery, Types.GetRequestTimeOffsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetRequestTimeOffsQueryQuery, Types.GetRequestTimeOffsQueryQueryVariables>(GetRequestTimeOffsQueryDocument, options);
      }
export function useGetRequestTimeOffsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetRequestTimeOffsQueryQuery, Types.GetRequestTimeOffsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetRequestTimeOffsQueryQuery, Types.GetRequestTimeOffsQueryQueryVariables>(GetRequestTimeOffsQueryDocument, options);
        }
export function useGetRequestTimeOffsQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetRequestTimeOffsQueryQuery, Types.GetRequestTimeOffsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetRequestTimeOffsQueryQuery, Types.GetRequestTimeOffsQueryQueryVariables>(GetRequestTimeOffsQueryDocument, options);
        }
export type GetRequestTimeOffsQueryQueryHookResult = ReturnType<typeof useGetRequestTimeOffsQueryQuery>;
export type GetRequestTimeOffsQueryLazyQueryHookResult = ReturnType<typeof useGetRequestTimeOffsQueryLazyQuery>;
export type GetRequestTimeOffsQuerySuspenseQueryHookResult = ReturnType<typeof useGetRequestTimeOffsQuerySuspenseQuery>;
export type GetRequestTimeOffsQueryQueryResult = Apollo.QueryResult<Types.GetRequestTimeOffsQueryQuery, Types.GetRequestTimeOffsQueryQueryVariables>;
export const ShiftGroupDocument = gql`
    query ShiftGroup($id: ID!, $authUserId: ID) {
  shiftGroup(id: $id, authUserId: $authUserId) {
    id
    name
    position
  }
}
    `;

/**
 * __useShiftGroupQuery__
 *
 * To run a query within a React component, call `useShiftGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useShiftGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShiftGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useShiftGroupQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.ShiftGroupQuery, Types.ShiftGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.ShiftGroupQuery, Types.ShiftGroupQueryVariables>(ShiftGroupDocument, options);
      }
export function useShiftGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.ShiftGroupQuery, Types.ShiftGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.ShiftGroupQuery, Types.ShiftGroupQueryVariables>(ShiftGroupDocument, options);
        }
export function useShiftGroupSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.ShiftGroupQuery, Types.ShiftGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.ShiftGroupQuery, Types.ShiftGroupQueryVariables>(ShiftGroupDocument, options);
        }
export type ShiftGroupQueryHookResult = ReturnType<typeof useShiftGroupQuery>;
export type ShiftGroupLazyQueryHookResult = ReturnType<typeof useShiftGroupLazyQuery>;
export type ShiftGroupSuspenseQueryHookResult = ReturnType<typeof useShiftGroupSuspenseQuery>;
export type ShiftGroupQueryResult = Apollo.QueryResult<Types.ShiftGroupQuery, Types.ShiftGroupQueryVariables>;
export const ShiftGroupsByChannelDocument = gql`
    query shiftGroupsByChannel($channelId: ID!, $authUserId: ID!) {
  shiftGroupsByChannel(channelId: $channelId, authUserId: $authUserId) {
    id
    channelId
    name
    channelId
    position
    createdAt
  }
}
    `;

/**
 * __useShiftGroupsByChannelQuery__
 *
 * To run a query within a React component, call `useShiftGroupsByChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useShiftGroupsByChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShiftGroupsByChannelQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useShiftGroupsByChannelQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.ShiftGroupsByChannelQuery, Types.ShiftGroupsByChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.ShiftGroupsByChannelQuery, Types.ShiftGroupsByChannelQueryVariables>(ShiftGroupsByChannelDocument, options);
      }
export function useShiftGroupsByChannelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.ShiftGroupsByChannelQuery, Types.ShiftGroupsByChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.ShiftGroupsByChannelQuery, Types.ShiftGroupsByChannelQueryVariables>(ShiftGroupsByChannelDocument, options);
        }
export function useShiftGroupsByChannelSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.ShiftGroupsByChannelQuery, Types.ShiftGroupsByChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.ShiftGroupsByChannelQuery, Types.ShiftGroupsByChannelQueryVariables>(ShiftGroupsByChannelDocument, options);
        }
export type ShiftGroupsByChannelQueryHookResult = ReturnType<typeof useShiftGroupsByChannelQuery>;
export type ShiftGroupsByChannelLazyQueryHookResult = ReturnType<typeof useShiftGroupsByChannelLazyQuery>;
export type ShiftGroupsByChannelSuspenseQueryHookResult = ReturnType<typeof useShiftGroupsByChannelSuspenseQuery>;
export type ShiftGroupsByChannelQueryResult = Apollo.QueryResult<Types.ShiftGroupsByChannelQuery, Types.ShiftGroupsByChannelQueryVariables>;
export const ShiftGroupsQueryDocument = gql`
    query ShiftGroupsQuery($first: Int, $channel: String!, $authUserId: ID) {
  shiftGroups(first: $first, channel: $channel, authUserId: $authUserId) {
    id
    name
    position
  }
}
    `;

/**
 * __useShiftGroupsQueryQuery__
 *
 * To run a query within a React component, call `useShiftGroupsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useShiftGroupsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShiftGroupsQueryQuery({
 *   variables: {
 *      first: // value for 'first'
 *      channel: // value for 'channel'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useShiftGroupsQueryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.ShiftGroupsQueryQuery, Types.ShiftGroupsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.ShiftGroupsQueryQuery, Types.ShiftGroupsQueryQueryVariables>(ShiftGroupsQueryDocument, options);
      }
export function useShiftGroupsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.ShiftGroupsQueryQuery, Types.ShiftGroupsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.ShiftGroupsQueryQuery, Types.ShiftGroupsQueryQueryVariables>(ShiftGroupsQueryDocument, options);
        }
export function useShiftGroupsQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.ShiftGroupsQueryQuery, Types.ShiftGroupsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.ShiftGroupsQueryQuery, Types.ShiftGroupsQueryQueryVariables>(ShiftGroupsQueryDocument, options);
        }
export type ShiftGroupsQueryQueryHookResult = ReturnType<typeof useShiftGroupsQueryQuery>;
export type ShiftGroupsQueryLazyQueryHookResult = ReturnType<typeof useShiftGroupsQueryLazyQuery>;
export type ShiftGroupsQuerySuspenseQueryHookResult = ReturnType<typeof useShiftGroupsQuerySuspenseQuery>;
export type ShiftGroupsQueryQueryResult = Apollo.QueryResult<Types.ShiftGroupsQueryQuery, Types.ShiftGroupsQueryQueryVariables>;
export const GetTimeOffQueryDocument = gql`
    query GetTimeOffQuery($id: ID!, $authUserId: ID!) {
  getTimeOff(authUserId: $authUserId, id: $id) {
    id
    userId
    channelId
    shiftGroupId
    startTime
    endTime
    label
    color
    note
  }
}
    `;

/**
 * __useGetTimeOffQueryQuery__
 *
 * To run a query within a React component, call `useGetTimeOffQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimeOffQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimeOffQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetTimeOffQueryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetTimeOffQueryQuery, Types.GetTimeOffQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetTimeOffQueryQuery, Types.GetTimeOffQueryQueryVariables>(GetTimeOffQueryDocument, options);
      }
export function useGetTimeOffQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetTimeOffQueryQuery, Types.GetTimeOffQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetTimeOffQueryQuery, Types.GetTimeOffQueryQueryVariables>(GetTimeOffQueryDocument, options);
        }
export function useGetTimeOffQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetTimeOffQueryQuery, Types.GetTimeOffQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetTimeOffQueryQuery, Types.GetTimeOffQueryQueryVariables>(GetTimeOffQueryDocument, options);
        }
export type GetTimeOffQueryQueryHookResult = ReturnType<typeof useGetTimeOffQueryQuery>;
export type GetTimeOffQueryLazyQueryHookResult = ReturnType<typeof useGetTimeOffQueryLazyQuery>;
export type GetTimeOffQuerySuspenseQueryHookResult = ReturnType<typeof useGetTimeOffQuerySuspenseQuery>;
export type GetTimeOffQueryQueryResult = Apollo.QueryResult<Types.GetTimeOffQueryQuery, Types.GetTimeOffQueryQueryVariables>;
export const GetTimeOffsQueryDocument = gql`
    query GetTimeOffsQuery($userId: ID!, $channelId: ID!, $shiftGroupId: ID!, $startTime: Time!, $endTime: Time!, $authUserId: ID!) {
  getTimeOffs(
    shiftGroupId: $shiftGroupId
    channelId: $channelId
    startTime: $startTime
    endTime: $endTime
    userId: $userId
    authUserId: $authUserId
  ) {
    id
    userId
    channelId
    shiftGroupId
    startTime
    endTime
    label
    color
    note
  }
}
    `;

/**
 * __useGetTimeOffsQueryQuery__
 *
 * To run a query within a React component, call `useGetTimeOffsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimeOffsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimeOffsQueryQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetTimeOffsQueryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetTimeOffsQueryQuery, Types.GetTimeOffsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetTimeOffsQueryQuery, Types.GetTimeOffsQueryQueryVariables>(GetTimeOffsQueryDocument, options);
      }
export function useGetTimeOffsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetTimeOffsQueryQuery, Types.GetTimeOffsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetTimeOffsQueryQuery, Types.GetTimeOffsQueryQueryVariables>(GetTimeOffsQueryDocument, options);
        }
export function useGetTimeOffsQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetTimeOffsQueryQuery, Types.GetTimeOffsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetTimeOffsQueryQuery, Types.GetTimeOffsQueryQueryVariables>(GetTimeOffsQueryDocument, options);
        }
export type GetTimeOffsQueryQueryHookResult = ReturnType<typeof useGetTimeOffsQueryQuery>;
export type GetTimeOffsQueryLazyQueryHookResult = ReturnType<typeof useGetTimeOffsQueryLazyQuery>;
export type GetTimeOffsQuerySuspenseQueryHookResult = ReturnType<typeof useGetTimeOffsQuerySuspenseQuery>;
export type GetTimeOffsQueryQueryResult = Apollo.QueryResult<Types.GetTimeOffsQueryQuery, Types.GetTimeOffsQueryQueryVariables>;
export const GetUsersQueryDocument = gql`
    query GetUsersQuery {
  users {
    id
    firstName
    lastName
    email
    isStaff
    isActive
    phone
    avatar
    note
  }
}
    `;

/**
 * __useGetUsersQueryQuery__
 *
 * To run a query within a React component, call `useGetUsersQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetUsersQueryQuery, Types.GetUsersQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetUsersQueryQuery, Types.GetUsersQueryQueryVariables>(GetUsersQueryDocument, options);
      }
export function useGetUsersQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetUsersQueryQuery, Types.GetUsersQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetUsersQueryQuery, Types.GetUsersQueryQueryVariables>(GetUsersQueryDocument, options);
        }
export function useGetUsersQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetUsersQueryQuery, Types.GetUsersQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetUsersQueryQuery, Types.GetUsersQueryQueryVariables>(GetUsersQueryDocument, options);
        }
export type GetUsersQueryQueryHookResult = ReturnType<typeof useGetUsersQueryQuery>;
export type GetUsersQueryLazyQueryHookResult = ReturnType<typeof useGetUsersQueryLazyQuery>;
export type GetUsersQuerySuspenseQueryHookResult = ReturnType<typeof useGetUsersQuerySuspenseQuery>;
export type GetUsersQueryQueryResult = Apollo.QueryResult<Types.GetUsersQueryQuery, Types.GetUsersQueryQueryVariables>;
export const GetUserQueryDocument = gql`
    query GetUserQuery($id: ID, $email: String) {
  user(id: $id, email: $email) {
    id
    firstName
    lastName
    email
    isStaff
    isActive
    phone
    avatar
    note
  }
}
    `;

/**
 * __useGetUserQueryQuery__
 *
 * To run a query within a React component, call `useGetUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetUserQueryQuery, Types.GetUserQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetUserQueryQuery, Types.GetUserQueryQueryVariables>(GetUserQueryDocument, options);
      }
export function useGetUserQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetUserQueryQuery, Types.GetUserQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetUserQueryQuery, Types.GetUserQueryQueryVariables>(GetUserQueryDocument, options);
        }
export function useGetUserQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetUserQueryQuery, Types.GetUserQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetUserQueryQuery, Types.GetUserQueryQueryVariables>(GetUserQueryDocument, options);
        }
export type GetUserQueryQueryHookResult = ReturnType<typeof useGetUserQueryQuery>;
export type GetUserQueryLazyQueryHookResult = ReturnType<typeof useGetUserQueryLazyQuery>;
export type GetUserQuerySuspenseQueryHookResult = ReturnType<typeof useGetUserQuerySuspenseQuery>;
export type GetUserQueryQueryResult = Apollo.QueryResult<Types.GetUserQueryQuery, Types.GetUserQueryQueryVariables>;
export const GetRequestsQueryDocument = gql`
    query GetRequestsQuery($channel: String!, $authUserId: ID) {
  getRequests(channel: $channel, authUserId: $authUserId) {
    edges {
      node {
        id
        requestId
        status
        startTime
        endTime
        requestNote
        reason
        responseNote
        channelId
        isAllDay
        user {
          id
          firstName
          lastName
          email
        }
      }
    }
    totalCount
  }
}
    `;

/**
 * __useGetRequestsQueryQuery__
 *
 * To run a query within a React component, call `useGetRequestsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsQueryQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetRequestsQueryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetRequestsQueryQuery, Types.GetRequestsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetRequestsQueryQuery, Types.GetRequestsQueryQueryVariables>(GetRequestsQueryDocument, options);
      }
export function useGetRequestsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetRequestsQueryQuery, Types.GetRequestsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetRequestsQueryQuery, Types.GetRequestsQueryQueryVariables>(GetRequestsQueryDocument, options);
        }
export function useGetRequestsQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetRequestsQueryQuery, Types.GetRequestsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetRequestsQueryQuery, Types.GetRequestsQueryQueryVariables>(GetRequestsQueryDocument, options);
        }
export type GetRequestsQueryQueryHookResult = ReturnType<typeof useGetRequestsQueryQuery>;
export type GetRequestsQueryLazyQueryHookResult = ReturnType<typeof useGetRequestsQueryLazyQuery>;
export type GetRequestsQuerySuspenseQueryHookResult = ReturnType<typeof useGetRequestsQuerySuspenseQuery>;
export type GetRequestsQueryQueryResult = Apollo.QueryResult<Types.GetRequestsQueryQuery, Types.GetRequestsQueryQueryVariables>;
export const GetRequestOfferQueryDocument = gql`
    query GetRequestOfferQuery($id: ID!, $authUserId: ID) {
  getRequestOffer(id: $id, authUserId: $authUserId) {
    id
    userId
    requestId
    requestNote
    responseNote
  }
}
    `;

/**
 * __useGetRequestOfferQueryQuery__
 *
 * To run a query within a React component, call `useGetRequestOfferQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestOfferQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestOfferQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetRequestOfferQueryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetRequestOfferQueryQuery, Types.GetRequestOfferQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetRequestOfferQueryQuery, Types.GetRequestOfferQueryQueryVariables>(GetRequestOfferQueryDocument, options);
      }
export function useGetRequestOfferQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetRequestOfferQueryQuery, Types.GetRequestOfferQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetRequestOfferQueryQuery, Types.GetRequestOfferQueryQueryVariables>(GetRequestOfferQueryDocument, options);
        }
export function useGetRequestOfferQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetRequestOfferQueryQuery, Types.GetRequestOfferQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetRequestOfferQueryQuery, Types.GetRequestOfferQueryQueryVariables>(GetRequestOfferQueryDocument, options);
        }
export type GetRequestOfferQueryQueryHookResult = ReturnType<typeof useGetRequestOfferQueryQuery>;
export type GetRequestOfferQueryLazyQueryHookResult = ReturnType<typeof useGetRequestOfferQueryLazyQuery>;
export type GetRequestOfferQuerySuspenseQueryHookResult = ReturnType<typeof useGetRequestOfferQuerySuspenseQuery>;
export type GetRequestOfferQueryQueryResult = Apollo.QueryResult<Types.GetRequestOfferQueryQuery, Types.GetRequestOfferQueryQueryVariables>;
export const GetRequestOffersQueryDocument = gql`
    query GetRequestOffersQuery($authUserId: ID) {
  getRequestOffers(authUserId: $authUserId) {
    id
    userId
    requestId
    requestNote
    responseNote
  }
}
    `;

/**
 * __useGetRequestOffersQueryQuery__
 *
 * To run a query within a React component, call `useGetRequestOffersQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestOffersQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestOffersQueryQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetRequestOffersQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetRequestOffersQueryQuery, Types.GetRequestOffersQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetRequestOffersQueryQuery, Types.GetRequestOffersQueryQueryVariables>(GetRequestOffersQueryDocument, options);
      }
export function useGetRequestOffersQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetRequestOffersQueryQuery, Types.GetRequestOffersQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetRequestOffersQueryQuery, Types.GetRequestOffersQueryQueryVariables>(GetRequestOffersQueryDocument, options);
        }
export function useGetRequestOffersQuerySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetRequestOffersQueryQuery, Types.GetRequestOffersQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetRequestOffersQueryQuery, Types.GetRequestOffersQueryQueryVariables>(GetRequestOffersQueryDocument, options);
        }
export type GetRequestOffersQueryQueryHookResult = ReturnType<typeof useGetRequestOffersQueryQuery>;
export type GetRequestOffersQueryLazyQueryHookResult = ReturnType<typeof useGetRequestOffersQueryLazyQuery>;
export type GetRequestOffersQuerySuspenseQueryHookResult = ReturnType<typeof useGetRequestOffersQuerySuspenseQuery>;
export type GetRequestOffersQueryQueryResult = Apollo.QueryResult<Types.GetRequestOffersQueryQuery, Types.GetRequestOffersQueryQueryVariables>;
export const GetOpenShiftsDocument = gql`
    query GetOpenShifts($authUserId: ID, $channelId: ID!, $shiftGroupId: ID!) {
  getOpenShifts(
    authUserId: $authUserId
    channelId: $channelId
    shiftGroupId: $shiftGroupId
  ) {
    id
    note
    color
    label
    shiftGroupId
    break
    endTime
    slots
    startTime
    createdAt
    channelId
    createdAt
    ShiftActivities {
      id
      channelId
      shiftGroupId
      openShiftId
      name
      code
      color
      startTime
      endTime
      isPaid
      createdAt
    }
  }
}
    `;

/**
 * __useGetOpenShiftsQuery__
 *
 * To run a query within a React component, call `useGetOpenShiftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOpenShiftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOpenShiftsQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *   },
 * });
 */
export function useGetOpenShiftsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetOpenShiftsQuery, Types.GetOpenShiftsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetOpenShiftsQuery, Types.GetOpenShiftsQueryVariables>(GetOpenShiftsDocument, options);
      }
export function useGetOpenShiftsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetOpenShiftsQuery, Types.GetOpenShiftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetOpenShiftsQuery, Types.GetOpenShiftsQueryVariables>(GetOpenShiftsDocument, options);
        }
export function useGetOpenShiftsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetOpenShiftsQuery, Types.GetOpenShiftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetOpenShiftsQuery, Types.GetOpenShiftsQueryVariables>(GetOpenShiftsDocument, options);
        }
export type GetOpenShiftsQueryHookResult = ReturnType<typeof useGetOpenShiftsQuery>;
export type GetOpenShiftsLazyQueryHookResult = ReturnType<typeof useGetOpenShiftsLazyQuery>;
export type GetOpenShiftsSuspenseQueryHookResult = ReturnType<typeof useGetOpenShiftsSuspenseQuery>;
export type GetOpenShiftsQueryResult = Apollo.QueryResult<Types.GetOpenShiftsQuery, Types.GetOpenShiftsQueryVariables>;
export const ChannelDocument = gql`
    query Channel($id: ID) {
  channel(id: $id) {
    id
    slug
    name
    isActive
    defaultCountry
    currencyCode
  }
}
    `;

/**
 * __useChannelQuery__
 *
 * To run a query within a React component, call `useChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChannelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.ChannelQuery, Types.ChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.ChannelQuery, Types.ChannelQueryVariables>(ChannelDocument, options);
      }
export function useChannelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.ChannelQuery, Types.ChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.ChannelQuery, Types.ChannelQueryVariables>(ChannelDocument, options);
        }
export function useChannelSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.ChannelQuery, Types.ChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.ChannelQuery, Types.ChannelQueryVariables>(ChannelDocument, options);
        }
export type ChannelQueryHookResult = ReturnType<typeof useChannelQuery>;
export type ChannelLazyQueryHookResult = ReturnType<typeof useChannelLazyQuery>;
export type ChannelSuspenseQueryHookResult = ReturnType<typeof useChannelSuspenseQuery>;
export type ChannelQueryResult = Apollo.QueryResult<Types.ChannelQuery, Types.ChannelQueryVariables>;
export const ChannelsDocument = gql`
    query Channels {
  channels {
    id
    slug
    name
    isActive
    defaultCountry
    currencyCode
  }
}
    `;

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChannelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.ChannelsQuery, Types.ChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.ChannelsQuery, Types.ChannelsQueryVariables>(ChannelsDocument, options);
      }
export function useChannelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.ChannelsQuery, Types.ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.ChannelsQuery, Types.ChannelsQueryVariables>(ChannelsDocument, options);
        }
export function useChannelsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.ChannelsQuery, Types.ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.ChannelsQuery, Types.ChannelsQueryVariables>(ChannelsDocument, options);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsSuspenseQueryHookResult = ReturnType<typeof useChannelsSuspenseQuery>;
export type ChannelsQueryResult = Apollo.QueryResult<Types.ChannelsQuery, Types.ChannelsQueryVariables>;
export const GetTimeSetupsDocument = gql`
    query getTimeSetups($channelId: ID!, $authUserId: ID) {
  getTimeSetups(channelId: $channelId, authUserId: $authUserId) {
    id
    channelId
    isTimeSetup
    location
    createdBy
    createdDateTime
    lastModifiedBy
    lastModifiedDateTime
    __typename
  }
}
    `;

/**
 * __useGetTimeSetupsQuery__
 *
 * To run a query within a React component, call `useGetTimeSetupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimeSetupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimeSetupsQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetTimeSetupsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetTimeSetupsQuery, Types.GetTimeSetupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetTimeSetupsQuery, Types.GetTimeSetupsQueryVariables>(GetTimeSetupsDocument, options);
      }
export function useGetTimeSetupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetTimeSetupsQuery, Types.GetTimeSetupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetTimeSetupsQuery, Types.GetTimeSetupsQueryVariables>(GetTimeSetupsDocument, options);
        }
export function useGetTimeSetupsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetTimeSetupsQuery, Types.GetTimeSetupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetTimeSetupsQuery, Types.GetTimeSetupsQueryVariables>(GetTimeSetupsDocument, options);
        }
export type GetTimeSetupsQueryHookResult = ReturnType<typeof useGetTimeSetupsQuery>;
export type GetTimeSetupsLazyQueryHookResult = ReturnType<typeof useGetTimeSetupsLazyQuery>;
export type GetTimeSetupsSuspenseQueryHookResult = ReturnType<typeof useGetTimeSetupsSuspenseQuery>;
export type GetTimeSetupsQueryResult = Apollo.QueryResult<Types.GetTimeSetupsQuery, Types.GetTimeSetupsQueryVariables>;
export const GetAssignedShiftsDocument = gql`
    query GetAssignedShifts($authUserId: ID) {
  getAssignedShifts(authUserId: $authUserId) {
    id
    label
    note
    startTime
    endTime
    channelId
    type
    userId
    createdAt
    shiftToOffer {
      id
    }
    shiftToSwap {
      id
    }
    shiftGroupId
    isOpen
    ShiftActivities {
      id
      channelId
      shiftGroupId
      assignedShiftId
      userId
      code
      color
      startTime
      endTime
      isPaid
      createdAt
    }
  }
}
    `;

/**
 * __useGetAssignedShiftsQuery__
 *
 * To run a query within a React component, call `useGetAssignedShiftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssignedShiftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssignedShiftsQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetAssignedShiftsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetAssignedShiftsQuery, Types.GetAssignedShiftsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetAssignedShiftsQuery, Types.GetAssignedShiftsQueryVariables>(GetAssignedShiftsDocument, options);
      }
export function useGetAssignedShiftsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAssignedShiftsQuery, Types.GetAssignedShiftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetAssignedShiftsQuery, Types.GetAssignedShiftsQueryVariables>(GetAssignedShiftsDocument, options);
        }
export function useGetAssignedShiftsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetAssignedShiftsQuery, Types.GetAssignedShiftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetAssignedShiftsQuery, Types.GetAssignedShiftsQueryVariables>(GetAssignedShiftsDocument, options);
        }
export type GetAssignedShiftsQueryHookResult = ReturnType<typeof useGetAssignedShiftsQuery>;
export type GetAssignedShiftsLazyQueryHookResult = ReturnType<typeof useGetAssignedShiftsLazyQuery>;
export type GetAssignedShiftsSuspenseQueryHookResult = ReturnType<typeof useGetAssignedShiftsSuspenseQuery>;
export type GetAssignedShiftsQueryResult = Apollo.QueryResult<Types.GetAssignedShiftsQuery, Types.GetAssignedShiftsQueryVariables>;
export const GetAssignedShiftDocument = gql`
    query GetAssignedShift($id: ID!, $authUserId: ID) {
  getAssignedShift(id: $id, authUserId: $authUserId) {
    id
    label
    note
    startTime
    endTime
    channelId
    break
    color
    label
    note
    userId
    createdAt
    type
    ShiftActivities {
      id
      channelId
      shiftGroupId
      assignedShiftId
      userId
      name
      code
      color
      startTime
      endTime
      isPaid
      createdAt
    }
  }
}
    `;

/**
 * __useGetAssignedShiftQuery__
 *
 * To run a query within a React component, call `useGetAssignedShiftQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssignedShiftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssignedShiftQuery({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetAssignedShiftQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetAssignedShiftQuery, Types.GetAssignedShiftQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetAssignedShiftQuery, Types.GetAssignedShiftQueryVariables>(GetAssignedShiftDocument, options);
      }
export function useGetAssignedShiftLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAssignedShiftQuery, Types.GetAssignedShiftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetAssignedShiftQuery, Types.GetAssignedShiftQueryVariables>(GetAssignedShiftDocument, options);
        }
export function useGetAssignedShiftSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetAssignedShiftQuery, Types.GetAssignedShiftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetAssignedShiftQuery, Types.GetAssignedShiftQueryVariables>(GetAssignedShiftDocument, options);
        }
export type GetAssignedShiftQueryHookResult = ReturnType<typeof useGetAssignedShiftQuery>;
export type GetAssignedShiftLazyQueryHookResult = ReturnType<typeof useGetAssignedShiftLazyQuery>;
export type GetAssignedShiftSuspenseQueryHookResult = ReturnType<typeof useGetAssignedShiftSuspenseQuery>;
export type GetAssignedShiftQueryResult = Apollo.QueryResult<Types.GetAssignedShiftQuery, Types.GetAssignedShiftQueryVariables>;
export const GetAllAssignedShiftByChannelIdDocument = gql`
    query GetAllAssignedShiftByChannelID($channelId: ID!, $startDate: Time!, $endDate: Time!, $authUserId: ID) {
  getAllAssignedShiftByChannelID(
    channelId: $channelId
    startDate: $startDate
    endDate: $endDate
    authUserId: $authUserId
  ) {
    message
    status
    result {
      groupId
      groupName
      shifts {
        assignedShifts {
          userId
          name
          image
          numberOfHours
          shifts {
            id
            __typename
            type
            label
            note
            color
            startTime
            endTime
            break
            ShiftActivities {
              id
              name
              code
              color
              startTime
              endTime
              isPaid
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllAssignedShiftByChannelIdQuery__
 *
 * To run a query within a React component, call `useGetAllAssignedShiftByChannelIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAssignedShiftByChannelIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAssignedShiftByChannelIdQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetAllAssignedShiftByChannelIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetAllAssignedShiftByChannelIdQuery, Types.GetAllAssignedShiftByChannelIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetAllAssignedShiftByChannelIdQuery, Types.GetAllAssignedShiftByChannelIdQueryVariables>(GetAllAssignedShiftByChannelIdDocument, options);
      }
export function useGetAllAssignedShiftByChannelIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllAssignedShiftByChannelIdQuery, Types.GetAllAssignedShiftByChannelIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetAllAssignedShiftByChannelIdQuery, Types.GetAllAssignedShiftByChannelIdQueryVariables>(GetAllAssignedShiftByChannelIdDocument, options);
        }
export function useGetAllAssignedShiftByChannelIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetAllAssignedShiftByChannelIdQuery, Types.GetAllAssignedShiftByChannelIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetAllAssignedShiftByChannelIdQuery, Types.GetAllAssignedShiftByChannelIdQueryVariables>(GetAllAssignedShiftByChannelIdDocument, options);
        }
export type GetAllAssignedShiftByChannelIdQueryHookResult = ReturnType<typeof useGetAllAssignedShiftByChannelIdQuery>;
export type GetAllAssignedShiftByChannelIdLazyQueryHookResult = ReturnType<typeof useGetAllAssignedShiftByChannelIdLazyQuery>;
export type GetAllAssignedShiftByChannelIdSuspenseQueryHookResult = ReturnType<typeof useGetAllAssignedShiftByChannelIdSuspenseQuery>;
export type GetAllAssignedShiftByChannelIdQueryResult = Apollo.QueryResult<Types.GetAllAssignedShiftByChannelIdQuery, Types.GetAllAssignedShiftByChannelIdQueryVariables>;
export const GetOpenShiftDocument = gql`
    query GetOpenShift($id: ID!, $authUserId: ID!) {
  getOpenShift(id: $id, authUserId: $authUserId) {
    id
    channelId
    shiftGroupId
    break
    color
    endTime
    label
    note
    slots
    startTime
    endTime
    ShiftActivities {
      id
      channelId
      shiftGroupId
      openShiftId
      name
      code
      color
      startTime
      endTime
      isPaid
    }
  }
}
    `;

/**
 * __useGetOpenShiftQuery__
 *
 * To run a query within a React component, call `useGetOpenShiftQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOpenShiftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOpenShiftQuery({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetOpenShiftQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetOpenShiftQuery, Types.GetOpenShiftQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetOpenShiftQuery, Types.GetOpenShiftQueryVariables>(GetOpenShiftDocument, options);
      }
export function useGetOpenShiftLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetOpenShiftQuery, Types.GetOpenShiftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetOpenShiftQuery, Types.GetOpenShiftQueryVariables>(GetOpenShiftDocument, options);
        }
export function useGetOpenShiftSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetOpenShiftQuery, Types.GetOpenShiftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetOpenShiftQuery, Types.GetOpenShiftQueryVariables>(GetOpenShiftDocument, options);
        }
export type GetOpenShiftQueryHookResult = ReturnType<typeof useGetOpenShiftQuery>;
export type GetOpenShiftLazyQueryHookResult = ReturnType<typeof useGetOpenShiftLazyQuery>;
export type GetOpenShiftSuspenseQueryHookResult = ReturnType<typeof useGetOpenShiftSuspenseQuery>;
export type GetOpenShiftQueryResult = Apollo.QueryResult<Types.GetOpenShiftQuery, Types.GetOpenShiftQueryVariables>;
export const GetTimeCardsDocument = gql`
    query GetTimeCards($channelId: ID!, $authUserId: ID!) {
  getTimeCards(channelId: $channelId, authUserId: $authUserId) {
    id
    channelId
    startBreaks {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    endBreaks {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    clockInEvent {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    clockOutEvent {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    confirmedBy
    createdBy
    createdDateTime
    notes
    __typename
  }
}
    `;

/**
 * __useGetTimeCardsQuery__
 *
 * To run a query within a React component, call `useGetTimeCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimeCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimeCardsQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetTimeCardsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetTimeCardsQuery, Types.GetTimeCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetTimeCardsQuery, Types.GetTimeCardsQueryVariables>(GetTimeCardsDocument, options);
      }
export function useGetTimeCardsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetTimeCardsQuery, Types.GetTimeCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetTimeCardsQuery, Types.GetTimeCardsQueryVariables>(GetTimeCardsDocument, options);
        }
export function useGetTimeCardsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetTimeCardsQuery, Types.GetTimeCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetTimeCardsQuery, Types.GetTimeCardsQueryVariables>(GetTimeCardsDocument, options);
        }
export type GetTimeCardsQueryHookResult = ReturnType<typeof useGetTimeCardsQuery>;
export type GetTimeCardsLazyQueryHookResult = ReturnType<typeof useGetTimeCardsLazyQuery>;
export type GetTimeCardsSuspenseQueryHookResult = ReturnType<typeof useGetTimeCardsSuspenseQuery>;
export type GetTimeCardsQueryResult = Apollo.QueryResult<Types.GetTimeCardsQuery, Types.GetTimeCardsQueryVariables>;
export const GetLatestTimeCardDocument = gql`
    query GetLatestTimeCard($channelId: ID!, $authUserId: ID) {
  GetLatestTimeCard(channelId: $channelId, authUserId: $authUserId) {
    id
    channelId
    status
    startBreaks {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    endBreaks {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    clockInEvent {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    clockOutEvent {
      id
      dateTime
      note
      CreatedAt
      timeCardId
      status
    }
    confirmedBy
    createdBy
    createdDateTime
    lastModifiedBy
    lastModifiedDateTime
    notes
    originalEntry
    user {
      id
      firstName
      lastName
      email
      avatar
    }
  }
}
    `;

/**
 * __useGetLatestTimeCardQuery__
 *
 * To run a query within a React component, call `useGetLatestTimeCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestTimeCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestTimeCardQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetLatestTimeCardQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetLatestTimeCardQuery, Types.GetLatestTimeCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetLatestTimeCardQuery, Types.GetLatestTimeCardQueryVariables>(GetLatestTimeCardDocument, options);
      }
export function useGetLatestTimeCardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetLatestTimeCardQuery, Types.GetLatestTimeCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetLatestTimeCardQuery, Types.GetLatestTimeCardQueryVariables>(GetLatestTimeCardDocument, options);
        }
export function useGetLatestTimeCardSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Types.GetLatestTimeCardQuery, Types.GetLatestTimeCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Types.GetLatestTimeCardQuery, Types.GetLatestTimeCardQueryVariables>(GetLatestTimeCardDocument, options);
        }
export type GetLatestTimeCardQueryHookResult = ReturnType<typeof useGetLatestTimeCardQuery>;
export type GetLatestTimeCardLazyQueryHookResult = ReturnType<typeof useGetLatestTimeCardLazyQuery>;
export type GetLatestTimeCardSuspenseQueryHookResult = ReturnType<typeof useGetLatestTimeCardSuspenseQuery>;
export type GetLatestTimeCardQueryResult = Apollo.QueryResult<Types.GetLatestTimeCardQuery, Types.GetLatestTimeCardQueryVariables>;
export const MoveOpenShiftToNewDateDocument = gql`
    mutation moveOpenShiftToNewDate($id: ID!, $authUserId: ID, $channelId: ID, $shiftGroupId: ID, $startTime: Time!, $endTime: Time!) {
  moveOpenShiftToNewDate(
    id: $id
    authUserId: $authUserId
    channelId: $channelId
    shiftGroupId: $shiftGroupId
    startTime: $startTime
    endTime: $endTime
  ) {
    openShift {
      id
      channelId
      startTime
      endTime
      ShiftActivities {
        id
        channelId
        startTime
        endTime
      }
    }
  }
}
    `;
export type MoveOpenShiftToNewDateMutationFn = Apollo.MutationFunction<Types.MoveOpenShiftToNewDateMutation, Types.MoveOpenShiftToNewDateMutationVariables>;

/**
 * __useMoveOpenShiftToNewDateMutation__
 *
 * To run a mutation, you first call `useMoveOpenShiftToNewDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveOpenShiftToNewDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveOpenShiftToNewDateMutation, { data, loading, error }] = useMoveOpenShiftToNewDateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authUserId: // value for 'authUserId'
 *      channelId: // value for 'channelId'
 *      shiftGroupId: // value for 'shiftGroupId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *   },
 * });
 */
export function useMoveOpenShiftToNewDateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.MoveOpenShiftToNewDateMutation, Types.MoveOpenShiftToNewDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.MoveOpenShiftToNewDateMutation, Types.MoveOpenShiftToNewDateMutationVariables>(MoveOpenShiftToNewDateDocument, options);
      }
export type MoveOpenShiftToNewDateMutationHookResult = ReturnType<typeof useMoveOpenShiftToNewDateMutation>;
export type MoveOpenShiftToNewDateMutationResult = Apollo.MutationResult<Types.MoveOpenShiftToNewDateMutation>;
export type MoveOpenShiftToNewDateMutationOptions = Apollo.BaseMutationOptions<Types.MoveOpenShiftToNewDateMutation, Types.MoveOpenShiftToNewDateMutationVariables>;
export const RecallSharedOpenShiftByTimeDocument = gql`
    mutation recallSharedOpenShiftByTime($channelID: ID, $authUserId: ID, $endTime: Time!, $startTime: Time!) {
  recallSharedOpenShiftByTime(
    channelID: $channelID
    authUserId: $authUserId
    endTime: $endTime
    startTime: $startTime
  ) {
    id
    shiftGroupId
    channelId
    slots
    startTime
    endTime
    break
    isShared
    isOpen
    color
    shiftGroupId
    endTime
    ShiftActivities {
      id
      channelId
      shiftGroupId
      openShiftId
      name
      code
      color
      isPaid
      startTime
      endTime
    }
  }
}
    `;
export type RecallSharedOpenShiftByTimeMutationFn = Apollo.MutationFunction<Types.RecallSharedOpenShiftByTimeMutation, Types.RecallSharedOpenShiftByTimeMutationVariables>;

/**
 * __useRecallSharedOpenShiftByTimeMutation__
 *
 * To run a mutation, you first call `useRecallSharedOpenShiftByTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecallSharedOpenShiftByTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recallSharedOpenShiftByTimeMutation, { data, loading, error }] = useRecallSharedOpenShiftByTimeMutation({
 *   variables: {
 *      channelID: // value for 'channelID'
 *      authUserId: // value for 'authUserId'
 *      endTime: // value for 'endTime'
 *      startTime: // value for 'startTime'
 *   },
 * });
 */
export function useRecallSharedOpenShiftByTimeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.RecallSharedOpenShiftByTimeMutation, Types.RecallSharedOpenShiftByTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.RecallSharedOpenShiftByTimeMutation, Types.RecallSharedOpenShiftByTimeMutationVariables>(RecallSharedOpenShiftByTimeDocument, options);
      }
export type RecallSharedOpenShiftByTimeMutationHookResult = ReturnType<typeof useRecallSharedOpenShiftByTimeMutation>;
export type RecallSharedOpenShiftByTimeMutationResult = Apollo.MutationResult<Types.RecallSharedOpenShiftByTimeMutation>;
export type RecallSharedOpenShiftByTimeMutationOptions = Apollo.BaseMutationOptions<Types.RecallSharedOpenShiftByTimeMutation, Types.RecallSharedOpenShiftByTimeMutationVariables>;
export const RecallSharedAssignedShiftByTimeDocument = gql`
    mutation recallSharedAssignedShiftByTime($channelID: ID, $authUserId: ID, $endTime: Time!, $startTime: Time!) {
  recallSharedAssignedShiftByTime(
    channelID: $channelID
    authUserId: $authUserId
    endTime: $endTime
    startTime: $startTime
  ) {
    id
    break
    isShared
    isOpen
  }
}
    `;
export type RecallSharedAssignedShiftByTimeMutationFn = Apollo.MutationFunction<Types.RecallSharedAssignedShiftByTimeMutation, Types.RecallSharedAssignedShiftByTimeMutationVariables>;

/**
 * __useRecallSharedAssignedShiftByTimeMutation__
 *
 * To run a mutation, you first call `useRecallSharedAssignedShiftByTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecallSharedAssignedShiftByTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recallSharedAssignedShiftByTimeMutation, { data, loading, error }] = useRecallSharedAssignedShiftByTimeMutation({
 *   variables: {
 *      channelID: // value for 'channelID'
 *      authUserId: // value for 'authUserId'
 *      endTime: // value for 'endTime'
 *      startTime: // value for 'startTime'
 *   },
 * });
 */
export function useRecallSharedAssignedShiftByTimeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.RecallSharedAssignedShiftByTimeMutation, Types.RecallSharedAssignedShiftByTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.RecallSharedAssignedShiftByTimeMutation, Types.RecallSharedAssignedShiftByTimeMutationVariables>(RecallSharedAssignedShiftByTimeDocument, options);
      }
export type RecallSharedAssignedShiftByTimeMutationHookResult = ReturnType<typeof useRecallSharedAssignedShiftByTimeMutation>;
export type RecallSharedAssignedShiftByTimeMutationResult = Apollo.MutationResult<Types.RecallSharedAssignedShiftByTimeMutation>;
export type RecallSharedAssignedShiftByTimeMutationOptions = Apollo.BaseMutationOptions<Types.RecallSharedAssignedShiftByTimeMutation, Types.RecallSharedAssignedShiftByTimeMutationVariables>;