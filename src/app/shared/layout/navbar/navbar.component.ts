import { Component, HostListener, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/_services/global.service';
import { WalletService } from 'src/app/_services/wallet.service';
import {menuData} from '../../../../_data/menu-list'
import {Menu} from '../../../../_data/menu-list'

const MOBILE_HIGHEST_EDGE: number = 1024

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  faClose = faClose
  menu: Menu[]
  isNavbarCollapsed:boolean = true
  innerWidth: any;
  isMobile: boolean = false
  constructor(private router:Router, private globalService:GlobalService, public walletService:WalletService){
    this.menu = menuData
    this.checkIfItIsAMobile()
  }
  @HostListener('window:resize', ['$event'])
    onResize() {
      this.checkIfItIsAMobile()
    }
    connectWallet() {
      this.globalService.onConnectWallet.next(null)
    }
  checkIfItIsAMobile() {
    this.innerWidth = window.innerWidth;
    this.isMobile = (window.innerWidth < MOBILE_HIGHEST_EDGE) ? true : false
  }

  

  navicateToHome() {
    this.router.navigate(['/'])
  }
}
