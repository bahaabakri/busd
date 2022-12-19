import { Component } from '@angular/core';
import { faCopy, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';
import { GlobalService } from 'src/app/_services/global.service';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
faCopy = faCopy
faCircleQuestion = faCircleQuestion
constructor(public globalService:GlobalService ) {}

}
