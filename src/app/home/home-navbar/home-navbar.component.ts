import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';
import { WalletService } from 'src/app/_services/wallet.service';

@Component({
  selector: 'home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent {

  constructor(public globalService:GlobalService, public walletService:WalletService) {}
  connectWallet() {
    this.globalService.onConnectWallet.next(null)
  }
  disconnectWallet() {
    this.globalService.onDisconnectWallet.next(null)
  }
}

