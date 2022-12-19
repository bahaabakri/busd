import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainPromoComponent } from "./main-promo/main-promo.component";
import { PresentationsComponent } from "./presentations/presentations.component";
import { BannersComponent } from "./banners/banners.component";
import { FosageComponent } from "./fosage/fosage.component";
import { VideosComponent } from "./videos/videos.component";

const routes: Routes = [
    {
        path:'',
        component: MainPromoComponent,
        children: [
            { path: '', redirectTo: 'presentations', pathMatch: 'prefix' },

            {
                path:'presentations',
                component: PresentationsComponent,
            },
            {
                path:'banners',
                component: BannersComponent
            },
            {
                path:'fosage',
                component: FosageComponent
            },
            {
                path:'videos',
                component: VideosComponent
            }
        ]
    },

];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class PromoRouterModule { }