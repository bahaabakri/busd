import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPromoComponent } from './main-promo.component';

describe('MainPromoComponent', () => {
  let component: MainPromoComponent;
  let fixture: ComponentFixture<MainPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
