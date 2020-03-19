import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNazionaleComponent } from './chart-nazionale.component';

describe('ChartNazionaleComponent', () => {
  let component: ChartNazionaleComponent;
  let fixture: ComponentFixture<ChartNazionaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartNazionaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNazionaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
