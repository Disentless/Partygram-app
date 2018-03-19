import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ListviewComponent } from './listview/listview.component';
import { EventviewComponent } from './eventview/eventview.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
    { path: '', redirectTo: '/add_event', pathMatch: 'full'},
    { path: 'overview', component: OverviewComponent },
    { path: 'list', component: ListviewComponent },
    { path: 'event/:id', component: EventviewComponent },
    { path: 'add_event', component: AddEventComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
