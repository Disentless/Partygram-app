import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { PagetoolbarComponent } from './pagetoolbar/pagetoolbar.component';
import { ListviewComponent } from './listview/listview.component';
import { EventviewComponent } from './eventview/eventview.component';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
        LoginComponent,
        PagetoolbarComponent,
        ListviewComponent,
        EventviewComponent,
        AddEventComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        MatButtonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatChipsModule,
        MatDividerModule,
        MatAutocompleteModule,
        BrowserAnimationsModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
