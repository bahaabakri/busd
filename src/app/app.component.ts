import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {GlobalService} from './_services/global.service'
import { WalletService } from './_services/wallet.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavbarShown:boolean | undefined
  public walletConnected: boolean = false;
  public walletId: string = '';
  
  
  constructor(private router:Router, private location:Location, @Inject(GlobalService) public globalService:GlobalService, private walletService: WalletService) {
    this.router.events.subscribe(val => {
      if (location.path() === "" || location.path() === "/registration") {
          this.isNavbarShown =  false
      } else {
         this.isNavbarShown =  true
      }
    });
    this.globalService.onConnectWallet.subscribe(el => {
      // connect to wallet 
      this.connectWallet()

    })
    this.globalService.onDisconnectWallet.subscribe(el => {
      this.disconnectWallet()
    })
  }

  ngOnInit(): void {
    // initial checking for check wallet connection
    this.checkWalletConnection()
  }

  connectWallet() {
    this.walletService.connectWallet().then((permissions: any) => {
      console.log(permissions);
      this.walletService.isWalletConnected = true
      this.walletService.walletId = permissions[0].caveats[0].value[0];
    })
    .catch((err:any) => {
      if (err.code === 4001) {
        this.globalService.showToast('Please connect to MetaMask.', 'danger');
      } else {
        this.globalService.showToast(err, 'danger');
      }
    })
  }
  checkWalletConnection() {
    
    this.walletService.checkWalletConnection().then((accounts:any) => {
      if (accounts) {
        if(accounts.length > 0){
          this.walletService.isWalletConnected = true;
          this.walletService.walletId = accounts[0];
        }
      }
    });
  }
  disconnectWallet() {
    this.walletService.disconnectWallet().then(el => {
      this.walletService.isWalletConnected = false;
      this.walletService.walletId = '';
    })
  }

}
