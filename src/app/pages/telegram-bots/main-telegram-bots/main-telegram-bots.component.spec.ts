import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTelegramBotsComponent } from './main-telegram-bots.component';

describe('MainTelegramBotsComponent', () => {
  let component: MainTelegramBotsComponent;
  let fixture: ComponentFixture<MainTelegramBotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTelegramBotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTelegramBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
