import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTwoComponent } from './about-us-two.component';

describe('AboutUsTwoComponent', () => {
  let component: AboutUsTwoComponent;
  let fixture: ComponentFixture<AboutUsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
