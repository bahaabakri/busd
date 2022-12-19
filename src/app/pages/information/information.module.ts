import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRouterModule } from './information-router.module';
import { MainInformationComponent } from './main-information/main-information.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainInformationComponent
  ],
  imports: [
    CommonModule,
    InformationRouterModule,
    SharedModule
  ]
})
export class InformationModule { }
