import { Component, ElementRef, Inject } from '@angular/core';
import { faCopy, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-main-links',
  templateUrl: './main-links.component.html',
  styleUrls: ['./main-links.component.scss']
})
export class MainLinksComponent {
  faCircleQuestion= faCircleQuestion;
  faCopy = faCopy
  constructor(@Inject(GlobalService) public globalService:GlobalService) {}

}
