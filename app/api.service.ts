import { Injectable } from '@angular/core';
import { Event } from './classes/event';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// API Classes
import { EventList } from './classes/api';

@Injectable()
export class ApiService {
    private serverURL:string = "https://partygram.com/api/";
    
    constructor(private http: HttpClient, private cookie: CookieService) {
        
    }
    
    getEvents(count: number, offset: number) {
        return this.http.get<EventList>(this.serverURL+"events/?offset="+offset+"&size="+count);
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
    
    isOnline(): boolean {
        return this.cookie.check('user_id');
    }
}
