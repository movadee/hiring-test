import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import '@ngrx/core/add/operator/select';

import { Store } from '@ngrx/store';

import { TicketState } from '../store/ticket.state';
import * as TicketAction from '../store/ticket.action';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: [ './details.component.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit, OnDestroy {
	ticketId: string;
	ticketState$: Observable<TicketState>;
	hero$: Observable<any>;

	// constructor(private route: ActivatedRoute, private store: Store<TicketState>) {}

	actionsSubscription: Subscription;

	constructor(store: Store<TicketState>, route: ActivatedRoute) {
		// this.actionsSubscription = route.params
		// 	.select('id')
		// 	.map((id) => new TicketAction.GetTicket(id))
		// 	.subscribe(store);
	}
	// this.store.dispatch(new TicketAction.GetTicket(params.get('id')))

	ngOnDestroy() {
		this.actionsSubscription.unsubscribe();
	}
	ngOnInit() {}

	// ngOnInit() {
	// 	this.route.paramMap.pipe(switchMap((params: ParamMap) => (this.ticketId = params.get('id'))));

	// this.route.paramMap.pipe(switchMap((params: ParamMap) => (this.ticketId$ = params.get('id'))));

	// let id = this.route.snapshot.paramMap.get('id');

	// console.log('id', this.ticketId);

	// this.ticketState$ = this.store.select((state) => state);
	// this.route.paramMap
	// 	.pipe(
	// 		switchMap(
	// 			(params: ParamMap) =>
	// 				// {
	// 				(this.ticketId = params.get('id'))
	// 			// console.log('i am in');
	// 			// this.store.dispatch(new TicketAction.GetTicket(params.get('id')));
	// 			// }
	// 		)
	// 	)
	// 	.subscribe((res) => this.store.dispatch(new TicketAction.GetTicket(this.ticketId)));
	// // this.ticketState$ = this.store.select((state) => state);
	// // this.store.dispatch(new TicketAction.GetTicket(this.ticketId));
	// console.log('this.ticketState$ ------> ', this.ticketState$);
}
// }
