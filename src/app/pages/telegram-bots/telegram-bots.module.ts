import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegramBotsRouterModule } from './telegram-bots-router.module';
import { MainTelegramBotsComponent } from './main-telegram-bots/main-telegram-bots.component';



@NgModule({
  declarations: [
    MainTelegramBotsComponent
  ],
  imports: [
    CommonModule,
    TelegramBotsRouterModule
  ]
})
export class TelegramBotsModule { }
