import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainInformationComponent } from "./main-information/main-information.component";

const routes: Routes = [{
    path:'',
    component: MainInformationComponent
}];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class InformationRouterModule { }