import { Component, OnInit } from '@angular/core';
import { AuthData } from '../classes/auth_data';
import { ApiService } from '../api.service';
import { LoginData, RegisterData } from '../classes/api';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

    loginData: LoginData = {
        username:"", 
        password: ""
    };
    registerData: RegisterData = {
        username: "",
        password: ""
    }
    pass_shadow: string = "";
    
    constructor(private api: ApiService) { }

    ngOnInit() {}

    login(): void {
        
    }
    
    register(): void {
        
    }
}
