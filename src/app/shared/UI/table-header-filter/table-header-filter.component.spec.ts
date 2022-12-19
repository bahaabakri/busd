import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderFilterComponent } from './table-header-filter.component';

describe('TableHeaderFilterComponent', () => {
  let component: TableHeaderFilterComponent;
  let fixture: ComponentFixture<TableHeaderFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeaderFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeaderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
