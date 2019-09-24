import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndIntegrationComponent } from './services-and-integration.component';

describe('ServicesAndIntegrationComponent', () => {
  let component: ServicesAndIntegrationComponent;
  let fixture: ComponentFixture<ServicesAndIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAndIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAndIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
