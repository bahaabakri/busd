import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';
import {menuData} from '../../../../../_data/menu-list'
import {Menu} from '../../../../../_data/menu-list'
@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menu: Menu[]
  constructor(public globalService:GlobalService) {
    this.menu = menuData
    console.log(this.menu);
    
  }
  ngOnInit() {

  }

}
