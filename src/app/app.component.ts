import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavbarShown:boolean | undefined
  constructor(private router:Router, private location:Location) {
    this.router.events.subscribe(val => {
      if (location.path() === "") {
          // do something
          this.isNavbarShown =  false
      } else {
         // do something else
         this.isNavbarShown =  true
      }
    });
  }

}
