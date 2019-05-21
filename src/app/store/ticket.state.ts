import Ticket from '../models/ticket.model';

export interface TicketState extends Ticket {
	// ticket: TicketState;
	loading: boolean;
	error: boolean;
}

export interface TicketListState {
	tickets: TicketState[];
	loading: boolean;
}

export const initializeTicketState = function() {
	return {
		loading: false,
		error: false
	};
};

export const intializeTicketListState = function() {
	return {
		loading: false
	};
};
