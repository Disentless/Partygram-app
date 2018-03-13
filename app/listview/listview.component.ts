import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventInfo, EventList } from '../classes/api';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {

    events: EventInfo[];
    
    constructor(private apiService: ApiService) { }
    
    getEvents(): void {
        this.apiService.getEvents(10,0)
            .subscribe(rq => this.events = rq.events);
    }
    
    ngOnInit() {
        this.getEvents();
    }
}
