import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    
    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() {}

    login(): void {
        this.api.login(this.loginData)
        .subscribe(data => {
            console.log("Login success");
            this.router.navigate(['list']);
        }, error => {
            console.log("Login error");
        });
    }
    
    register(): void {
        this.api.register(this.registerData)
        .subscribe(data => {
            console.log("Register success");
            this.router.navigate(['list']);
        }, error => {
            console.log("Register error");
        });
    }
}
