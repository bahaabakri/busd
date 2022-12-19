import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.scss']
})
export class MainInformationComponent {
constructor(public globalService: GlobalService) {}
}
