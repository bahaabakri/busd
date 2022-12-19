import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsRouterModule } from './stats-router.module';
import { MainStatsComponent } from './main-stats/main-stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MainStatsComponent
  ],
  imports: [
    CommonModule,
    StatsRouterModule,
    SharedModule,
    MatTableModule,
    FontAwesomeModule
  ]
})
export class StatsModule { }
