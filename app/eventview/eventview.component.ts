import { Component, OnInit } from '@angular/core';
import { EventInfo } from '../classes/api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-eventview',
    templateUrl: './eventview.component.html',
    styleUrls: ['./eventview.component.scss']
})
export class EventviewComponent implements OnInit {
    event: EventInfo;
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private apiService: ApiService,
        private storage: StorageService
    ) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.event = this.storage.getEvent(id);
    }
}
