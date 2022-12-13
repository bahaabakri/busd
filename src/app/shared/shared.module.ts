import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsNumbersComponent } from './UI/stats-numbers/stats-numbers.component';
import { StatsNumbersAndChartComponent } from './UI/stats-numbers-and-chart/stats-numbers-and-chart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReduceStringSize } from 'src/_pipes/reduce-string-size';
import { NgChartsConfiguration, NgChartsModule  } from 'ng2-charts';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { CategoryBlockComponent } from './UI/category-block/category-block.component';
import { StatsAndTableComponent } from './UI/stats-and-table/stats-and-table.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { StatsNumbersContentComponent } from './UI/stats-numbers-content/stats-numbers-content.component';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    StatsNumbersComponent,
    StatsNumbersAndChartComponent,
    ReduceStringSize,
    LineChartComponent,
    CategoryBlockComponent,
    StatsAndTableComponent,
    NavbarComponent,
    StatsNumbersContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgChartsModule,
    NgbModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    // Thoses components are availabe in any module import SharedModule
    StatsNumbersComponent,
    StatsNumbersAndChartComponent,
    ReduceStringSize,
    LineChartComponent,
    CategoryBlockComponent,
    StatsAndTableComponent,
    NavbarComponent,
    StatsNumbersContentComponent,
    FooterComponent
  ],
  providers:[
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class SharedModule { }
