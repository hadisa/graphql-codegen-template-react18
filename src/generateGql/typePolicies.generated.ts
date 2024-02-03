/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccountDeleteKeySpecifier = ('errors' | 'user' | AccountDeleteKeySpecifier)[];
export type AccountDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountErrorKeySpecifier = ('addressType' | 'code' | 'field' | 'message' | AccountErrorKeySpecifier)[];
export type AccountErrorFieldPolicy = {
	addressType?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountRegisterKeySpecifier = ('errors' | 'requiresConfirmation' | 'user' | AccountRegisterKeySpecifier)[];
export type AccountRegisterFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresConfirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountRequestDeletionKeySpecifier = ('errors' | 'user' | AccountRequestDeletionKeySpecifier)[];
export type AccountRequestDeletionFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountUpdateKeySpecifier = ('accountErrors' | 'errors' | 'user' | AccountUpdateKeySpecifier)[];
export type AccountUpdateFieldPolicy = {
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressKeySpecifier = ('city' | 'cityArea' | 'companyName' | 'country' | 'countryArea' | 'firstName' | 'id' | 'isDefaultBillingAddress' | 'isDefaultShippingAddress' | 'lastName' | 'phone' | 'postalCode' | 'streetAddress1' | 'streetAddress2' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	cityArea?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryArea?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefaultBillingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefaultShippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress1?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftKeySpecifier = ('ShiftActivities' | 'break' | 'channelId' | 'color' | 'createdAt' | 'endTime' | 'id' | 'is24Hours' | 'isOpen' | 'isShared' | 'label' | 'note' | 'requestStatus' | 'sharedBy' | 'sharedDate' | 'shiftGroupId' | 'shiftToOffer' | 'shiftToSwap' | 'startTime' | 'toSwapWith' | 'type' | 'userId' | AssignedShiftKeySpecifier)[];
export type AssignedShiftFieldPolicy = {
	ShiftActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	break?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is24Hours?: FieldPolicy<any> | FieldReadFunction<any>,
	isOpen?: FieldPolicy<any> | FieldReadFunction<any>,
	isShared?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	requestStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedDate?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftToOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftToSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	toSwapWith?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftActivitiesKeySpecifier = ('assignedShiftId' | 'channelId' | 'code' | 'color' | 'createdAt' | 'endTime' | 'id' | 'isPaid' | 'name' | 'shiftGroupId' | 'startTime' | 'userId' | AssignedShiftActivitiesKeySpecifier)[];
export type AssignedShiftActivitiesFieldPolicy = {
	assignedShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftAddResponseKeySpecifier = ('assignedShift' | 'errors' | AssignedShiftAddResponseKeySpecifier)[];
export type AssignedShiftAddResponseFieldPolicy = {
	assignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftDeleteResponseKeySpecifier = ('assignedShift' | 'errors' | AssignedShiftDeleteResponseKeySpecifier)[];
export type AssignedShiftDeleteResponseFieldPolicy = {
	assignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftEditResponseKeySpecifier = ('assignedShift' | 'errors' | AssignedShiftEditResponseKeySpecifier)[];
export type AssignedShiftEditResponseFieldPolicy = {
	assignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftMoveToOpenResponseKeySpecifier = ('errors' | 'openShift' | AssignedShiftMoveToOpenResponseKeySpecifier)[];
export type AssignedShiftMoveToOpenResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	openShift?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftResultKeySpecifier = ('ShiftActivities' | 'break' | 'channelId' | 'color' | 'createdAt' | 'endTime' | 'id' | 'is24Hours' | 'isOpen' | 'isShared' | 'label' | 'note' | 'shiftGroupId' | 'shiftToOffer' | 'shiftToSwap' | 'startTime' | 'toSwapWith' | 'type' | 'userEmail' | 'userId' | 'userLastName' | 'userName' | AssignedShiftResultKeySpecifier)[];
export type AssignedShiftResultFieldPolicy = {
	ShiftActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	break?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is24Hours?: FieldPolicy<any> | FieldReadFunction<any>,
	isOpen?: FieldPolicy<any> | FieldReadFunction<any>,
	isShared?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftToOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftToSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	toSwapWith?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	userEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	userLastName?: FieldPolicy<any> | FieldReadFunction<any>,
	userName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedShiftShareResponseKeySpecifier = ('assignedShift' | 'errors' | AssignedShiftShareResponseKeySpecifier)[];
export type AssignedShiftShareResponseFieldPolicy = {
	assignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelKeySpecifier = ('availableShippingMethodsPerCountry' | 'countries' | 'currencyCode' | 'defaultCountry' | 'hasOrders' | 'id' | 'isActive' | 'name' | 'slug' | 'stockSettings' | 'warehouses' | ChannelKeySpecifier)[];
export type ChannelFieldPolicy = {
	availableShippingMethodsPerCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	hasOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	stockSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryDisplayKeySpecifier = ('code' | 'country' | CountryDisplayKeySpecifier)[];
export type CountryDisplayFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateShiftGroupResponseKeySpecifier = ('errors' | 'shiftGroup' | CreateShiftGroupResponseKeySpecifier)[];
export type CreateShiftGroupResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DayNoteCreateResponseKeySpecifier = ('errors' | 'note' | DayNoteCreateResponseKeySpecifier)[];
export type DayNoteCreateResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DayNoteResponseKeySpecifier = ('channelId' | 'createdAt' | 'date' | 'id' | 'note' | DayNoteResponseKeySpecifier)[];
export type DayNoteResponseFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DayNoteUpdateResponseKeySpecifier = ('errors' | 'note' | DayNoteUpdateResponseKeySpecifier)[];
export type DayNoteUpdateResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DayNotesKeySpecifier = ('channelId' | 'createdAt' | 'date' | 'id' | 'note' | DayNotesKeySpecifier)[];
export type DayNotesFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetAllAssignedShiftByChannelIDResponseKeySpecifier = ('message' | 'result' | 'status' | GetAllAssignedShiftByChannelIDResponseKeySpecifier)[];
export type GetAllAssignedShiftByChannelIDResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetAllRequestsCountableEdgeKeySpecifier = ('node' | GetAllRequestsCountableEdgeKeySpecifier)[];
export type GetAllRequestsCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetAllRequestsResponseKeySpecifier = ('edges' | 'totalCount' | GetAllRequestsResponseKeySpecifier)[];
export type GetAllRequestsResponseFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetAllUniqueShiftsResponseKeySpecifier = ('message' | 'result' | 'status' | GetAllUniqueShiftsResponseKeySpecifier)[];
export type GetAllUniqueShiftsResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetNonShiftGroupMembersResponseKeySpecifier = ('message' | 'result' | 'status' | GetNonShiftGroupMembersResponseKeySpecifier)[];
export type GetNonShiftGroupMembersResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetRequestsCountableEdgeKeySpecifier = ('node' | GetRequestsCountableEdgeKeySpecifier)[];
export type GetRequestsCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetRequestsResponseKeySpecifier = ('edges' | 'totalCount' | GetRequestsResponseKeySpecifier)[];
export type GetRequestsResponseFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetShiftGroupMembersCountableEdgeKeySpecifier = ('node' | GetShiftGroupMembersCountableEdgeKeySpecifier)[];
export type GetShiftGroupMembersCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetShiftsByTaskResponseKeySpecifier = ('message' | 'result' | 'status' | GetShiftsByTaskResponseKeySpecifier)[];
export type GetShiftsByTaskResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetShiftsResponseKeySpecifier = ('message' | 'result' | 'status' | GetShiftsResponseKeySpecifier)[];
export type GetShiftsResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('CopyAssignedShifts' | 'CopyOpenShifts' | 'CopyTimeOffs' | 'SharedOpenShift' | 'SharedTimeOff' | 'UpdateSetting' | 'accountDelete' | 'accountRegister' | 'accountRequestDeletion' | 'accountUpdate' | 'approveRequestOffer' | 'approveRequestSwap' | 'approveRequestTimeOff' | 'approveTimeCard' | 'assignedShiftMoveToOpen' | 'assignedShiftShare' | 'cancelRequestOffer' | 'cancelRequestSwap' | 'cancelRequestTimeOff' | 'cancelTimeCard' | 'channelActivate' | 'channelCreate' | 'channelDeactivate' | 'channelDelete' | 'channelUpdate' | 'clockIn' | 'clockOut' | 'createAssignedShift' | 'createDayNotes' | 'createOpenShift' | 'createRequest' | 'createRequestOffer' | 'createRequestSwap' | 'createRequestTimeOff' | 'createSetting' | 'createShiftGroup' | 'createTimeOff' | 'createTimeSetup' | 'deleteAssignedShift' | 'deleteDayNotes' | 'deleteOpenShift' | 'deleteRequest' | 'deleteRequestOffer' | 'deleteRequestSwap' | 'deleteRequestTimeOff' | 'deleteShiftGroup' | 'deleteTimeCard' | 'deleteTimeOff' | 'deleteTimeOffs' | 'denyRequestOffer' | 'denyRequestSwap' | 'denyRequestTimeOff' | 'denyTimeCard' | 'endBreak' | 'moveOpenShiftToNewDate' | 'moveOpenShiftToUser' | 'openShiftAssign' | 'recallSharedAssignedShift' | 'recallSharedAssignedShiftByTime' | 'recallSharedOpenShiftByTime' | 'renameShiftGroup' | 'reorderShiftGroups' | 'sharedAssignedShift' | 'shiftGroupMemberAdd' | 'shiftGroupMemberRemove' | 'shiftGroupMembersReorder' | 'startBreak' | 'updateAssignedShift' | 'updateDayNotes' | 'updateOpenShift' | 'updateRequestOffer' | 'updateRequestSwap' | 'updateRequestTimeOff' | 'updateTimeOff' | 'updateTimeSetup' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	CopyAssignedShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	CopyOpenShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	CopyTimeOffs?: FieldPolicy<any> | FieldReadFunction<any>,
	SharedOpenShift?: FieldPolicy<any> | FieldReadFunction<any>,
	SharedTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	UpdateSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	accountDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	accountRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	accountRequestDeletion?: FieldPolicy<any> | FieldReadFunction<any>,
	accountUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	approveRequestOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	approveRequestSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	approveRequestTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	approveTimeCard?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedShiftMoveToOpen?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedShiftShare?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelRequestOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelRequestSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelRequestTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelTimeCard?: FieldPolicy<any> | FieldReadFunction<any>,
	channelActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	channelUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	clockIn?: FieldPolicy<any> | FieldReadFunction<any>,
	clockOut?: FieldPolicy<any> | FieldReadFunction<any>,
	createAssignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	createDayNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	createOpenShift?: FieldPolicy<any> | FieldReadFunction<any>,
	createRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createRequestOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	createRequestSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	createRequestTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	createShiftGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	createTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	createTimeSetup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAssignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDayNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOpenShift?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRequestOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRequestSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRequestTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteShiftGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTimeCard?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTimeOffs?: FieldPolicy<any> | FieldReadFunction<any>,
	denyRequestOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	denyRequestSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	denyRequestTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	denyTimeCard?: FieldPolicy<any> | FieldReadFunction<any>,
	endBreak?: FieldPolicy<any> | FieldReadFunction<any>,
	moveOpenShiftToNewDate?: FieldPolicy<any> | FieldReadFunction<any>,
	moveOpenShiftToUser?: FieldPolicy<any> | FieldReadFunction<any>,
	openShiftAssign?: FieldPolicy<any> | FieldReadFunction<any>,
	recallSharedAssignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	recallSharedAssignedShiftByTime?: FieldPolicy<any> | FieldReadFunction<any>,
	recallSharedOpenShiftByTime?: FieldPolicy<any> | FieldReadFunction<any>,
	renameShiftGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	reorderShiftGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedAssignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupMemberAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupMemberRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupMembersReorder?: FieldPolicy<any> | FieldReadFunction<any>,
	startBreak?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAssignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDayNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOpenShift?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRequestOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRequestSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRequestTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTimeSetup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenShiftKeySpecifier = ('ShiftActivities' | 'break' | 'channelId' | 'color' | 'createdAt' | 'endTime' | 'id' | 'is24Hours' | 'isOpen' | 'isShared' | 'label' | 'note' | 'sharedBy' | 'sharedDate' | 'shiftGroupId' | 'slots' | 'startTime' | OpenShiftKeySpecifier)[];
export type OpenShiftFieldPolicy = {
	ShiftActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	break?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is24Hours?: FieldPolicy<any> | FieldReadFunction<any>,
	isOpen?: FieldPolicy<any> | FieldReadFunction<any>,
	isShared?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedDate?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	slots?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenShiftActivitiesKeySpecifier = ('channelId' | 'code' | 'color' | 'createdAt' | 'endTime' | 'id' | 'isPaid' | 'name' | 'openShiftId' | 'shiftGroupId' | 'startTime' | OpenShiftActivitiesKeySpecifier)[];
export type OpenShiftActivitiesFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenShiftAddResponseKeySpecifier = ('errors' | 'openShift' | OpenShiftAddResponseKeySpecifier)[];
export type OpenShiftAddResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	openShift?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenShiftAssignResponseKeySpecifier = ('assignedShift' | 'errors' | OpenShiftAssignResponseKeySpecifier)[];
export type OpenShiftAssignResponseFieldPolicy = {
	assignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenShiftDeleteResponseKeySpecifier = ('errors' | 'openShift' | OpenShiftDeleteResponseKeySpecifier)[];
export type OpenShiftDeleteResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	openShift?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenShiftEditResponseKeySpecifier = ('errors' | 'openShift' | OpenShiftEditResponseKeySpecifier)[];
export type OpenShiftEditResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	openShift?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenShiftInfoKeySpecifier = ('numberOfShifts' | 'shifts' | 'title' | OpenShiftInfoKeySpecifier)[];
export type OpenShiftInfoFieldPolicy = {
	numberOfShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	shifts?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('GetLatestTimeCard' | 'GetOpenShareOpenShifts' | 'GetShareAssignedShiftsByTime' | 'GetShareOpenShiftsByTime' | 'GetShiftsByShareTask' | 'channel' | 'channels' | 'getAllAssignedShiftByChannelID' | 'getAllRequests' | 'getAllShiftMembers' | 'getAllUniqueShifts' | 'getAssignedShift' | 'getAssignedShifts' | 'getAssignedShiftsByChannelIdShiftGroupId' | 'getAssignedShiftsByChannelIdShiftGroupIdUserId' | 'getAssignedShiftsByTime' | 'getDayNote' | 'getDayNotes' | 'getNonShiftGroupMembers' | 'getOpenShift' | 'getOpenShifts' | 'getOpenShiftsByTime' | 'getRequestOffer' | 'getRequestOffers' | 'getRequestOffersByChannelIdRequestId' | 'getRequestSwap' | 'getRequestTimeOff' | 'getRequestTimeOffs' | 'getRequestTimeOffsByChannelIdRequestId' | 'getRequests' | 'getRequestsByUser' | 'getRequestsSwaps' | 'getRequestsSwapsByChannelIdRequestId' | 'getSetting' | 'getSettings' | 'getShiftGroupMembers' | 'getShiftGroupMembersList' | 'getShiftsByPeople' | 'getShiftsByTask' | 'getTimeCard' | 'getTimeCardByChannelIdTimeCardId' | 'getTimeCards' | 'getTimeOff' | 'getTimeOffShared' | 'getTimeOffs' | 'getTimeSetups' | 'getUserByIsStaff' | 'shiftGroup' | 'shiftGroups' | 'shiftGroupsByChannel' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	GetLatestTimeCard?: FieldPolicy<any> | FieldReadFunction<any>,
	GetOpenShareOpenShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	GetShareAssignedShiftsByTime?: FieldPolicy<any> | FieldReadFunction<any>,
	GetShareOpenShiftsByTime?: FieldPolicy<any> | FieldReadFunction<any>,
	GetShiftsByShareTask?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllAssignedShiftByChannelID?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllShiftMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllUniqueShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	getAssignedShift?: FieldPolicy<any> | FieldReadFunction<any>,
	getAssignedShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	getAssignedShiftsByChannelIdShiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAssignedShiftsByChannelIdShiftGroupIdUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAssignedShiftsByTime?: FieldPolicy<any> | FieldReadFunction<any>,
	getDayNote?: FieldPolicy<any> | FieldReadFunction<any>,
	getDayNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	getNonShiftGroupMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	getOpenShift?: FieldPolicy<any> | FieldReadFunction<any>,
	getOpenShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	getOpenShiftsByTime?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestOffers?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestOffersByChannelIdRequestId?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestTimeOffs?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestTimeOffsByChannelIdRequestId?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestsByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestsSwaps?: FieldPolicy<any> | FieldReadFunction<any>,
	getRequestsSwapsByChannelIdRequestId?: FieldPolicy<any> | FieldReadFunction<any>,
	getSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	getSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	getShiftGroupMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	getShiftGroupMembersList?: FieldPolicy<any> | FieldReadFunction<any>,
	getShiftsByPeople?: FieldPolicy<any> | FieldReadFunction<any>,
	getShiftsByTask?: FieldPolicy<any> | FieldReadFunction<any>,
	getTimeCard?: FieldPolicy<any> | FieldReadFunction<any>,
	getTimeCardByChannelIdTimeCardId?: FieldPolicy<any> | FieldReadFunction<any>,
	getTimeCards?: FieldPolicy<any> | FieldReadFunction<any>,
	getTimeOff?: FieldPolicy<any> | FieldReadFunction<any>,
	getTimeOffShared?: FieldPolicy<any> | FieldReadFunction<any>,
	getTimeOffs?: FieldPolicy<any> | FieldReadFunction<any>,
	getTimeSetups?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserByIsStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupsByChannel?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestKeySpecifier = ('channelId' | 'createdAt' | 'id' | 'recipientId' | 'type' | 'userId' | RequestKeySpecifier)[];
export type RequestFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	recipientId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestOfferKeySpecifier = ('AssignedShiftId' | 'assignedShiftId' | 'assignedUserShiftId' | 'channelId' | 'createdAt' | 'id' | 'offeredToUserId' | 'requestId' | 'requestNote' | 'requestStatus' | 'responseAt' | 'responseByUserId' | 'responseNote' | 'status' | 'userId' | RequestOfferKeySpecifier)[];
export type RequestOfferFieldPolicy = {
	AssignedShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedUserShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	offeredToUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	requestId?: FieldPolicy<any> | FieldReadFunction<any>,
	requestNote?: FieldPolicy<any> | FieldReadFunction<any>,
	requestStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	responseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	responseByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	responseNote?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestOfferResponseKeySpecifier = ('errors' | 'request' | RequestOfferResponseKeySpecifier)[];
export type RequestOfferResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	request?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestResponseKeySpecifier = ('assignedShiftId' | 'assignedUserShiftId' | 'channelId' | 'createdAt' | 'endTime' | 'id' | 'isAllDay' | 'reason' | 'requestId' | 'requestNote' | 'requestStatus' | 'responseAt' | 'responseBy' | 'responseNote' | 'shiftOfferedTo' | 'shiftToOffer' | 'shiftToSwap' | 'startTime' | 'status' | 'toSwapWith' | 'type' | 'user' | RequestResponseKeySpecifier)[];
export type RequestResponseFieldPolicy = {
	assignedShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedUserShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAllDay?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	requestId?: FieldPolicy<any> | FieldReadFunction<any>,
	requestNote?: FieldPolicy<any> | FieldReadFunction<any>,
	requestStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	responseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	responseBy?: FieldPolicy<any> | FieldReadFunction<any>,
	responseNote?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftOfferedTo?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftToOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftToSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	toSwapWith?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestSwapKeySpecifier = ('assignedShiftID' | 'assignedShiftIDToSwap' | 'assignedShiftId' | 'assignedShiftIdToSwap' | 'assignedUserShiftId' | 'assignedUserShiftIdToSwap' | 'channelId' | 'createdAt' | 'id' | 'requestId' | 'requestNote' | 'responseAt' | 'responseByUserId' | 'responseNote' | 'status' | 'userId' | RequestSwapKeySpecifier)[];
export type RequestSwapFieldPolicy = {
	assignedShiftID?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedShiftIDToSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedShiftIdToSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedUserShiftId?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedUserShiftIdToSwap?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	requestId?: FieldPolicy<any> | FieldReadFunction<any>,
	requestNote?: FieldPolicy<any> | FieldReadFunction<any>,
	responseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	responseByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	responseNote?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestSwapResponseKeySpecifier = ('errors' | 'request' | RequestSwapResponseKeySpecifier)[];
export type RequestSwapResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	request?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestTimeOffKeySpecifier = ('channelId' | 'createdAt' | 'endTime' | 'id' | 'is24Hours' | 'reason' | 'requestId' | 'requestNote' | 'responseAt' | 'responseByUserId' | 'responseNote' | 'startTime' | 'status' | 'userId' | RequestTimeOffKeySpecifier)[];
export type RequestTimeOffFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is24Hours?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	requestId?: FieldPolicy<any> | FieldReadFunction<any>,
	requestNote?: FieldPolicy<any> | FieldReadFunction<any>,
	responseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	responseByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	responseNote?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResponseStatusKeySpecifier = ('message' | 'status' | ResponseStatusKeySpecifier)[];
export type ResponseStatusFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingKeySpecifier = ('channelId' | 'createdAt' | 'id' | 'isAllowOpen' | 'isCopyActivity' | 'startOfWeek' | 'timeOffReason' | 'userId' | SettingKeySpecifier)[];
export type SettingFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAllowOpen?: FieldPolicy<any> | FieldReadFunction<any>,
	isCopyActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	startOfWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	timeOffReason?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingAddResponseKeySpecifier = ('errors' | 'setting' | SettingAddResponseKeySpecifier)[];
export type SettingAddResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	setting?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingEditResponseKeySpecifier = ('errors' | 'setting' | SettingEditResponseKeySpecifier)[];
export type SettingEditResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	setting?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShiftErrorKeySpecifier = ('code' | 'field' | 'message' | 'value' | ShiftErrorKeySpecifier)[];
export type ShiftErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShiftGroupKeySpecifier = ('channelId' | 'createdAt' | 'id' | 'name' | 'position' | ShiftGroupKeySpecifier)[];
export type ShiftGroupFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShiftGroupMemberKeySpecifier = ('channelId' | 'createdAt' | 'id' | 'position' | 'shiftGroupId' | 'userId' | ShiftGroupMemberKeySpecifier)[];
export type ShiftGroupMemberFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShiftGroupMemberAddResponseKeySpecifier = ('errors' | 'user' | ShiftGroupMemberAddResponseKeySpecifier)[];
export type ShiftGroupMemberAddResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShiftGroupMemberRemoveResponseKeySpecifier = ('errors' | 'user' | ShiftGroupMemberRemoveResponseKeySpecifier)[];
export type ShiftGroupMemberRemoveResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShiftGroupsKeySpecifier = ('groupId' | 'groupName' | 'position' | 'shifts' | ShiftGroupsKeySpecifier)[];
export type ShiftGroupsFieldPolicy = {
	groupId?: FieldPolicy<any> | FieldReadFunction<any>,
	groupName?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	shifts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShiftsKeySpecifier = ('assignedShifts' | 'openShifts' | ShiftsKeySpecifier)[];
export type ShiftsFieldPolicy = {
	assignedShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	openShifts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodKeySpecifier = ('id' | 'name' | ShippingMethodKeySpecifier)[];
export type ShippingMethodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodsPerCountryKeySpecifier = ('country' | 'shippingMethods' | ShippingMethodsPerCountryKeySpecifier)[];
export type ShippingMethodsPerCountryFieldPolicy = {
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethods?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockSettingsKeySpecifier = ('trackInventory' | StockSettingsKeySpecifier)[];
export type StockSettingsFieldPolicy = {
	trackInventory?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeCardKeySpecifier = ('channelId' | 'clockInEvent' | 'clockOutEvent' | 'confirmedBy' | 'createdBy' | 'createdDateTime' | 'endBreaks' | 'id' | 'lastModifiedBy' | 'lastModifiedDateTime' | 'notes' | 'originalEntry' | 'startBreaks' | 'status' | TimeCardKeySpecifier)[];
export type TimeCardFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	clockInEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	clockOutEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	endBreaks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	originalEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	startBreaks?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeCardEventKeySpecifier = ('CreatedAt' | 'dateTime' | 'id' | 'note' | 'status' | 'timeCardId' | TimeCardEventKeySpecifier)[];
export type TimeCardEventFieldPolicy = {
	CreatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	dateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	timeCardId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeCardResponseKeySpecifier = ('errors' | 'timeCard' | TimeCardResponseKeySpecifier)[];
export type TimeCardResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	timeCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeCardsResponseKeySpecifier = ('channelId' | 'clockInEvent' | 'clockOutEvent' | 'confirmedBy' | 'createdBy' | 'createdDateTime' | 'endBreaks' | 'id' | 'lastModifiedBy' | 'lastModifiedDateTime' | 'notes' | 'originalEntry' | 'startBreaks' | 'status' | 'user' | TimeCardsResponseKeySpecifier)[];
export type TimeCardsResponseFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	clockInEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	clockOutEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	endBreaks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	originalEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	startBreaks?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeOffKeySpecifier = ('channelId' | 'color' | 'createdAt' | 'endTime' | 'id' | 'is24Hours' | 'isOpen' | 'isShared' | 'label' | 'note' | 'sharedBy' | 'sharedDate' | 'shiftGroupId' | 'startTime' | 'userId' | TimeOffKeySpecifier)[];
export type TimeOffFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is24Hours?: FieldPolicy<any> | FieldReadFunction<any>,
	isOpen?: FieldPolicy<any> | FieldReadFunction<any>,
	isShared?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedDate?: FieldPolicy<any> | FieldReadFunction<any>,
	shiftGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeOffAddResponseKeySpecifier = ('errors' | 'timeoff' | TimeOffAddResponseKeySpecifier)[];
export type TimeOffAddResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	timeoff?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeOffDeleteResponseKeySpecifier = ('errors' | 'timeoff' | TimeOffDeleteResponseKeySpecifier)[];
export type TimeOffDeleteResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	timeoff?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeOffEditResponseKeySpecifier = ('errors' | 'timeoff' | TimeOffEditResponseKeySpecifier)[];
export type TimeOffEditResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	timeoff?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeOffReasonKeySpecifier = ('createdAt' | 'id' | 'key' | 'settingId' | 'value' | TimeOffReasonKeySpecifier)[];
export type TimeOffReasonFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	settingId?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeOffResponseKeySpecifier = ('errors' | 'request' | TimeOffResponseKeySpecifier)[];
export type TimeOffResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	request?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeSetupKeySpecifier = ('channelId' | 'createdBy' | 'createdDateTime' | 'id' | 'isTimeSetup' | 'lastModifiedBy' | 'lastModifiedDateTime' | 'location' | TimeSetupKeySpecifier)[];
export type TimeSetupFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isTimeSetup?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeSetupResponseKeySpecifier = ('errors' | 'timeSetup' | TimeSetupResponseKeySpecifier)[];
export type TimeSetupResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	timeSetup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeSetupResponsesKeySpecifier = ('channelId' | 'createdBy' | 'createdDateTime' | 'id' | 'isTimeSetup' | 'lastModifiedBy' | 'lastModifiedDateTime' | 'location' | TimeSetupResponsesKeySpecifier)[];
export type TimeSetupResponsesFieldPolicy = {
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isTimeSetup?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedDateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UniqueShiftsKeySpecifier = ('assignedShifts' | 'openShifts' | UniqueShiftsKeySpecifier)[];
export type UniqueShiftsFieldPolicy = {
	assignedShifts?: FieldPolicy<any> | FieldReadFunction<any>,
	openShifts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('avatar' | 'dateJoined' | 'email' | 'firstName' | 'id' | 'isActive' | 'isStaff' | 'languageCode' | 'lastLogin' | 'lastName' | 'metadata' | 'note' | 'phone' | 'privateMetadata' | 'updatedAt' | 'whatsapp' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	dateJoined?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	isStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	whatsapp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAssignedShiftsKeySpecifier = ('image' | 'name' | 'numberOfHours' | 'shifts' | 'userId' | UserAssignedShiftsKeySpecifier)[];
export type UserAssignedShiftsFieldPolicy = {
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfHours?: FieldPolicy<any> | FieldReadFunction<any>,
	shifts?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountableEdgeKeySpecifier = ('cursor' | 'node' | UserCountableEdgeKeySpecifier)[];
export type UserCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseKeySpecifier = ('id' | 'name' | WarehouseKeySpecifier)[];
export type WarehouseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type settingDeleteResponseKeySpecifier = ('errors' | 'setting' | settingDeleteResponseKeySpecifier)[];
export type settingDeleteResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	setting?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccountDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountDeleteKeySpecifier | (() => undefined | AccountDeleteKeySpecifier),
		fields?: AccountDeleteFieldPolicy,
	},
	AccountError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountErrorKeySpecifier | (() => undefined | AccountErrorKeySpecifier),
		fields?: AccountErrorFieldPolicy,
	},
	AccountRegister?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountRegisterKeySpecifier | (() => undefined | AccountRegisterKeySpecifier),
		fields?: AccountRegisterFieldPolicy,
	},
	AccountRequestDeletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountRequestDeletionKeySpecifier | (() => undefined | AccountRequestDeletionKeySpecifier),
		fields?: AccountRequestDeletionFieldPolicy,
	},
	AccountUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountUpdateKeySpecifier | (() => undefined | AccountUpdateKeySpecifier),
		fields?: AccountUpdateFieldPolicy,
	},
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	AssignedShift?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftKeySpecifier | (() => undefined | AssignedShiftKeySpecifier),
		fields?: AssignedShiftFieldPolicy,
	},
	AssignedShiftActivities?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftActivitiesKeySpecifier | (() => undefined | AssignedShiftActivitiesKeySpecifier),
		fields?: AssignedShiftActivitiesFieldPolicy,
	},
	AssignedShiftAddResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftAddResponseKeySpecifier | (() => undefined | AssignedShiftAddResponseKeySpecifier),
		fields?: AssignedShiftAddResponseFieldPolicy,
	},
	AssignedShiftDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftDeleteResponseKeySpecifier | (() => undefined | AssignedShiftDeleteResponseKeySpecifier),
		fields?: AssignedShiftDeleteResponseFieldPolicy,
	},
	AssignedShiftEditResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftEditResponseKeySpecifier | (() => undefined | AssignedShiftEditResponseKeySpecifier),
		fields?: AssignedShiftEditResponseFieldPolicy,
	},
	AssignedShiftMoveToOpenResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftMoveToOpenResponseKeySpecifier | (() => undefined | AssignedShiftMoveToOpenResponseKeySpecifier),
		fields?: AssignedShiftMoveToOpenResponseFieldPolicy,
	},
	AssignedShiftResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftResultKeySpecifier | (() => undefined | AssignedShiftResultKeySpecifier),
		fields?: AssignedShiftResultFieldPolicy,
	},
	AssignedShiftShareResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedShiftShareResponseKeySpecifier | (() => undefined | AssignedShiftShareResponseKeySpecifier),
		fields?: AssignedShiftShareResponseFieldPolicy,
	},
	Channel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelKeySpecifier | (() => undefined | ChannelKeySpecifier),
		fields?: ChannelFieldPolicy,
	},
	CountryDisplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryDisplayKeySpecifier | (() => undefined | CountryDisplayKeySpecifier),
		fields?: CountryDisplayFieldPolicy,
	},
	CreateShiftGroupResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateShiftGroupResponseKeySpecifier | (() => undefined | CreateShiftGroupResponseKeySpecifier),
		fields?: CreateShiftGroupResponseFieldPolicy,
	},
	DayNoteCreateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DayNoteCreateResponseKeySpecifier | (() => undefined | DayNoteCreateResponseKeySpecifier),
		fields?: DayNoteCreateResponseFieldPolicy,
	},
	DayNoteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DayNoteResponseKeySpecifier | (() => undefined | DayNoteResponseKeySpecifier),
		fields?: DayNoteResponseFieldPolicy,
	},
	DayNoteUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DayNoteUpdateResponseKeySpecifier | (() => undefined | DayNoteUpdateResponseKeySpecifier),
		fields?: DayNoteUpdateResponseFieldPolicy,
	},
	DayNotes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DayNotesKeySpecifier | (() => undefined | DayNotesKeySpecifier),
		fields?: DayNotesFieldPolicy,
	},
	GetAllAssignedShiftByChannelIDResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetAllAssignedShiftByChannelIDResponseKeySpecifier | (() => undefined | GetAllAssignedShiftByChannelIDResponseKeySpecifier),
		fields?: GetAllAssignedShiftByChannelIDResponseFieldPolicy,
	},
	GetAllRequestsCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetAllRequestsCountableEdgeKeySpecifier | (() => undefined | GetAllRequestsCountableEdgeKeySpecifier),
		fields?: GetAllRequestsCountableEdgeFieldPolicy,
	},
	GetAllRequestsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetAllRequestsResponseKeySpecifier | (() => undefined | GetAllRequestsResponseKeySpecifier),
		fields?: GetAllRequestsResponseFieldPolicy,
	},
	GetAllUniqueShiftsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetAllUniqueShiftsResponseKeySpecifier | (() => undefined | GetAllUniqueShiftsResponseKeySpecifier),
		fields?: GetAllUniqueShiftsResponseFieldPolicy,
	},
	GetNonShiftGroupMembersResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetNonShiftGroupMembersResponseKeySpecifier | (() => undefined | GetNonShiftGroupMembersResponseKeySpecifier),
		fields?: GetNonShiftGroupMembersResponseFieldPolicy,
	},
	GetRequestsCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetRequestsCountableEdgeKeySpecifier | (() => undefined | GetRequestsCountableEdgeKeySpecifier),
		fields?: GetRequestsCountableEdgeFieldPolicy,
	},
	GetRequestsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetRequestsResponseKeySpecifier | (() => undefined | GetRequestsResponseKeySpecifier),
		fields?: GetRequestsResponseFieldPolicy,
	},
	GetShiftGroupMembersCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetShiftGroupMembersCountableEdgeKeySpecifier | (() => undefined | GetShiftGroupMembersCountableEdgeKeySpecifier),
		fields?: GetShiftGroupMembersCountableEdgeFieldPolicy,
	},
	GetShiftsByTaskResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetShiftsByTaskResponseKeySpecifier | (() => undefined | GetShiftsByTaskResponseKeySpecifier),
		fields?: GetShiftsByTaskResponseFieldPolicy,
	},
	GetShiftsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetShiftsResponseKeySpecifier | (() => undefined | GetShiftsResponseKeySpecifier),
		fields?: GetShiftsResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	OpenShift?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenShiftKeySpecifier | (() => undefined | OpenShiftKeySpecifier),
		fields?: OpenShiftFieldPolicy,
	},
	OpenShiftActivities?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenShiftActivitiesKeySpecifier | (() => undefined | OpenShiftActivitiesKeySpecifier),
		fields?: OpenShiftActivitiesFieldPolicy,
	},
	OpenShiftAddResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenShiftAddResponseKeySpecifier | (() => undefined | OpenShiftAddResponseKeySpecifier),
		fields?: OpenShiftAddResponseFieldPolicy,
	},
	OpenShiftAssignResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenShiftAssignResponseKeySpecifier | (() => undefined | OpenShiftAssignResponseKeySpecifier),
		fields?: OpenShiftAssignResponseFieldPolicy,
	},
	OpenShiftDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenShiftDeleteResponseKeySpecifier | (() => undefined | OpenShiftDeleteResponseKeySpecifier),
		fields?: OpenShiftDeleteResponseFieldPolicy,
	},
	OpenShiftEditResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenShiftEditResponseKeySpecifier | (() => undefined | OpenShiftEditResponseKeySpecifier),
		fields?: OpenShiftEditResponseFieldPolicy,
	},
	OpenShiftInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenShiftInfoKeySpecifier | (() => undefined | OpenShiftInfoKeySpecifier),
		fields?: OpenShiftInfoFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Request?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestKeySpecifier | (() => undefined | RequestKeySpecifier),
		fields?: RequestFieldPolicy,
	},
	RequestOffer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestOfferKeySpecifier | (() => undefined | RequestOfferKeySpecifier),
		fields?: RequestOfferFieldPolicy,
	},
	RequestOfferResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestOfferResponseKeySpecifier | (() => undefined | RequestOfferResponseKeySpecifier),
		fields?: RequestOfferResponseFieldPolicy,
	},
	RequestResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestResponseKeySpecifier | (() => undefined | RequestResponseKeySpecifier),
		fields?: RequestResponseFieldPolicy,
	},
	RequestSwap?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestSwapKeySpecifier | (() => undefined | RequestSwapKeySpecifier),
		fields?: RequestSwapFieldPolicy,
	},
	RequestSwapResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestSwapResponseKeySpecifier | (() => undefined | RequestSwapResponseKeySpecifier),
		fields?: RequestSwapResponseFieldPolicy,
	},
	RequestTimeOff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestTimeOffKeySpecifier | (() => undefined | RequestTimeOffKeySpecifier),
		fields?: RequestTimeOffFieldPolicy,
	},
	ResponseStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResponseStatusKeySpecifier | (() => undefined | ResponseStatusKeySpecifier),
		fields?: ResponseStatusFieldPolicy,
	},
	Setting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingKeySpecifier | (() => undefined | SettingKeySpecifier),
		fields?: SettingFieldPolicy,
	},
	SettingAddResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingAddResponseKeySpecifier | (() => undefined | SettingAddResponseKeySpecifier),
		fields?: SettingAddResponseFieldPolicy,
	},
	SettingEditResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingEditResponseKeySpecifier | (() => undefined | SettingEditResponseKeySpecifier),
		fields?: SettingEditResponseFieldPolicy,
	},
	ShiftError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShiftErrorKeySpecifier | (() => undefined | ShiftErrorKeySpecifier),
		fields?: ShiftErrorFieldPolicy,
	},
	ShiftGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShiftGroupKeySpecifier | (() => undefined | ShiftGroupKeySpecifier),
		fields?: ShiftGroupFieldPolicy,
	},
	ShiftGroupMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShiftGroupMemberKeySpecifier | (() => undefined | ShiftGroupMemberKeySpecifier),
		fields?: ShiftGroupMemberFieldPolicy,
	},
	ShiftGroupMemberAddResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShiftGroupMemberAddResponseKeySpecifier | (() => undefined | ShiftGroupMemberAddResponseKeySpecifier),
		fields?: ShiftGroupMemberAddResponseFieldPolicy,
	},
	ShiftGroupMemberRemoveResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShiftGroupMemberRemoveResponseKeySpecifier | (() => undefined | ShiftGroupMemberRemoveResponseKeySpecifier),
		fields?: ShiftGroupMemberRemoveResponseFieldPolicy,
	},
	ShiftGroups?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShiftGroupsKeySpecifier | (() => undefined | ShiftGroupsKeySpecifier),
		fields?: ShiftGroupsFieldPolicy,
	},
	Shifts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShiftsKeySpecifier | (() => undefined | ShiftsKeySpecifier),
		fields?: ShiftsFieldPolicy,
	},
	ShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodKeySpecifier | (() => undefined | ShippingMethodKeySpecifier),
		fields?: ShippingMethodFieldPolicy,
	},
	ShippingMethodsPerCountry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodsPerCountryKeySpecifier | (() => undefined | ShippingMethodsPerCountryKeySpecifier),
		fields?: ShippingMethodsPerCountryFieldPolicy,
	},
	StockSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockSettingsKeySpecifier | (() => undefined | StockSettingsKeySpecifier),
		fields?: StockSettingsFieldPolicy,
	},
	TimeCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeCardKeySpecifier | (() => undefined | TimeCardKeySpecifier),
		fields?: TimeCardFieldPolicy,
	},
	TimeCardEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeCardEventKeySpecifier | (() => undefined | TimeCardEventKeySpecifier),
		fields?: TimeCardEventFieldPolicy,
	},
	TimeCardResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeCardResponseKeySpecifier | (() => undefined | TimeCardResponseKeySpecifier),
		fields?: TimeCardResponseFieldPolicy,
	},
	TimeCardsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeCardsResponseKeySpecifier | (() => undefined | TimeCardsResponseKeySpecifier),
		fields?: TimeCardsResponseFieldPolicy,
	},
	TimeOff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeOffKeySpecifier | (() => undefined | TimeOffKeySpecifier),
		fields?: TimeOffFieldPolicy,
	},
	TimeOffAddResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeOffAddResponseKeySpecifier | (() => undefined | TimeOffAddResponseKeySpecifier),
		fields?: TimeOffAddResponseFieldPolicy,
	},
	TimeOffDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeOffDeleteResponseKeySpecifier | (() => undefined | TimeOffDeleteResponseKeySpecifier),
		fields?: TimeOffDeleteResponseFieldPolicy,
	},
	TimeOffEditResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeOffEditResponseKeySpecifier | (() => undefined | TimeOffEditResponseKeySpecifier),
		fields?: TimeOffEditResponseFieldPolicy,
	},
	TimeOffReason?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeOffReasonKeySpecifier | (() => undefined | TimeOffReasonKeySpecifier),
		fields?: TimeOffReasonFieldPolicy,
	},
	TimeOffResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeOffResponseKeySpecifier | (() => undefined | TimeOffResponseKeySpecifier),
		fields?: TimeOffResponseFieldPolicy,
	},
	TimeSetup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeSetupKeySpecifier | (() => undefined | TimeSetupKeySpecifier),
		fields?: TimeSetupFieldPolicy,
	},
	TimeSetupResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeSetupResponseKeySpecifier | (() => undefined | TimeSetupResponseKeySpecifier),
		fields?: TimeSetupResponseFieldPolicy,
	},
	TimeSetupResponses?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeSetupResponsesKeySpecifier | (() => undefined | TimeSetupResponsesKeySpecifier),
		fields?: TimeSetupResponsesFieldPolicy,
	},
	UniqueShifts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UniqueShiftsKeySpecifier | (() => undefined | UniqueShiftsKeySpecifier),
		fields?: UniqueShiftsFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAssignedShifts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAssignedShiftsKeySpecifier | (() => undefined | UserAssignedShiftsKeySpecifier),
		fields?: UserAssignedShiftsFieldPolicy,
	},
	UserCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountableEdgeKeySpecifier | (() => undefined | UserCountableEdgeKeySpecifier),
		fields?: UserCountableEdgeFieldPolicy,
	},
	Warehouse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseKeySpecifier | (() => undefined | WarehouseKeySpecifier),
		fields?: WarehouseFieldPolicy,
	},
	settingDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | settingDeleteResponseKeySpecifier | (() => undefined | settingDeleteResponseKeySpecifier),
		fields?: settingDeleteResponseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;