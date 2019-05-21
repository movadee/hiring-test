import { TicketState } from './ticket.state';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap, filter, concatMap } from 'rxjs/operators';

import * as TicketActions from './ticket.action';
import { BackendService } from '../backend.service';
import { Router, ActivationEnd } from '@angular/router';

@Injectable()
export class TicketEffects {
	constructor(
		private actions$: Actions,
		private backend: BackendService,
		private router: Router,
		// private location: Location,
		private store: Store<any>
	) {
		this.listenToRouter();
	}

	// ROUTER STUFF

	@Effect({ dispatch: false })
	navigate$ = this.actions$.pipe(
		ofType('[Router] Go'),
		map((action: TicketActions.RouterGo) => action.payload),
		tap(({ path, queryParams }) => this.router.navigate(path, { queryParams }))
	);

	// @Effect({ dispatch: false })
	// navigateBack$ = this.actions$.pipe(ofType('[Router] Back'), tap(() => this.location.back()));

	// @Effect({ dispatch: false })
	// navigateForward$ = this.actions$.pipe(ofType('[Router] Forward'), tap(() => this.location.forward()));

	private listenToRouter() {
		this.router.events.pipe(filter((event) => event instanceof ActivationEnd)).subscribe((event: ActivationEnd) =>
			this.store.dispatch(
				new TicketActions.RouteChange({
					params: { ...event.snapshot.params },
					path: event.snapshot.routeConfig.path
				})
			)
		);
	}

	// @Effect()
	// ticketRouted$ = this.actions$.pipe(
	// 	ofType('[Router] Route Change'),
	// 	filter((routeChangeAction) => routeChangeAction.payload.path === 'task-details/:id'),
	// 	concatMap(() => new TicketActions.GetTicket())
	// );

	@Effect()
	getTickets$: Observable<Action> = this.actions$.pipe(
		ofType<TicketActions.GetTickets>(TicketActions.GET_TICKETS),
		mergeMap(() =>
			this.backend.tickets().pipe(
				map((data) => {
					console.log('DATA TICKETS ----->', data);
					return new TicketActions.GetTicketsSuccess(data as TicketState[]);
				}),
				catchError(() => of(new TicketActions.GetTicketError()))
			)
		)
	);

	@Effect()
	getTicket$: Observable<Action> = this.actions$.pipe(
		ofType<TicketActions.GetTicket>(TicketActions.GET_TICKET),
		mergeMap(() =>
			this.backend.ticket(1).pipe(
				map((data) => {
					console.log('DATA TICKET ----->', data);
					return new TicketActions.GetTicketSuccess(data as TicketState);
				}),
				catchError(() => of(new TicketActions.GetTicketError()))
			)
		)
	);

	// @Effect()
	// createTicket$: Observable<Action> = this.actions$.pipe(
	// 	ofType<TicketActions.CreateTicket>(TicketActions.CREATE_TICKET),
	// 	mergeMap((action) =>
	// 		// this.http.post('/api/todos', action.payload).pipe(
	// 		// 	map((data: Response) => {
	// 		// 		return new TicketActions.CreateTicketSuccess({ ...data['data'], loading: false });
	// 		// 	}),
	// 		// 	catchError(() => of(new TicketActions.CreateTicketError()))
	// 		// )
	// 	)
	// );

	// @Effect()
	// assignTicket$: Observable<Action> = this.actions$.pipe(
	// 	ofType<TicketActions.AssignTicket>(TicketActions.ASSIGN_TICKET),
	// 	mergeMap((action) =>
	// 		// this.http.put('/api/todos', action.payload).pipe(
	// 		// 	map((data: Response) => {
	// 		// 		return new TicketActions.AssignTicketSuccess({
	// 		// 			...action.payload,
	// 		// 			loading: false
	// 		// 		});
	// 		// 	}),
	// 		// 	catchError(() => of(new TicketActions.AssignTicketError(action.payload)))
	// 		// )
	// 	)
	// );
}

// ROUTER STUFF
// @Injectable()
// export class RouterEffects {
//     constructor(
//         private actions$: Actions,
//         private router: Router,
//         private location: Location,
//         private store: Store<any>
//     ) {
//         this.listenToRouter();
//     }

//     @Effect({ dispatch: false })
//     navigate$ = this.actions$.pipe(
//         ofType('[Router] Go'),
//         map((action: RouterGo) => action.payload),
//         tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
//     );

//     @Effect({ dispatch: false })
//     navigateBack$ = this.actions$.pipe(ofType('[Router] Back'), tap(() => this.location.back()));

//     @Effect({ dispatch: false })
//     navigateForward$ = this.actions$.pipe(
//         ofType('[Router] Forward'),
//         tap(() => this.location.forward())
//     );
