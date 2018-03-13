import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetoolbarComponent } from './pagetoolbar.component';

describe('PagetoolbarComponent', () => {
  let component: PagetoolbarComponent;
  let fixture: ComponentFixture<PagetoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
