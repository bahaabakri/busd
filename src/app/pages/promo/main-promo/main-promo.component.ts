import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-main-promo',
  templateUrl: './main-promo.component.html',
  styleUrls: ['./main-promo.component.scss']
})
export class MainPromoComponent {
  constructor(public globalService: GlobalService) {}
}
