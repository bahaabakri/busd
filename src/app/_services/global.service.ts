import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class GlobalService {
    isToastShown:boolean = false;
    toastText!:string
    status! : string
    userId!: string|null
    onConnectWallet = new Subject()
    onDisconnectWallet = new Subject()

    constructor(private route: ActivatedRoute) {
      // get user id from route
      
        this.route.queryParams.subscribe( params => {
          this.userId = params["user"];
          console.log(this.userId);
          
        })
    }

    // apply copy functionality
    async applyCopy(link:HTMLElement | HTMLAnchorElement) {

        const text = (link instanceof HTMLAnchorElement) ? (link.href) : (link.textContent) as string
        this.isToastShown = false;
        try {
          await navigator.clipboard.writeText(text);
          this.showToast('Copied', 'success')
          /* Resolved - text copied to clipboard successfully */
        } catch (err) {
          this.showToast('Copied', 'danger')
          /* Rejected - text failed to copy to the clipboard */
        }
      }
    
      // show toast
      showToast(text:string,status:string) {
        this.isToastShown = true;
        this.toastText = text
        this.status = status
      }
}