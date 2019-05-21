import Ticket from '../models/ticket.model';
import { initializeTicketState, TicketListState, TicketState } from './ticket.state';
import * as TicketActions from './ticket.action';

export type Action = TicketActions.All;

const defaultTicketStates: TicketState[] = [
	{
		...Ticket.generateMockTicket(),
		...initializeTicketState()
	}
];

const defaultState: TicketListState = {
	tickets: defaultTicketStates,
	loading: false
	// pending: 0
};

export function TicketReducer(state = defaultState, action: Action) {
	console.log(state, action);

	switch (action.type) {
		case TicketActions.CREATE_TICKET: {
			return {
				...state,
				tickets: state.tickets.map((t) => {
					if (t.id == action.payload.id) {
						t.loading = true;
					}
					return t;
				})
			};
		}

		case TicketActions.CREATE_TICKET_SUCCESS: {
			return {
				...state,
				tickets: [
					...state.tickets.filter((t) => {
						return t.id != null;
					}),
					{
						...action.payload
						// edited: true
					},
					{
						...Ticket.generateMockTicket(),
						...initializeTicketState()
					}
				]
			};
		}

		case TicketActions.GET_TICKETS: {
			return { ...state, loaded: false, loading: true };
		}

		case TicketActions.GET_TICKETS_SUCCESS: {
			return {
				...state,
				tickets: [ ...action.payload, defaultTicketStates[0] ],
				loading: false
			};
		}

		case TicketActions.ASSIGN_TICKET: {
			return {
				...state,
				tickets: state.tickets.map((t) => {
					if (t.id == action.payload.id) {
						t.loading = true;
					}
					return t;
				})
			};
		}

		case TicketActions.ASSIGN_TICKET_SUCCESS: {
			return modifyTicketState(state, action.payload, {});
		}

		case TicketActions.ASSIGN_TICKET_ERROR: {
			return {
				...state,
				tickets: state.tickets.map((t) => {
					if (t.id == action.payload.id) {
						t.error = true;
					}
					return t;
				})
			};
		}

		case TicketActions.COMPLETE_TICKET: {
			return {
				...state,
				tickets: state.tickets.map((t) => {
					if (t.id == action.payload.id) {
						// t.status = 'done';
					}
					return t;
				})
			};
		}

		default: {
			return state;
		}
	}
}

function modifyTicketState(state, ticket: TicketState, modifications): TicketListState {
	return {
		...state,
		tickets: state.tickets.map((t) => {
			if (t.id == ticket.id) {
				return { ...t, ...ticket, ...modifications };
			} else {
				return t;
			}
		})
	};
}
