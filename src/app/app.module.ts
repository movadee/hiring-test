import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';

import {
	MatButtonModule,
	MatIconModule,
	MatInputModule,
	MatGridListModule,
	MatCardModule,
	MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TicketEffects } from './store/ticket.effects';
import * as TicketReducer from './store/ticket.reducer';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
	declarations: [ AppComponent, DetailsComponent, ListComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		StoreModule.forRoot({ router: routerReducer, tickets: TicketReducer.TicketReducer }),
		AppRoutingModule,
		StoreRouterConnectingModule.forRoot(),
		EffectsModule.forRoot([ TicketEffects ]),

		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatGridListModule,
		MatCardModule,
		MatToolbarModule
	],
	providers: [ BackendService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
