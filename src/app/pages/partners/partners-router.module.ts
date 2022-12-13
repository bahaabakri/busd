import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainPartnersComponent } from "./main-partners/main-partners.component";

const routes: Routes = [{
    path:'',
    component: MainPartnersComponent
}];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class PartnersRouterModule { }