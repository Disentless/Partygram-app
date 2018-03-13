import { Component, OnInit } from '@angular/core';
import { AuthData } from '../classes/auth_data';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

    auth: AuthData = {
        login:"", 
        password: ""
    };
    pass_shadow: string = "";
    
    constructor(private api: ApiService) { }

    ngOnInit() {}

    login(): void {
        console.log(this.auth);
    }
    
    register(): void {
        console.log(this.auth);
    }
}
