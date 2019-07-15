import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDrawingComponent } from './line-drawing.component';

describe('LineDrawingComponent', () => {
  let component: LineDrawingComponent;
  let fixture: ComponentFixture<LineDrawingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDrawingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
