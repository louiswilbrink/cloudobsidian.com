import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTwoComponent } from './process-two.component';

describe('ProcessTwoComponent', () => {
  let component: ProcessTwoComponent;
  let fixture: ComponentFixture<ProcessTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
