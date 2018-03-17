import { Component, OnInit } from '@angular/core';
import { EventInfo, Tag } from '../classes/api';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
    
    event: EventInfo;
    taglist: Tag[];
    tag: "";
    
    constructor(private storage: StorageService) { }

    ngOnInit() {
        this.taglist = this.storage.getTags();
    }
    
    tag_onKeyUp(event: any): void {
        if (event.keyCode != 13) return;
        // Find tag and its ID
        let tag_id = -1;
        for(let i=0;i<this.taglist.length;++i){
            if (this.taglist[i].conditionName == this.tag) {
                tag_id = this.taglist[i].id;
                break;
            }
        }
        if (tag_id == -1) {
            // Tag wasn't found
            this.tag = "";
            return;
        }
        // Looking for repeating
        for(let i=0; i<this.event.tags.length; ++i){
            if (this.event.tags[i] == tag_id) {
                this.tag = "";
                return;
            }
        }
        this.event.tags.push(tag_id);
        this.tag = "";
    }
}
