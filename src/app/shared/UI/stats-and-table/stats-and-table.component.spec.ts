import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAndTableComponent } from './stats-and-table.component';

describe('StatsAndTableComponent', () => {
  let component: StatsAndTableComponent;
  let fixture: ComponentFixture<StatsAndTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsAndTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsAndTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
