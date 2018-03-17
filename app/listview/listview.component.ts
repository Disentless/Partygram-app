import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';
import { EventInfo, EventList } from '../classes/api';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {

    events: EventInfo[];
    
    constructor(private apiService: ApiService, 
                 private storage: StorageService) { }
    
    getEvents(): void {
        this.apiService.getEvents(10,0)
        .subscribe(rq => {
            this.events = rq.events;
            // Update storage
            this.storage.events = this.events;
        });
    }
    
    ngOnInit() {
        this.getEvents();
    }
}
