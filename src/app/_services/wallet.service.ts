import { Inject, Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import {HttpClient} from '@angular/common/http'
import { from, map, switchMap } from 'rxjs';
import detectEthereumProvider from '@metamask/detect-provider';
import { Auth, signOut, signInWithCustomToken } from '@angular/fire/auth';
interface NonceResponse {
  nonce: string;
}
interface VerifyResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class WalletService {
  // public ethereum;
  private ethereum:any;
  public walletId:string = ''
  public isWalletConnected:boolean = false;
  auth:any
  constructor(@Inject(GlobalService) private globalService: GlobalService, private http:HttpClient) {

  }

  connectWallet() {
    return detectEthereumProvider().then(provider => {
      this.ethereum = provider
      return this.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }],
      })
    })
    
  }
  checkWalletConnection() {
    return detectEthereumProvider().then(provider => {
      this.ethereum = provider
      return this.ethereum.request({
        method: 'eth_accounts'
      })
    })
  }

  disconnectWallet() {
    return detectEthereumProvider().then(provider => {
      this.ethereum = provider
      return this.ethereum.request({
        method: 'eth_requestAccounts',
        params: [{ eth_accounts: {} }],
      })
    })
  }

  // public signInWithMetaMask() {
  //   let ethereum: any;
  //   return from(detectEthereumProvider()).pipe(
  //     // Step 1: Request (limited) access to users ethereum account
  //     switchMap(async (provider) => {
  //       if (!provider) {
  //         throw new Error('Please install MetaMask');
  //       }
  //       ethereum = provider;
  //       return await ethereum.request({ method: 'eth_requestAccounts' });
  //     }),
  //     // Step 2: Retrieve the current nonce for the requested address
  //     switchMap(() =>
  //       this.http.post<NonceResponse>(
  //         'https://us-central1-ionic-angular-web3.cloudfunctions.net/getNonceToSign',
  //         {
  //           address: ethereum.selectedAddress,
  //         }
  //       )
  //     ),
  //     // Step 3: Get the user to sign the nonce with their private key
  //     switchMap(
  //       async (response) =>
  //         await ethereum.request({
  //           method: 'personal_sign',
  //           params: [
  //             `0x${this.toHex(response.nonce)}`,
  //             ethereum.selectedAddress,
  //           ],
  //         })
  //     ),
  //     // Step 4: If the signature is valid, retrieve a custom auth token for Firebase
  //     switchMap((sig) =>
  //       this.http.post<VerifyResponse>(
  //         'https://us-central1-ionic-angular-web3.cloudfunctions.net/verifySignedMessage',
  //         { address: ethereum.selectedAddress, signature: sig }
  //       )
  //     ),
  //     // Step 5: Use the auth token to auth with Firebase
  //     switchMap(
  //       async (response) => {
  //           await signInWithCustomToken(this.auth, response.token)
  //       }  
  //     )
  //   );
  // }
  // private toHex(stringToConvert: string) {
  //   return stringToConvert
  //     .split('')
  //     .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
  //     .join('');
  // }
}
