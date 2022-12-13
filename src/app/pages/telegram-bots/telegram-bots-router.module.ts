import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainTelegramBotsComponent } from "./main-telegram-bots/main-telegram-bots.component";

const routes: Routes = [{
    path:'',
    component: MainTelegramBotsComponent
}];
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class TelegramBotsRouterModule { }