import { Component, EventEmitter, Output } from '@angular/core';
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import { GlobalService } from '../_services/global.service';
import { WalletService } from '../_services/wallet.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faCircleQuestion = faCircleQuestion
  constructor(private globalService:GlobalService, public walletService:WalletService) {}
  connectWallet() {
    this.globalService.onConnectWallet.next(null)
  }

}
