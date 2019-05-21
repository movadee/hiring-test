import { TicketState } from './ticket.state';
import Ticket from '../models/ticket.model';

import { Action } from '@ngrx/store';

export const CREATE_TICKET = '[Ticket] CREATE_TICKET';
export const CREATE_TICKET_SUCCESS = '[Ticket] CREATE_TICKET_SUCCESS';
export const CREATE_TICKET_ERROR = '[Ticket] CREATE_TICKET_ERROR';

export const GET_TICKET = '[Ticket] GET_TICKET';
export const GET_TICKET_SUCCESS = '[Ticket] GET_TICKET_SUCCESS';
export const GET_TICKET_ERROR = '[Ticket] GET_TICKET_ERROR';

export const ASSIGN_TICKET = '[Ticket] ASSIGN_TICKET';
export const ASSIGN_TICKET_SUCCESS = '[Ticket] ASSIGN_TICKET_SUCCESS';
export const ASSIGN_TICKET_ERROR = '[Ticket] ASSIGN_TICKET_ERROR';

export const COMPLETE_TICKET = 'COMPLETE_TICKET';

export const GET_TICKETS = '[Ticket] GET_TICKETS';
export const GET_TICKETS_SUCCESS = '[Ticket] GET_TICKETS_SUCCESS';
export const GET_TICKETS_ERROR = '[Ticket] GET_TICKETS_ERROR';

/**
 * Actions for Creating Ticket
 */
export class CreateTicket implements Action {
	readonly type = CREATE_TICKET;
	constructor(public payload: Ticket) {}
}

export class CreateTicketSuccess implements Action {
	readonly type = CREATE_TICKET_SUCCESS;
	constructor(public payload: TicketState) {}
}

export class CreateTicketError implements Action {
	readonly type = CREATE_TICKET_ERROR;
}

/**
 * Actions for Getting Ticket
 */
export class GetTicket implements Action {
	readonly type = GET_TICKET;
	constructor(payload: string) {}
}

export class GetTicketSuccess implements Action {
	readonly type = GET_TICKET_SUCCESS;
	constructor(public payload: Ticket) {}
}

export class GetTicketError implements Action {
	readonly type = GET_TICKET_ERROR;
}

/**
 * Actions for Assigning Ticket
 */
export class AssignTicket implements Action {
	readonly type = ASSIGN_TICKET;
	constructor(public payload: TicketState) {}
}

export class AssignTicketSuccess implements Action {
	readonly type = ASSIGN_TICKET_SUCCESS;
	constructor(public payload: TicketState) {
		console.log(this.payload);
	}
}

export class AssignTicketError implements Action {
	readonly type = ASSIGN_TICKET_ERROR;
	constructor(public payload: TicketState) {}
}

/**
 * Actions for Completing Ticket
 */
export class CompleteTicket implements Action {
	readonly type = COMPLETE_TICKET;
	constructor(public payload: TicketState) {}
}

/**
 * Actions for Getting Tickets
 */
export class GetTickets implements Action {
	readonly type = GET_TICKETS;
}

export class GetTicketsSuccess implements Action {
	readonly type = GET_TICKETS_SUCCESS;
	constructor(public payload: TicketState[]) {}
}

export class GetTicketsError implements Action {
	readonly type = GET_TICKETS_ERROR;
}

export type All =
	| CreateTicket
	| CreateTicketSuccess
	| CreateTicketError
	| GetTicket
	| GetTicketSuccess
	| GetTicketError
	| AssignTicket
	| AssignTicketSuccess
	| AssignTicketError
	| CompleteTicket
	| GetTickets
	| GetTicketsSuccess
	| GetTicketsError;

// ROUTER STUFF
export class RouterGo implements Action {
	readonly type = '[Router] Go';

	constructor(
		public payload: {
			path: any[];
			queryParams?: object;
		}
	) {}
}

export class RouterBack implements Action {
	readonly type = '[Router] Back';
}

export class RouterForward implements Action {
	readonly type = '[Router] Forward';
}

export class RouteChange implements Action {
	readonly type = '[Router] Route Change';
	constructor(public payload: { params: any; path: string }) {}
}
