import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesThreeComponent } from './services-three.component';

describe('ServicesThreeComponent', () => {
  let component: ServicesThreeComponent;
  let fixture: ComponentFixture<ServicesThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
