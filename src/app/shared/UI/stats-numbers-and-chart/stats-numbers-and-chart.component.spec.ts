import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNumbersAndChartComponent } from './stats-numbers-and-chart.component';

describe('StatsNumbersAndChartComponent', () => {
  let component: StatsNumbersAndChartComponent;
  let fixture: ComponentFixture<StatsNumbersAndChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsNumbersAndChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsNumbersAndChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
