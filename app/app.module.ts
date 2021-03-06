// General modules
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

// Angular Material
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

// User components/services
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { PagetoolbarComponent } from './pagetoolbar/pagetoolbar.component';
import { ListviewComponent } from './listview/listview.component';
import { EventviewComponent } from './eventview/eventview.component';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
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
        MatTabsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
    ],
    providers: [ApiService, CookieService, StorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
