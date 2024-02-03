import { gql } from "@apollo/client";

export const CreateShiftGroupMutation = gql`
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

export const shiftGroupReorderMutation = gql`
  mutation ReorderShiftGroup(
    $channelId: ID!
    $shiftGroupIds: [ID!]!
    $authUserId: ID
  ) {
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

export const RenameShiftGroupMutation = gql`
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

export const DeleteShiftGroupMutation = gql`
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

export const ShiftGroupMemberAddMutation = gql`
  mutation ShiftGroupMemberAdd(
    $input: ShiftGroupMemberInput!
    $authUserId: ID
  ) {
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

export const ShiftGroupMembersReorderMutation = gql`
  mutation ShiftGroupMembersReorder(
    $channelId: ID!
    $shiftGroupId: ID!
    $userIds: [ID!]!
    $authUserId: ID
  ) {
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

export const ShiftGroupMemberRemoveMutation = gql`
  mutation ShiftGroupMemberRemove(
    $channelId: ID!
    $shiftGroupId: ID!
    $userId: ID!
    $authUserId: ID
  ) {
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

export const CreateAssignedShiftMutation = gql`
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

export const UpdateAssignedShiftMutation = gql`
  mutation UpdateAssignedShift(
    $id: ID!
    $authUserId: ID
    $input: AssignedShiftInput!
  ) {
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

export const DeleteAssignedShiftMutation = gql`
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



export const AssignedShiftMoveToOpenMutation = gql`
  mutation AssignedShiftMoveToOpen(
    $channelID: ID
    $shiftGroupID: ID
    $id: ID!
    $authUserId: ID
  ) {
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

export const AssignedShiftShareMutation = gql`
  mutation AssignedShiftShare(
    $channelID: ID
    $shiftGroupID: ID
    $id: ID!
    $authUserId: ID
  ) {
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

export const CreateOpenShiftMutation = gql`
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

export const UpdateOpenShiftMutation = gql`
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

export const DeleteOpenShiftMutation = gql`
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

export const OpenShiftAssignMutation = gql`
  mutation OpenShiftAssign(
    $channelId: ID!
    $shiftGroupId: ID!
    $openShiftId: ID!
    $userId: ID!
    $authUserId: ID
  ) {
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

export const UpdateTimeOffMutation = gql`
  mutation UpdateTimeOff(
    $id: ID!
    $userId: ID
    $channelId: ID
    $shiftGroupId: ID
    $startTime: Time!
    $endTime: Time!
    $label: String
    $color: ShiftColorEnum
    $note: String
    $authUserId: ID
  ) {
    updateTimeOff(
      id: $id
      input: {
        userId: $userId
        channelId: $channelId
        shiftGroupId: $shiftGroupId
        startTime: $startTime
        endTime: $endTime
        label: $label
        color: $color
        note: $note
      }
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

export const DeleteTimeOffMutation = gql`
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

export const createDayNotesMutation = gql`
  mutation CreateDayNotes(
    $date: Time!
    $channelId: String!
    $note: String!
    $authUserId: ID!
  ) {
    createDayNotes(
      input: { date: $date, channelId: $channelId, note: $note }
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

export const dayNoteUpdateMutation = gql`
  mutation UpdateDayNotes(
    $id: ID!
    $date: Time!
    $note: String!
    $authUserId: ID!
  ) {
    updateDayNotes(
      id: $id
      input: { date: $date, note: $note }
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

export const DeleteDayNotesMutation = gql`
  mutation DeleteDayNotes($noteId: ID!) {
    deleteDayNotes(id: $noteId)
  }
`;


export const CreateRequestSwapMutation = gql`
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

export const CreateRequestOfferMutation = gql`
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

export const CancelRequestTimeOffMutation = gql`
  mutation CancelRequestTimeOff(
    $channelId: ID!
    $requestId: ID!
    $authUserId: ID
  ) {
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

// export const CancelRequestOfferMutation = gql`
//   mutation CancelRequestOffer(
//     $channelId: ID!
//     $requestId: ID!
//     $authUserId: ID
//   ) {
//     cancelRequestOffer(
//       channelId: $channelId
//       requestId: $requestId
//       authUserId: $authUserId
//     ) {
//       errors {
//         field
//         message
//         code
//       }
//       request {
//         channelId
//         user {
//           id
//         }
//       }
//     }
//   }
// `;
// mutation is used to create a new setting
export const CreateSettingsMutation = gql`
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

export const UpdateSettingsMutation = gql`
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

// export const ShiftGroupMemberAddMutation = gql`
//   mutation shiftGroupMemberAdd(
//     $channelId: ID
//     $shiftGroupId: ID
//     $userId: ID
//     $authUserId: ID
//   ) {
//     shiftGroupMemberAdd(
//       channelId: $channelId
//       shiftGroupId: $shiftGroupId
//       userId: $userId
//       authUserId: $authUserId
//     ) {
//       errors {
//         code
//         field
//         message
//       }
//       user {
//         id
//         firstName
//         lastName
//       }
//     }
//   }
// `;

// -------------------------------------------new

// Deletes a request swap.
export const DeleteRequestSwapMutation = gql`
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
// Cancels a request swap.

export const CancelRequestSwapMutation = gql`
  mutation CancelRequestSwap(
    $channelId: ID!
    $requestId: ID!
    $authUserId: ID
  ) {
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

// Approves a request swap.
export const ApproveRequestSwapMutation = gql`
  mutation ApproveRequestSwap(
    $id: ID!
    $responseNote: String
    $authUserId: ID
  ) {
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

// Denies a request swap.

export const DenyRequestSwapMutation = gql`
  mutation DenyRequestSwap($id: ID!, $responseNote: String, $authUserId: ID) {
    denyRequestSwap(
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


// This mutation deletes an existing RequestTimeOff object based on the provided id
export const DeleteRequestTimeOffMutation = gql`
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
// This mutation approves an existing RequestTimeOff object based on the provided id.
export const ApproveRequestTimeOffMutation = gql`
  mutation ApproveRequestTimeOff(
    $id: ID!
    $responseNote: String
    $authUserId: ID
  ) {
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
// This mutation denies an existing RequestTimeOff object based on the provided id.
export const DenyRequestTimeOffMutation = gql`
  mutation DenyRequestTimeOff(
    $id: ID!
    $responseNote: String
    $authUserId: ID
  ) {
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


export const AccountRegisterMutation = gql`
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

// This mutation creates a new request.
export const CreateRequestMutation = gql`
  mutation CreateRequest($channelId: ID!, $userId: ID!, $type: String!) {
    createRequest(
      input: { channelId: $channelId, userId: $userId, type: $type }
    ) {
      id
      channelId
      type
      userId
      createdAt
    }
  }
`;
export const DeleteRequestMutation = gql`
  mutation DeleteRequest($id: ID!) {
    deleteRequest(id: $id)
  }
`;

// Updates an existing RequestOffer object.
export const UpdateRequestOfferMutation = gql`
  mutation UpdateRequestOffer(
    $id: ID!
    $input: RequestOfferInput!
    $authUserId: ID
  ) {
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

export const DeleteRequestOfferMutation = gql`
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

export const CancelRequestOfferMutation = gql`
  mutation CancelRequestOffer(
    $channelId: ID!
    $requestId: ID!
    $authUserId: ID
  ) {
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

export const ApproveRequestOfferMutation = gql`
  mutation ApproveRequestOffer(
    $id: ID!
    $responseNote: String
    $authUserId: ID
  ) {
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

export const DenyRequestOfferMutation = gql`
  mutation DenyRequestOffer($id: ID!, $responseNote: String, $authUserId: ID) {
    denyRequestOffer(
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

export const AssignOpenShiftMutation = gql`
  mutation AssignOpenShift(
    $channelId: ID!
    $openShiftId: ID!
    $shiftGroupId: ID!
    $userId: ID!
    $authUserId: ID
  ) {
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

export const ChannelCreateMutation = gql`
  mutation ChannelCreate(
    $name: String!
    $slug: String!
    $currencyCode: String!
    $defaultCountry: CountryCode!
    $isActive: Boolean!
  ) {
    channelCreate(
      input: {
        name: $name
        slug: $slug
        currencyCode: $currencyCode
        defaultCountry: $defaultCountry
        isActive: $isActive
      }
    ) {
      id
      name
      slug
      currencyCode
      defaultCountry
    }
  }
`;
export const ChannelUpdateMutation = gql`
  mutation ChannelUpdate(
    $id: ID!
    $name: String!
    $slug: String!
    $currencyCode: String!
    $defaultCountry: CountryCode!
    $isActive: Boolean!
  ) {
    channelUpdate(
      input: {
        name: $name
        slug: $slug
        currencyCode: $currencyCode
        defaultCountry: $defaultCountry
        isActive: $isActive
      }
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
export const MoveOpenShiftToUserMutation = gql`
  mutation moveOpenShiftToUser(
    $channelId: ID!
    $openShiftId: ID!
    $shiftGroupId: ID!
    $userId: ID!
    $authUserId: ID
    $startTime: Time!
    $endTime: Time!
  ) {
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
export const CopyAssignedShifts = gql`
  mutation CopyAssignedShifts(
    $input: [AssignedShiftInput!]!
    $authUserId: ID
    $numOfCopies: Int
    $copyDate: Time!
  ) {
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
export const CopyOpenShifts = gql`
  mutation CopyOpenShifts(
    $input: [OpenShiftInput!]!
    $authUserId: ID
    $numOfCopies: Int
    $copyDate: Time!
  ) {
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

// this is Time Setup
export const CreateTimeSetup = gql`
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

// this is Time Setup
export const UpdateTimeSetup = gql`
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

export const clockIn = gql`
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

export const clockOut = gql`
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
export const startBreak = gql`
  mutation startBreak(
    $input: TimeCardInput
    $timeCardID: ID!
    $authUserId: ID
  ) {
    startBreak(
      input: $input
      timeCardID: $timeCardID
      authUserId: $authUserId
    ) {
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
export const endBreak = gql`
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
export const sharedAssignedShift = gql`
  mutation sharedAssignedShift(
    $input: [AssignedShiftsInput!]!
    $authUserId: ID!
  ) {
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
export const SharedOpenShift = gql`
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
