import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOneComponent } from './services-one.component';

describe('ServicesOneComponent', () => {
  let component: ServicesOneComponent;
  let fixture: ComponentFixture<ServicesOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
