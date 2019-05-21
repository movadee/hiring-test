import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { TicketListState, TicketState } from '../store/ticket.state';
import * as TicketAction from '../store/ticket.action';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit {
	searchQuery$: Observable<string>;
	ticketListState$: Observable<TicketState[]>;

	constructor(private store: Store<TicketListState>) {}

	ngOnInit() {
		this.ticketListState$ = this.store.select((state) => state.tickets);
		this.store.dispatch(new TicketAction.GetTickets());
	}
}
