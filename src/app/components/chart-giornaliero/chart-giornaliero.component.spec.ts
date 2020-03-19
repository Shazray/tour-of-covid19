import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGiornalieroComponent } from './chart-giornaliero.component';

describe('ChartGiornalieroComponent', () => {
  let component: ChartGiornalieroComponent;
  let fixture: ComponentFixture<ChartGiornalieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGiornalieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGiornalieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
