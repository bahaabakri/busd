import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoRouterModule } from './promo-router.module';
import { MainPromoComponent } from './main-promo/main-promo.component';



@NgModule({
  declarations: [
    MainPromoComponent
  ],
  imports: [
    CommonModule,
    PromoRouterModule
  ]
})
export class PromoModule { }
