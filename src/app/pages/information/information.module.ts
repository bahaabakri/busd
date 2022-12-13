import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRouterModule } from './information-router.module';
import { MainInformationComponent } from './main-information/main-information.component';



@NgModule({
  declarations: [
    MainInformationComponent
  ],
  imports: [
    CommonModule,
    InformationRouterModule
  ]
})
export class InformationModule { }
