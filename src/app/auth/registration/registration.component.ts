import { Component, OnInit } from '@angular/core';
import {faInfo, faCheck, faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import { WalletService } from 'src/app/_services/wallet.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {

  faInfo = faInfo
  faDone = faCheck
  faError = faCircleExclamation

  constructor(public walletService: WalletService) {}

  // isWalletConnected:boolean = false;
  isNetworkIssue:boolean = true;
  isRegistrationIssue:boolean = true;
  isBalanceIssue:boolean =true;
  isApproveUsdIssue:boolean = true;


}
