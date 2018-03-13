import { Component, OnInit } from '@angular/core';
import { Event } from '../classes/event';
import { Tag } from '../classes/tag';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
    
    event: Event = {
        id: -1,
        creator_id: 0,          // Get current user ID
        name: undefined,        
        location: undefined,
        description: undefined,
        tags: [],               // Fill with tags' IDs
        type: undefined,        
        datetime: undefined,    // Decide on format
        member_count: 0
    };
    taglist: Tag[] = [
        {id: 0, name: "tag 1"}, 
        {id: 1, name: "tag 2"},
        {id: 2, name: "tag 3"}
    ];
    tag: "";
    
    constructor() { }

    ngOnInit() {
        
    }
    
    onKeyUp(event: any): void {
        if (event.keyCode != 13) return;
        // Find tag with this name before adding
        // ...
        var i = 0;
        for(i=0; i<this.event.tags.length; ++i){
            if (this.event.tags[i].name == this.tag) {
                this.tag = "";
                return;
            }
        }
        this.event.tags.push({id: 0, name: this.tag});
        this.tag = "";
    }
}
