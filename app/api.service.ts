import { Injectable } from '@angular/core';
import { Event } from './classes/event';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
    private apiURL = 'https://';
    
    constructor(private http: HttpClient) { }
    
    getEvents(c: number): Observable<Event[]> {
        let i:number = 0;
        let result: Event[] = [];
        
        for(i = 0; i < c; ++i) {
            result.push({
                id: i,
                creator_id: 0,
                name: 'Event ' + i,
                location: 'Location 1',
                description: 'Description of event ' + i,
                tags: [],
                type: 'Type of event ' + i,
                datetime: 'dd/mm/yyyy hh:mm',
                member_count: 0
            });
        }
        
        return of(result);
    }
    
    getEvent(id: number): Observable<Event> {
        return of({
            id: id,
            creator_id: 0,
            name: 'Event ' + id,
            location: 'Location 1',
            description: 'Description of event ' + id,
            tags: [],
            type: 'Type of event ' + id,
            datetime: 'dd/mm/yyyy hh:mm',
            member_count: 0
        });
    }
}
