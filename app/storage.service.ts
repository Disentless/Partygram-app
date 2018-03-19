import { Injectable } from '@angular/core';
import { EventInfo, Type, Condition  } from './classes/api';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class StorageService {
    
    events: EventInfo[] = [];
    types: Type[] = [];
    conditions: Condition[] = [];
    constructor() {}    
    
    getEvent(id: number): EventInfo {
        for(let i=0;i<this.events.length;++i){
            if (this.events[i].id != id) continue;
            return this.events[i];
        }
    }
    
    getTypes(): Type[] {
        return this.types;
    }
    
    getConditions(): Condition[] {
        return this.conditions;
    }
    
    getType(id: number): Type {
        for(let i=0;i<this.types.length;++i){
            if (this.types[i].id == id) return this.types[i];
        }
    }
    
    getCondition(id: number): Condition {
        for(let i=0;i<this.conditions.length;++i){
            if (this.conditions[i].id == id) return this.conditions[i];
        }
    }
}
