import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainPromoComponent } from "./main-promo/main-promo.component";

const routes: Routes = [{
    path:'',
    component: MainPromoComponent
}];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class PromoRouterModule { }