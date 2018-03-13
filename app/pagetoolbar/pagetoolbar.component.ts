import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-toolbar',
  templateUrl: './pagetoolbar.component.html',
  styleUrls: ['./pagetoolbar.component.scss']
})
export class PagetoolbarComponent implements OnInit {

    app = {
        name: 'Partygram App'
    };
    
  constructor() { }

  ngOnInit() {
  }

}
