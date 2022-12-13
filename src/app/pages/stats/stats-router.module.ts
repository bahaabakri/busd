import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MainStatsComponent } from "./main-stats/main-stats.component";

const routes: Routes = [{
    path:'',
    component: MainStatsComponent
}];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class StatsRouterModule { }