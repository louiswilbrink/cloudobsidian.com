import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndPricingComponent } from './services-and-pricing.component';

describe('ServicesAndPricingComponent', () => {
  let component: ServicesAndPricingComponent;
  let fixture: ComponentFixture<ServicesAndPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAndPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAndPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
