import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNumbersContentComponent } from './stats-numbers-content.component';

describe('StatsNumbersContentComponent', () => {
  let component: StatsNumbersContentComponent;
  let fixture: ComponentFixture<StatsNumbersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsNumbersContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsNumbersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
