import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsRouterModule } from './stats-router.module';
import { MainStatsComponent } from './main-stats/main-stats.component';



@NgModule({
  declarations: [
    MainStatsComponent
  ],
  imports: [
    CommonModule,
    StatsRouterModule
  ]
})
export class StatsModule { }
