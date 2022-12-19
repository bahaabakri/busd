import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegramBotsRouterModule } from './telegram-bots-router.module';
import { MainTelegramBotsComponent } from './main-telegram-bots/main-telegram-bots.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MainTelegramBotsComponent
  ],
  imports: [
    CommonModule,
    TelegramBotsRouterModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class TelegramBotsModule { }
