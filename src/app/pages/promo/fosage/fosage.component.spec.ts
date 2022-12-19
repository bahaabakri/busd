import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosageComponent } from './fosage.component';

describe('FosageComponent', () => {
  let component: FosageComponent;
  let fixture: ComponentFixture<FosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
