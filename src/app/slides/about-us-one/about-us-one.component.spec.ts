import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOneComponent } from './about-us-one.component';

describe('AboutUsOneComponent', () => {
  let component: AboutUsOneComponent;
  let fixture: ComponentFixture<AboutUsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
