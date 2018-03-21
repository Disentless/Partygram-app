import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// API Classes
import { EventList, ModifyEventInfo, BlockRequest, ConditionList, TypeList, LoginData, RegisterData, SocialTokenRequest, SocialTokenResponse } from './classes/api';

@Injectable()
export class ApiService {
    private serverURL:string = "https://party11.pythonanywhere.com/api/";
    
    constructor(private http: HttpClient, private cookie: CookieService) {}
    
    buildBlockURL(br: BlockRequest) {
        return "offset="+br.offset+"&size="+br.size;
    }
    
    getEvents(c: number, o: number) {
        let url = this.serverURL+"events/?"+this.buildBlockURL({offset: o, size: c});
        return this.http.get<EventList>(url);
    }
    
    addEvent(data: ModifyEventInfo) {
        let url = this.serverURL+"events/";
        return this.http.post(url, data);
    }
    
    joinEvent(id: number) {
        let url = this.serverURL+"events/"+id;
        return this.http.patch(url, null);
    }
    
    deleteEvent(id:number) {
        let url = this.serverURL+"events/"+id;
        return this.http.delete(url, null);
    }
    
    getConditions(c: number, o: number) {
        let url = this.serverURL+"tags/?"+this.buildBlockURL({offset: o, size: c});
        return this.http.get<ConditionList>(url);
    }
    
    getTypes(c: number, o: number) {
        let url = this.serverURL+"types/?"+this.buildBlockURL({offset: o, size: c});
        return this.http.get<TypeList>(url);
    }
    
    login(ld: LoginData) {
        let url = this.serverURL+"login/";
        return this.http.post(url, ld);
    }
    
    register(rd: RegisterData) {
        let url = this.serverURL+"register/";
        return this.http.post(url, rd);
    }
    
    logout() {
        let url = this.serverURL+"logout/";
        return this.http.post(url, null);
    }
    
    getToken(tr: SocialTokenRequest) {
        let url = this.serverURL+"social/token_user/";
        return this.http.post<SocialTokenResponse>(url, tr);
    }
    
    isOnline(): boolean {
        return this.cookie.check('user_data');
    }
}
