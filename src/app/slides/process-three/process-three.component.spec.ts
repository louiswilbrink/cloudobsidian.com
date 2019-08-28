import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessThreeComponent } from './process-three.component';

describe('ProcessThreeComponent', () => {
  let component: ProcessThreeComponent;
  let fixture: ComponentFixture<ProcessThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
