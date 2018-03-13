import { Component, OnInit } from '@angular/core';
import { Event } from '../classes/event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-eventview',
    templateUrl: './eventview.component.html',
    styleUrls: ['./eventview.component.scss']
})
export class EventviewComponent implements OnInit {
    event: Event;
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private apiService: ApiService
    ) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.apiService.getEvent(id)
            .subscribe(event => this.event = event);
    }
}
