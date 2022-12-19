import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoRouterModule } from './promo-router.module';
import { MainPromoComponent } from './main-promo/main-promo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PresentationsComponent } from './presentations/presentations.component';
import { VideosComponent } from './videos/videos.component';
import { BannersComponent } from './banners/banners.component';
import { FosageComponent } from './fosage/fosage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MainPromoComponent,
    PresentationsComponent,
    VideosComponent,
    BannersComponent,
    FosageComponent
  ],
  imports: [
    CommonModule,
    PromoRouterModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class PromoModule { }
