import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";

const routes: Routes = [{
    path:'',
    component: MainDashboardComponent
}];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class DashboardRouterModule { }