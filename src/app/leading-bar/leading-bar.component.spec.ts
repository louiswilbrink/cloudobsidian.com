import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingBarComponent } from './leading-bar.component';

describe('LeadingBarComponent', () => {
  let component: LeadingBarComponent;
  let fixture: ComponentFixture<LeadingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
