import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'page-toolbar',
  templateUrl: './pagetoolbar.component.html',
  styleUrls: ['./pagetoolbar.component.scss']
})
export class PagetoolbarComponent implements OnInit {

    app = {
        name: 'Partygram App'
    };
    
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

    
    userOnline(): boolean {
        return this.api.isOnline();
    }
}
