import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/task-list', pathMatch: 'full' },
	{ path: 'task-list', component: ListComponent },
	{ path: 'task-details/:id', component: DetailsComponent },
	{ path: '**', component: ListComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
