import { Component } from '@angular/core';
import { faArrowUp, faArrowDown, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'stats-numbers-content',
  templateUrl: './stats-numbers-content.component.html',
  styleUrls: ['./stats-numbers-content.component.scss']
})
export class StatsNumbersContentComponent {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCircleQuestion = faCircleQuestion
  isUp: boolean = true
}
