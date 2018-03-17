import { Injectable } from '@angular/core';
import { EventInfo, Type, Tag  } from './classes/api';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class StorageService {
    
    events: EventInfo[] = [];
    types: Type[] = [];
    tags: Tag[] = [];
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
    
    getTags(): Tag[] {
        return this.tags;
    }
    
    getType(id: number): Type {
        for(let i=0;i<this.types.length;++i){
            if (this.types[i].id == id) return this.types[i];
        }
    }
    
    getTag(id: number): Tag {
        for(let i=0;i<this.tags.length;++i){
            if (this.tags[i].id == id) return this.tags[i];
        }
    }
}
