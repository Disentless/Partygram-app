import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Event } from '../classes/event';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {

    events: Event[];
    
    constructor(private apiService: ApiService) { }
    
    getEvents(): void {
        this.apiService.getEvents(10)
            .subscribe(events => this.events = events);
    }
    
    ngOnInit() {
        this.getEvents();
    }
}
