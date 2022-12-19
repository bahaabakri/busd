import { Component } from '@angular/core';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-main-telegram-bots',
  templateUrl: './main-telegram-bots.component.html',
  styleUrls: ['./main-telegram-bots.component.scss']
})
export class MainTelegramBotsComponent {
  faTelegram =faTelegram
  telegramBotsListData = [
    {
      title:'BUSD FORSAGE Notifier',
      description:'new partners and transactions bla bla'
    },

    {
      title:'BUSD FORSAGE Notifier',
      description:'new partners and transactions bla bla'
    }
  ]
  constructor(public globalService: GlobalService) {}

}
