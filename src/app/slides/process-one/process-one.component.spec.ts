import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOneComponent } from './process-one.component';

describe('ProcessOneComponent', () => {
  let component: ProcessOneComponent;
  let fixture: ComponentFixture<ProcessOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
