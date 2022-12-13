import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainLinksComponent } from "./main-links/main-links.component";

const routes: Routes = [{
    path:'',
    component: MainLinksComponent
}];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class LinkRouterModule { }