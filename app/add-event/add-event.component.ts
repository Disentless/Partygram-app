import { Component, OnInit } from '@angular/core';
import { EventInfo, Condition, Type } from '../classes/api';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
    
    event: EventInfo = {
        id: null,
        title: null,
        location: null,
        description: null,
        type: null,
        date: null,
        likes: null,
        withConfirmation: null,
        private: null,
        cost: null,
        tags: []
    };
    conditions: Condition[] = [];
    types: Type[] = [];
    condition_id: null;
    conditionSelect: false;
    
    constructor(private storage: StorageService, private api: ApiService) { }

    ngOnInit() {
        this.api.getConditions(10, 0)
        .subscribe(
            data => {
                this.storage.conditions = data.tags;
                this.conditions = this.storage.getConditions();
            },
            error => {
                console.log(error);
            }
        );
        
        this.api.getTypes(10, 0)
        .subscribe(
            data => {
                this.storage.types = data.types;
                this.types = this.storage.getTypes();
            },
            error => {
                console.log(error);
            }
        );
    }

    addCondition() {
        this.event.tags.push(this.condition_id);
        let newList = [];
        for(let i=0;i<this.conditions.length;++i){
            if (this.conditions[i].id != this.condition_id){
                newList.push(this.conditions[i]);
            }
        }
        this.condition_id = null;
        this.conditions = newList;
        this.conditionSelect = false;
    }
    
    deleteCondition(id: number) {
        let newList = [];
        for(let i=0;i<this.event.tags.length;++i){
            if (this.event.tags[i] != id){
                newList.push(this.event.tags[i]);
            }
        }
        this.event.tags = newList;
        this.conditions.push(this.storage.getCondition(id));
    }
    
    confirm() {
        console.log(this.event);
    }
}
