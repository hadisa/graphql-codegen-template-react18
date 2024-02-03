import { gql } from "@apollo/client";
import { getOperationAST } from "graphql";

export const GetShiftGroupsQuery = gql`
  query GetShiftGroups($first: Int, $channel: String!, $authUserId: ID) {
    shiftGroups(first: $first, channel: $channel, authUserId: $authUserId) {
      name
      id
      channelId
    }
  }
`;

export const GetShiftGroupMembersQuery = gql`
  query GetShiftGroupMembers(
    $channel: String!
    $shiftGroupId: ID!
    $authUserId: ID
  ) {
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
// This query retrieves all RequestResponse objects in the system.
// export const GetAllRequestsQuery = gql`
//   query GetAllRequests($channel: String!, $authUserId: ID) {
//     getAllRequests(channel: $channel, authUserId: $authUserId) {
//       edges {
//         node {
//           __typename
//           type
//           id
//           requestId
//           user {
//             id
//             firstName
//             lastName
//             email
//           }
//           shiftToSwap {
//             id
//             type
//             label
//             note
//             color
//           }
//           isAllDay
//           startTime
//           toSwapWith {
//             id
//           }
//           shiftToOffer {
//             id
//           }
//           shiftOfferedTo {
//             id
//           }
//           endTime
//           reason
//           requestNote
//           status
//           responseBy {
//             id
//           }
//           responseAt
//           createdAt
//         }
//       }
//     }
//   }
// `;

export const GetAllRequestsQuery = gql`
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
export const GetNonShiftGroupMembersQuery = gql`
  query GetNonShiftGroupMembers(
    $channelId: ID!
    $shiftGroupId: ID!
    $authUserId: ID
  ) {
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

export const GetShiftsByPeopleQuery = gql`
  query GetShiftsByPeople(
    $channelId: ID!
    $shiftGroupId: ID!
    $filter: GetShiftsFilter
    $startDate: Time!
    $endDate: Time!
    $authUserId: ID
  ) {
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

export const GetAllUniqueShiftsQuery = gql`
  query GetAllUniqueShifts(
    $channelId: ID!
    $shiftGroupId: ID!
    $authUserId: ID
  ) {
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

export const GetDayNotesQuery = gql`
  query GetDayNotes(
    $authUserId: ID
    $channel: String!
    $endTime: Time!
    $startTime: Time!
  ) {
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

export const GetDayNoteQuery = gql`
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
// Setting
export const GetSettingsQuery = gql`
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

export const GetSettingQuery = gql`
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

export const GetShiftsByTaskQuery = gql`
  query GetShiftsByTask(
    $channelId: ID!
    $filter: GetShiftsFilter
    $startDate: Time!
    $endDate: Time!
    $authUserId: ID
  ) {
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
export const GetShiftsByShareTaskQuery = gql`
  query GetShiftsByShareTask(
    $channelId: ID!
    $filter: GetShiftsFilter
    $startDate: Time!
    $endDate: Time!
    $authUserId: ID
  ) {
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
export const GetAllShiftMembers = gql`
  query GetAllShiftMembers($first: Int, $authUserId: ID) {
    getAllShiftMembers(first: $first, authUserId: $authUserId) {
      id
      firstName
      lastName
    }
  }
`;

// --------------------new
// Returns a list of request swaps for the given channelId.
export const GetRequestsSwapsQuery = gql`
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
// Returns a single request swap for the given channelId and requestId.
// export const GetRequestsSwapQuery= gql`
// query GetRequestsSwapQuery($id: ID!, $authUserId: ID) {
//   getRequestsSwap(id: $id, authUserId: $authUserId) {
//     id
//     userId
//     channelId
//     responseNote
//     requestId
//     requestNote
//     status
//     responseAt
//     assignedUserShiftId
//     assignedUserShiftIdToSwap
//     createdAt
//   }
// }`

// This query returns a single RequestTimeOff object based on the provided id.

export const GetRequestTimeOffQuery = gql`
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

// This query returns a list of RequestTimeOff objects.
export const GetRequestTimeOffsQuery = gql`
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

// Returns shared schedules for a specific time range and shift group.


// Returns all shared schedules.

// A query that returns a single Shift Group
export const ShiftGroupQuery = gql`
  query ShiftGroup($id: ID!, $authUserId: ID) {
    shiftGroup(id: $id, authUserId: $authUserId) {
      id
      name
      position
    }
  }
`;

// Get groupList by channel Id
export const shiftGroupsByChannel = gql`
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

// A query that returns a list of Shift Groups
export const ShiftGroupsQuery = gql`
  query ShiftGroupsQuery($first: Int, $channel: String!, $authUserId: ID) {
    shiftGroups(first: $first, channel: $channel, authUserId: $authUserId) {
      id
      name
      position
    }
  }
`;

// Retrieves a single time off record by ID
export const GetTimeOffQuery = gql`
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

// Retrieves a list of time off records. Parameters:

export const GetTimeOffsQuery = gql`
  query GetTimeOffsQuery(
    $userId: ID!
    $channelId: ID!
    $shiftGroupId: ID!
    $startTime: Time!
    $endTime: Time!
    $authUserId: ID!
  ) {
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
// Get user lists
export const GetUsersQuery = gql`
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

// Get a specific User by id or email
export const GetUserQuery = gql`
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
// This query retrieves a list of RequestResponses.
export const GetRequestsQuery = gql`
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

// Retrieves a single RequestOffer object.
export const GetRequestOfferQuery = gql`
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

// Retrieves a list of RequestOffer objects.
export const GetRequestOffersQuery = gql`
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
// Retrieves all the granted permissions for all users and returns an array of GrantedPermissionResponse objects.
// export const GetGrantedPermissionsQuery= gql`
// query GetGrantedPermissionsQuery($userId: ID!) {
//   getGrantedPermissions(userId: $userId) {
//     firstName
//     lastName
//     email
//     permissions {
//       id
//       object
//       grantedAt
//     }
//   }
// } `;
// export const GetAllGrantedPermissionsQuery= gql`
// query GetAllGrantedPermissionsQuery($permissionId :ID!, $nameSpace: NameSpaceEnum!, $permission: PermissionEnum!,  $object: String!, grantedAt: Time) {
//   getAllGrantedPermissions (permissionId :$permissionId, nameSpace: $nameSpace, permission: $permission,  object: $object, grantedAt: $grantedAt)  {
//     permissionId
//     nameSpace
//     permission
//     object
//     grantedAt
//     user {
//       id
//       firstName
//       lastName
//       email
//     }
//   }
// }`;

// Checks if a user has a specific permission for a given object and returns a boolean value.
//  this query is using by other api to check if a user has a specified permission or not

// export const CheckPermission= gql`

// # query CheckPermission(
// #   $userId: ID!
// #   $nameSpace: NameSpaceEnum!
// #   $permission: PermissionEnum!
// #   $object: String!
// # ) {
// #   CheckPermission(
// #     userId: $userId
// #     nameSpace: $nameSpace
// #     permission: $permission
// #     object: $object
// #   )
// # }`;

export const GetOpenShiftsQuery = gql`
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
// Returns a single Channel object.
export const ChannelQuery = gql`
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
// Retrieve a list of all available Channel objects
export const ChannelsQuery = gql`
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
// Retrieve a list of all Get Time Setups
export const GetTimeSetups = gql`
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

export const GetAssignedShiftsQuery = gql`
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

export const GetAssignedShiftQuery = gql`
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

export const getAllAssignedShiftByChannelIDQuery = gql`
  query GetAllAssignedShiftByChannelID(
    $channelId: ID!
    $startDate: Time!
    $endDate: Time!
    $authUserId: ID
  ) {
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

export const GetOpenShift = gql`
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
export const GetTimeCards = gql`
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

export const GetLatestTimeCard = gql`
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

export const MoveOpenShiftToNewDate = gql`
  mutation moveOpenShiftToNewDate(
    $id: ID!
    $authUserId: ID
    $channelId: ID
    $shiftGroupId: ID
    $startTime: Time!
    $endTime: Time!
  ) {
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

export const RecallSharedOpenShiftByTime = gql`
  mutation recallSharedOpenShiftByTime(
    $channelID: ID
    $authUserId: ID
    $endTime: Time!
    $startTime: Time!
  ) {
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

export const RecallSharedAssignedShiftByTime = gql`
  mutation recallSharedAssignedShiftByTime(
    $channelID: ID
    $authUserId: ID
    $endTime: Time!
    $startTime: Time!
  ) {
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


