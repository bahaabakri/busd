import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'stats-numbers-and-chart',
  templateUrl: './stats-numbers-and-chart.component.html',
  styleUrls: ['./stats-numbers-and-chart.component.scss']
})
export class StatsNumbersAndChartComponent implements OnDestroy, AfterViewInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  isUp: boolean = true
  constructor() {}

  ngAfterViewInit() {

  }
  ngOnDestroy(): void {

  }

}
