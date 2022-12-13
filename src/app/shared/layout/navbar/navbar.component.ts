import { Component, HostListener, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {menuData} from '../../../../_data/menu-list'
import {Menu} from '../../../../_data/menu-list'

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
  constructor(private router:Router){
    this.menu = menuData
  }
  @HostListener('window:resize', ['$event'])
    onResize() {
      this.innerWidth = window.innerWidth;
      this.isMobile = (window.innerWidth < 768) ? true : false
    }
  
  ngOnInit() {

  }

  

  navicateToHome() {
    this.router.navigate(['/'])
  }
}
